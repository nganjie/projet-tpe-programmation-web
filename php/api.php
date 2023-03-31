<?php
require_once "database.php";
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
 echo json_encode($tab);

?>