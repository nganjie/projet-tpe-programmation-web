<?php
require 'class/Autoloader.php';
Autoloader::register();
require_once "database.php";
$secu = new Securisation();
$nom;
$numtel;
$adresse;
/*
$id=17;
$typevehicule = $db->query("SELECT typeV FROM vehicule WHERE idvehicule='$id'");
$typevehicule = $typevehicule->fetch();
var_dump($typevehicule);

if(strtolower($typevehicule[0])=="voiture")
{
   // echo "un monde de fou";
    $infovoiture = $db->query("SELECT v.idvehicule,a.nom,a.numero,a.adresse,a.nationalite,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,boite_vitesse,energie,num_chassie,nb_cheveau,moteur FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN voiture ve ON ve.idvehicule= v.idvehicule WHERE ve.idvehicule='$id'");
    
    $infovoiture = $infovoiture->fetch();
    var_dump($infovoiture);
}
if(strtolower($typevehicule[0])=="moto")
{
    $infomoto = $db->query("SELECT v.idvehicule,a.nom,a.numero,a.adresse,a.nationalite,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,nb_roue FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN moto m ON m.idvehicule= v.idvehicule WHERE m.idvehicule='$id'");
    $infomoto = $infomoto->fetch();
    var_dump($infomoto);
}
if(strtolower($typevehicule[0])=="velo")
{
    $infovelo = $db->query("SELECT v.idvehicule,a.nom,a.numero,a.adresse,a.nationalite,nb_place,typeV,image,prix,a.localisation as ville,marque,categorie,taille FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN velo ve ON ve.idvehicule= v.idvehicule WHERE ve.idvehicule='$id'");
    $infovelo = $infovelo->fetch();
    var_dump($infovelo);
}*/

/*$voiture = $db->query("SELECT v.idvehicule,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,boite_vitesse,energie,num_chassie,nb_cheveau,moteur FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN voiture ve ON ve.idvehicule= v.idvehicule");
    $resultvoiture = $voiture->fetchAll();
   // var_dump($resultvoiture);
    $moto = $db->query("SELECT v.idvehicule,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,nb_roue FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN moto m ON m.idvehicule= v.idvehicule");
    $resultmoto = $moto->fetchAll();
   // var_dump($resultmoto);
    $velo = $db->query("SELECT v.idvehicule,nb_place,typeV,image,prix,a.localisation as ville,marque,categorie,taille FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN velo ve ON ve.idvehicule= v.idvehicule");
    $resultvelo = $velo->fetchAll();
var_dump($typeV);
$voiture = $db->query("SELECT v.idvehicule,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,boite_vitesse,energie,num_chassie,nb_cheveau,moteur FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN voiture ve ON ve.idvehicule= v.idvehicule");
$resultvoiture = $voiture->fetchAll();
// var_dump($resultvoiture);
$moto = $db->query("SELECT v.idvehicule,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,nb_roue FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN moto m ON m.idvehicule= v.idvehicule");
$resultmoto = $moto->fetchAll();
// var_dump($resultmoto);
$velo = $db->query("SELECT v.idvehicule,nb_place,typeV,image,prix,a.localisation as ville,marque,categorie,taille FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN velo ve ON ve.idvehicule= v.idvehicule");
$resultvelo = $velo->fetchAll();
//var_dump($resultvelo);

$tab = array_merge($resultvoiture,$resultmoto,$resultvelo);
$marqueV = $db->query("SELECT DISTINCT  marque FROM voiture");
$marquer1 =$marqueV->fetchAll();
$marqueM = $db->query("SELECT DISTINCT  marque FROM moto");
$marquer2 =$marqueM->fetchAll();
$marqueVe = $db->query("SELECT DISTINCT  marque FROM velo");
$marquer3 =$marqueVe->fetchAll();
$tab_marque = array_merge($marquer1,$marquer2,$marquer3);
//var_dump($tab_marque); 
echo json_encode($tab);*/

?>