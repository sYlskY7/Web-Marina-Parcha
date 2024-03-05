-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS MP;

-- Usar la base de datos
USE MP;

-- Crear tabla de clientes
CREATE TABLE Cliente (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL
);

-- Crear tabla de citas
CREATE TABLE Cita (
    idCita INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    notas TEXT,
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente)
);

-- Crear tabla de usuarios
CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT,
    nombreUsuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    UNIQUE (nombreUsuario),  -- Asegura que los nombres de usuario sean únicos
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente)
);
