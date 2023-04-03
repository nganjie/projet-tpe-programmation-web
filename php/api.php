<?php
require 'class/Autoloader.php';
Autoloader::register();
require_once "database.php";
$type = $_POST['type-demande'];
$datem = new DateTime();
$secu = new Securisation();
//echo $type;
if($type=="acceuil")
{
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
}
if($type=="infotemplate")
{
    $id = $_POST["idvehicule"];
   // $id=17;
$typevehicule = $db->query("SELECT typeV FROM vehicule WHERE idvehicule='$id'");
$typevehicule = $typevehicule->fetch();
//var_dump($typevehicule);

if(strtolower($typevehicule[0])=="voiture")
{
    //echo "un monde de fou";
    $infovoiture = $db->query("SELECT v.idvehicule,a.nom,a.numero,a.adresse,a.nationalite,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,boite_vitesse,energie,num_chassie,nb_cheveau,moteur FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN voiture ve ON ve.idvehicule= v.idvehicule WHERE ve.idvehicule='$id'");
    
    $infovoiture = $infovoiture->fetch();
    echo json_encode($infovoiture);
}
if(strtolower($typevehicule[0])=="moto")
{
    $infomoto = $db->query("SELECT v.idvehicule,a.nom,a.numero,a.adresse,a.nationalite,nb_place,typeV,image,prix,a.localisation as ville,immatri,marque,date_fab,date_mise,couleur,nb_vitesse,nb_roue FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN moto m ON m.idvehicule= v.idvehicule WHERE m.idvehicule='$id'");
    $infomoto = $infomoto->fetch();
    echo json_encode($infomoto);
}
if(strtolower($typevehicule[0])=="velo")
{
    $infovelo = $db->query("SELECT v.idvehicule,a.nom,a.numero,a.adresse,a.nationalite,nb_place,typeV,image,prix,a.localisation as ville,marque,categorie,taille FROM vehicule v INNER JOIN enregistrer e ON e.idvehicule= v.idvehicule INNER JOIN admin a ON a.ID=e.ID INNER JOIN velo ve ON ve.idvehicule= v.idvehicule WHERE ve.idvehicule='$id'");
    $infovelo = $infovelo->fetch();
    echo json_encode($infovelo);
}
}

if($type=="enregistrer-client")
{
    $tab_info =[];
    $max_id = $db->query("SELECT MAX(IDClient) FROM client");
    $max_id = $max_id->fetch();
    //var_dump($max_id);
   // echo $max_id[0]+1;
    
   if(!empty($_POST["nom"])&&!empty($_POST["tel"])&&!empty($_POST["adresse"])&&!empty($_POST["password"]))
   {
       $nom =$secu->securiser($_POST["nom"]) ;
        $numtel =$secu->securiser($_POST["tel"]);
        $adresse= $secu->securiser($_POST["adresse"]);
        $password = $secu->securiser($_POST["password"]);
       // $nom ="nganjie";
        //$numtel = "6750532";
        //$adresse = "nganjienzatsi@gmail.com";
        //$password ="votoir";
        $max_id = $db->query("SELECT MAX(IDClient) FROM client");
        $max_id = $max_id->fetch();
        $max_id[0]++;
        $envoie = $db->prepare("INSERT INTO client(IDClient,nom,num_tel,adresse,password,date_enregistrement) VALUES(:id,:nom,:num,:adresse,:motpass,:datet)");
        $envoie->execute(array(
            "id"=>$max_id[0],
            "nom"=>$nom,
            "num"=>$numtel,
            "adresse"=>$adresse,
            "motpass"=>$password,
            "datet"=> $datem->format("Y-m-d H:i:s")
        ));
        $tab_info["status"] =0;
        $tab_info["info"] ="informations enrégistrer avec success";
        echo json_encode($tab_info);
    }else{
        $tab_info["status"] =1;
        $tab_info["info"] ="vérifié que tous les champs sont remplies";
        echo json_encode($tab_info);

    }

}

if($type=="connexion-client")
{
    $tab_info =[];
    if(!empty($_POST["adresse"])&&!empty($_POST["password"]))
    {
        $adresse = $secu->securiser($_POST["adresse"]);
        $password = $secu->securiser($_POST["password"]);
        $recherche =$db->prepare("SELECT * FROM client WHERE adresse = ? AND password = ?");

//$adresse ="nganjienzatsi@gmail.co";
//$password="votoir";
        $recherche->execute(array($adresse,$password));
        if($recherche->rowCount()==1)
        {
            $result = $recherche->fetch();
            $result["status"]=0;
            

            //var_dump($result);
            echo json_encode($result);
        }else{
            $tab_info["status"] =2;
        $tab_info["info"] ="adresse ou mot de passe incorrect";
        echo json_encode($tab_info);
        }
        
    }else{
        $tab_info["status"] =1;
        $tab_info["info"] ="vérifié que tous les champs sont remplies";
        echo json_encode($tab_info);
    }
}
if($type=="message")
{
    $tab_info =[];
    if(!empty($_POST["nom"])&&!empty($_POST["adresse"])&&!empty($_POST["objet"])&&!empty($_POST["message"]))
    {
        $nom =$secu->securiser($_POST["nom"]);
        $adresse =$secu->securiser($_POST["adresse"]);
        $objet =$secu->securiser($_POST["objet"]);
        $message = $secu->securiser($_POST["message"]);

        $insert = $db->prepare("INSERT INTO messages(nom,adresse,objet,message) VALUES(:nom,:adresse,:objet,:message)");
        $insert->execute(array(
            "nom"=>$nom,
            "adresse"=>$adresse,
            "objet"=>$objet,
            "message"=>$message
        ));
        $tab_info["status"] =0;
        $tab_info["info"] ="Votre Message à été envoyer avec succes";
        echo json_encode($tab_info);

    }else {
        $tab_info["status"] =1;
        $tab_info["info"] ="vérifié que tous les champs sont remplies";
        echo json_encode($tab_info);
    }

}

?>