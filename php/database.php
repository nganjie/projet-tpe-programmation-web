<?php
try{
    $db = new PDO('mysql:host=localhost;dbname=ventebd','root','');
}catch(EXCEPTION $e){
    die('Erreur'.$e->getMessage());
}

?>