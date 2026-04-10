<?php
if (isset($_GET['id'])) {
    $pdo = new PDO("mysql:host=localhost;dbname=inventory_db", "root", "");
    $stmt = $pdo->prepare("DELETE FROM assets WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    echo json_encode(["status" => "success"]);
}
?>
