<?php

/**
 * class destiné à inclure les fichier de class dans les fichiers principale
 * ainsi que leurs namespace sans avoir besoins de les appélé explicitement avec l'instruction required
 */
class Autoloader{
    static function register(){
        spl_autoload_register(array(__CLASS__,'autoload'));
    }
    static  function autoload($nomclass){
        
        
           
        require'class/'.$nomclass.'.php';
        
        

    }
}

?>