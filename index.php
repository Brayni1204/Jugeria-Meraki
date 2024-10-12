<?php

$request = $_SERVER['REQUEST_URI'];

// Redirigir al contenido correcto basado en la URL
switch ($request) {
    case '/':
        require __DIR__ . '/index.html'; // Página principal
        break;
    case '/Nosotros':
        require __DIR__ . '/Public/Nosotros.html'; // Página de contacto
        break;
    case '/Novedades':
        require __DIR__ . '/Public/Novedades.html'; // Página de productos
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/Public/404.html'; // Página 404
        break;
}
