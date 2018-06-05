<?php
// Grabs the URI and breaks it apart in case we have querystring stuff
$request_uri = explode('?', $_SERVER['REQUEST_URI'], 2);

// Route it up!
switch ($request_uri[0]) {
    // Home page
    case '/':
        header('Location: http://tobywynnemellor.com');
        break;
    // About page
    case '/carif':
        header('Location: http://tobywynnemellor.com/carif.html');
        break;
    // Everything else
    default:
        header('HTTP/1.0 404 Not Found');
        break;
}
