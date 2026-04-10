<?php
header("Content-Type: application/json");
require_once __DIR__ . '/db_config.php'; 

try {
    // db_config.php içinde tanımladığın $pdo değişkenini kullan
    $stmt = $pdo->query("SELECT * FROM assets ORDER BY id DESC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>

