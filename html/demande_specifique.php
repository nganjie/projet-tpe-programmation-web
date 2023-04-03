<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="../css/styleheader.css">
    <link rel="stylesheet" href="../css/contact.css">
   
    <title>Demande spécifique</title>
</head>
<body>
<?php include "header.php"; ?>
<section id="contact-c">
        <h1 class="c-h1">Faire Une Demande Spécifique</h1>
            <div class="localisation_contact_div">
               
                

                <div class="form_contact">
                    <h3>Envoyer une demande</h3>
                    <form action="#" method="POST" id="form-message">
                        <input type="text" name="nom" placeholder="Nom">
                        <input type="email" name="adresse" placeholder="Adresse Mail">
                        <input type="text"name="objet" placeholder="Objet">
                        <textarea name="message"id=""cols="30" rows="10" placeholder="Message"></textarea>
                        <input type="text" name="type-demande" value="message" style="display:none">
                        <input type="submit" value="Envoyer">
                        <p class="message-info"></p>
                    </form>
                </div>
            </div>
        </section>  
</body>
<script src="../js/profil.js"></script>
<script src="../js/index.js"></script>
    <script src="../js/form_acceuil.js"></script>
    <script src="../js/contact.js"></script>
    <script langage="javascript">
        document.getElementById("demande").className ="active";
    </script>
</html>