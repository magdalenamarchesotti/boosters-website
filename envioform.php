<?php 
$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$website = $_POST['website'];
$pais = $_POST['pais'];
$mensaje = $_POST['mensaje'];

echo "<h2>informacion recibida desde php</h2>";
echo "el nombre recibido es: " .$nombre. "</br>";
echo "el mail recibido es: " .$mail. "</br>";
echo "el sitio recibido es: " .$website. "</br>";
echo "el pais recibido es: " .$pais. "</br>";
echo "el mensaje recibido es: " .$mensaje. "</br>";
?>