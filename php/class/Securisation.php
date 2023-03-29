<?php 

class Securisation{
    
    public function securiser($donnees){
        $donnees= trim($donnees);
        $donnees = stripslashes($donnees);
        $donnees = strip_tags($donnees);
        return $donnees;

    }
}

?>
