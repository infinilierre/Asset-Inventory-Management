<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pdo = new PDO("mysql:host=localhost;dbname=inventory_db", "root", "");
    $sql = "INSERT INTO assets (item_name, category, quantity) VALUES (?, ?, ?)";
    $pdo->prepare($sql)->execute([$_POST['name'], $_POST['category'], $_POST['quantity']]);
    header("Location: ../index.html");
}
?>
