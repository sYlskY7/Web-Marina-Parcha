<?php
// // Incluye el archivo de conexión a la base de datos
// require_once('./conexion.php');

// // Verifica si se ha enviado el formulario de inicio de sesión
// if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
//     // Obtiene los datos del formulario
//     $email = $_POST["email"];
//     $password = $_POST["password"];

//     // Validación de datos simple (puedes agregar más validaciones según tus necesidades)
//     if (empty($email) || empty($password)) {
//         echo "Por favor, completa todos los campos.";
//         exit();
//     }

//     // Verifica las credenciales en la base de datos
//     $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
//     $stmt->execute([$email]);
//     $user = $stmt->fetch(PDO::FETCH_ASSOC);

//     if (!$user || !password_verify($password, $user['password'])) {
//         echo "Credenciales incorrectas. Introduce las credenciales correctas.";
//         exit();
//     }
// Inicio de sesión exitoso
if (isset($_POST["inicioSesion"])) {
    echo "¡Inicio de sesión exitoso!";
    // Puedes redirigir a la página de reservas
    header("Location: reservar.html");
}

    // exit();
// }
