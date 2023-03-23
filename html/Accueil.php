<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="../css/styleheader.css">
    
    <!-- css files -->
    <link rel="stylesheet" href="/css/filtre_recherche.css">
    <script src="https://unpkg.com/@spreadtheweb/multi-range-slider@1.0.2/dist/range-slider.main.min.js"></script>

    <!-- js file a cdn -->
    <script src="/js/filter/search_filter.js" type="module" defer></script>
    
    <title>Document</title>
    
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="#" class="logo">VOITURE <span class="cm">CM</span> </a>
            <div class="nav-links">
                <ul>
                    <li class="active"><a href="#">Accueil</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="#">Demande-specifique</a></li>
                    <li><a href="#">Vendre</a></li>
                    <li class="login"><a href="#">Login</a></li>
                </ul>
            </div>
            <img src="../image/menu-btn.png" alt="menu voiture" class="menu-hamburger">
        </nav>
    </header>

    <section class="slider-section">
        <div class="container">
            <i  id="change-template" class="fa-solid fa-angle-left"></i>
            <div class="content">
               
         
                <!-- un quatrième-->
                <div class="card" draggable="false">
                    <div class="card-content">
                        <div class="image">
                            <img src="../image/voiture31.jpg" alt="un autre monde">
                        </div>
                        <div class="media-icons">

                        </div>
                        <div class="info-vehicule">
                            <div class="info-float">
                                <div class="info-left">
                                    <p><span class="marque">Marque :</span></p>
                                    <p><span class="autre-info">Nombre de cheveau :</span></p>
                                    <p><span class="autre-info">date de fabrication :</span></p>
                                </div>
                                <div class="info-right">
                                    <p><span class="information">toyota</span></p>
                                    <p><span class="information">100</span></p>
                                    <p></span><span class="information"> 2-3-2019</span></p>
                                    
                                </div> 
                            </div>  
                            <div class="rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>    
                            <div class="button">
                                <button class="about"> Voir plus</button>
                                <button class="liker">Liker </button>
                            </div>                                    
                        </div>


                         
                    </div>
                </div>
            </div>  
            <i id="change-template" class="fa-solid fa-angle-right"></i>     
        </div>
    </section>


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

<!-- fin section de recherche -->

    <div class="reste-template">
        <section class="section-reste">
            <div class="card" draggable="false">
                <div class="card-content">
                    <div class="image">
                        <img src="../image/imgheader.jpg" alt="un autre monde">
                    </div>
                    <div class="media-icons">

                    </div>
                    <div class="info-vehicule">
                        <div class="info-float">
                            <div class="info-left">
                                <p><span class="marque">Marque :</span></p>
                                <p><span class="autre-info">Nombre de cheveau :</span></p>
                                <p><span class="autre-info">date de fabrication :</span></p>
                            </div>
                            <div class="info-right">
                                <p><span class="information">toyota</span></p>
                                <p><span class="information">100</span></p>
                                <p></span><span class="information"> 2-3-2019</span></p>
                                
                            </div> 
                        </div>  
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>    
                        <div class="button">
                            <button class="about"> Voir plus</button>
                            <button class="liker">Liker </button>
                        </div>                                    
                    </div>                        
                </div>
            </div>
        </section>

    </div>
    <br><br><br><br>
</body>
<script src="../js/template.js" type="module"></script>
<script src="../js/index.js"></script>

</html>