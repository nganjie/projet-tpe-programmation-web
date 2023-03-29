<?php
/**
 * pour la connexion à la base de donnée et les requètes sql
 */
 class Database{
    private $db_name;
    private $db_user;
    private $db_pass;
    private $db_host;
    private $pdo; 
    /**
     * constructeur pour les elément nécessaire à la connexion à la base de donnée
     *
     * @param string $db_name
     * @param string $db_user
     * @param string $db_pass
     * @param string $db_host
     */
    public function __construct($db_name,$db_user='root',$db_pass='root',$db_host='localhost'){
        $this->db_name = $db_name;
        $this->db_user= $db_user;
        $this->db_pass= $db_pass;
        $this->db_host = $db_host;

    }
    /**
     * pour initialiser la connexion à la base de donnée
     *
     * 
     */
    private function getPDO(){
        if($this->pdo===null){
            $pdo = new PDO('mysql:dbname=cedric11;host=localhost',"root","");
            $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $this->pdo = $pdo;

        }
       
        return $pdo;
    }
    
    public function query($statement){
        $req = $this->getPDO()->query($statement);
        $datas = $req->fetchAll(PDO::FETCH_OBJ);
        return $datas;
    }
 }

?>
