<?php
// Grabs the URI and breaks it apart in case we have querystring stuff
$request_uri = explode('?', $_SERVER['REQUEST_URI'], 2);

// Route it up!
switch ($request_uri[0]) {
    // Home page
    case '/':
        header('Location: http://tobywynnemellor.com');
        break;
    // carif page
    case '/careif':
        header('Location: https://tobywynne-mellor.github.io/careif.html');
        break;
    //projects page
    case '/projects':
        header('Location: https://tobywynne-mellor.github.io/projects.html');
        break;
    //about page
    case '/about':
        header('Location: http://tobywynnemellor.com/about.html');
        break;
    // Everything else
    default:
        header('HTTP/1.0 404 Not Found');
        break;
}
