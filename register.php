<?php
// Incluye el archivo de conexión a la base de datos
require_once('conexion.php');

// Verifica si se ha enviado el formulario de registro
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    // Obtiene los datos del formulario
    $newEmail = $_POST["newEmail"];
    $newPassword = $_POST["newPassword"];

    // Validación de datos simple (puedes agregar más validaciones según tus necesidades)
    if (empty($newEmail) || empty($newPassword)) {
        echo "Todos los campos son obligatorios.";
        exit();
    }

    // Verifica si el correo electrónico ya está registrado
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->execute([$newEmail]);
    $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($existingUser) {
        echo "El correo electrónico ya está registrado. Por favor, elige otro.";
        exit();
    }

    // Hash de la contraseña (mejora la seguridad usando algoritmos de hashing más fuertes)
    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    // Inserta los datos en la base de datos
    $stmt = $pdo->prepare("INSERT INTO usuarios (email, password) VALUES (?, ?)");
    $stmt->execute([$newEmail, $hashedPassword]);

    // Redirige a la página de inicio de sesión
    header("Location: login.html");
    exit();
}
?>
