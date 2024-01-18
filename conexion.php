<?php
// Configuración de la conexión a la base de datos
$dsn = "mysql:host=localhost;dbname=tu_base_de_datos;charset=utf8mb4";
$username = "tu_usuario";
$password = "tu_contraseña";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error en la conexión a la base de datos: " . $e->getMessage());
}
?>
