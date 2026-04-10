document.addEventListener("DOMContentLoaded", () => {
    loadAssets();

   
    const addBtn = document.querySelector("button"); 
    if (addBtn) {
        addBtn.addEventListener("click", addAsset);
    }
});

async function deleteAsset(id) {
    if (confirm("Are you sure you want to remove this item?")) {
        try {
            const response = await fetch(`api/delete_item.php?id=${id}`, { method: 'GET' });
            const result = await response.json();
            if (result.status === "success") {
                loadAssets(); 
            }
        } catch (error) {
            console.error("An error occurred while removing the item:", error);
        }
    }
}

async function loadAssets() {
    try {
        const response = await fetch('api/fetch_items.php');
        const data = await response.json();
        
        const tbody = document.querySelector("#assetTable tbody");
        if (!tbody) return;

        tbody.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.item_name}</td>
                <td>${item.category}</td>
                <td>${item.quantity}</td>
                <td>
                    <button class="btn-delete" onclick="deleteAsset(${item.id})">Remove</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Connection error:", error);
    }
}


async function addAsset() {
    const name = document.querySelector('input[placeholder="Item Name"]').value;
    const category = document.querySelector('input[placeholder="Category"]').value;
    const quantity = document.querySelector('input[placeholder="Qty"]').value;

    if (!name || !category || !quantity) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    try {
        const response = await fetch('api/add_item.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item_name: name, category: category, quantity: quantity })
        });
        
        const result = await response.json();
        if (result.status === "success") {
            loadAssets(); 
           
            document.querySelectorAll('input').forEach(input => input.value = '');
        }
    } catch (error) {
    console.error("Failed to delete asset:", error);
    }
} 




