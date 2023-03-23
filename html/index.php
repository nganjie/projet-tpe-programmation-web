<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/stylegroupe.css">
    <link rel="stylesheet" href="../css/styleindex.css">
    <link rel="stylesheet" href="../css/filtre_recherche.css">
    
        <!-- css files -->
    <link rel="stylesheet" type="text/css" href="/css/filtre_recherche.css">

    <!-- javascript cdn and file -->
    <script src="https://unpkg.com/@spreadtheweb/multi-range-slider@1.0.2/dist/range-slider.main.min.js"></script>

    <script src="/js/filter/search_filter.js" type="module" defer></script>
    
    <title>Document</title>
</head>
<body>
    <div class="main-container">
        <div class="header">
            <header>
               <div class="image-header">
                  <img class="imghead" src="../image/imgheader.jpg">
                </div>
                <div class="menu">
                
                    <ul>
                        <li class="accueil"><a href="accueil.php">Accueil</a></li>
                        <li class="contact"><a href="contact.php">Contact</a></li>
                        <li class="demandesp"><a href="demandesp.php">Demende-specifique</a></li>
                        <li class="vendeur"><a href="vendeur.php">Vendeur</a></li>
                        <li class="login"><a href="login.php">Login</a></li>
                    </ul> 
                </div>
            </header>
        </div>
    </div>
    
    
    <!-- ajout du filtre de recherche -->
    <div class="search_wrapper">
        <h3>Choisir les caracteristiques du vehicule</h3>
        <div class="search_opt">
            <div class="select_option">
                <select name="marques" id="mark-select">
                    <option value="">Marque</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Citroën">Citroën</option>
                    <option value="Renault">Renault</option>
                    <option value="Opel">Opel</option>
                    <option value="Volkswagen">Volkswagen
                    </option>
                </select>

                <select name="towns" id="town-select">
                    <option value="">Ville</option>
                    <option value="Douala">Douala</option>
                    <option value="Yaounde">Yaounde</option>
                    <option value="Bertoua">Bertoua</option>
                    <option value="Limbe">Limbe</option>
                    <option value="Dschang">Dschang</option>
                </select>

                <select name="colors" id="color-select">
                    <option value="">Couleur</option>
                    <option value="">Rouge</option>
                    <option value="Noir">Noir</option>
                    <option value="Jaune">Jaune</option>
                    <option value="Violet">Violet</option>
                    <option value="Rose">Rose</option>
                </select>

                <select name="moteurs" id="color-select">
                    <option value="">Moteur</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Wankel">Wankel</option>
                    <option value="Stirling">Stirling</option>
                    <option value="Culasse">Culasse</option>
                </select>

                <select name="types" id="type-select">
                    <option value="">Type Voiture</option>
                    <option value="Voiture">Voiture</option>
                    <option value="Moto">Moto</option>
                    <option value="Velo">Velo</option>
                </select>

            </div>

            <div class="price_wrapper">
                <div class="min_max_pirce"><strong>Price </strong> :</div>
                <div id="price"></div>
            </div>
        </div>

        <div class="search_choice_op">
            Ajouter des filtres pour obtenir des résultats plus précis
        </div>
        
    </div>
    
</body>
</html>
