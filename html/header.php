<header>
        <nav class="navbar">
            <a href="#" class="logo">VOITURE <span class="cm">CM</span> </a>
            <div class="nav-links">
                <ul>
                    <li id="accueil"><a href="Acceuil.php">Accueil</a></li>
                    <li id="contact"><a href="contact.php">Contact</a></li>
                    <li id="demande"><a href="demande_specifique.php">Demande specifique</a></li>
                    <li id="vente"><a href="vendre.php">Vendre</a></li>
                    <li class="login"><a href="#">Login</a></li>
                    <li><div class="profil"><span class="material-symbols-outlined">
account_circle
</span>
 <div class="info-profil"><p class="p-nom">Nganjie</div>
</div></li>
                    
                </ul>

            </div>
            <img src="../image/menu-btn.png" alt="menu voiture" class="menu-hamburger">
           
        </nav>
        <div class="header-info">
            <div class="temp-autoread">
  
            </div>
            <div class="temp-connexion" >
            <form action="#" id="form-connexion">
                <div class="input-field">
                    <input type="email" name="adresse" placeholder="adresse email">
                    </div>
                    <div class="input-field">
                    <input type="password" name="password" placeholder="mot de passe">
                    </div>
                    <div class="input-field">
                        <p class="info-connexion"></p>
                    <input type="text" name="type-demande" value="connexion-client" style="display:none">
                    <input type="submit" name="envoyer" value="s'identifier" >
                    </div>  
                </form>
            </div>
            <div class="temp-form" style="display:none">
                <form method="POST" action="#" id="form-inscription">
                    <div class="input-field">
                        <input type="text" name="nom" placeholder="nom">
                    </div>
                    <div class="input-field">
                    <input type="text" name="tel" placeholder="numéro">
                    </div>
                    <div class="input-field">
                    <input type="email" name="adresse" placeholder="adresse email">
                    </div>
                    <div class="input-field">
                    <input type="password" name="password" placeholder="mot de passe">
                    </div>
                    <div class="input-field">
                        <p class="info"></p>
                    <input type="text" name="type-demande" value="enregistrer-client" style="display:none">
                    <input type="submit" name="envoyer" value="s'inscrire" >
                    </div>    
                </form>
            </div>
        </div>

    </header>