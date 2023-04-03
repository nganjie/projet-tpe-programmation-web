var section_info = document.querySelector(".info-vehicule");
console.log("un mode de paie");

var str = window.location.href;
console.log(str);
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);
var form_api = document.getElementById("form-api");
console.log(form_api)
   // e.preventDefault();
   form_api["type-demande"].value ="infotemplate"
   form_api["idvehicule"].value = id;
    console.log(form_api["idvehicule"].value);
    console.log(form_api["type-demande"].value);
    
       fetch("../php/api.php",{
        method:"POST",
        body:new FormData(document.getElementById("form-api"))
    })
    .then(res1 =>res1.json())
    .then((data1)=>{
        console.log(data1);
        console.log(data1.typeV);
     var  pageinfo = pageinfoVehicule(data1.typeV,data1)
       //console.log(pageinfo);
       section_info.innerHTML = pageinfo;
       var button_command = document.querySelector(".buy-now");
       var button_liker = document.querySelector(".liker");
       button_liker.addEventListener("click",()=>{
        alert("Like enregistrer")
       })
       console.log(button_command);
       button_command.addEventListener("click",()=>{
        alert("les infirmations du vendeur sont disponible dans la rébrique  contacts du vendeurs pour vous aidé à le contacté");
       })
       
    })
    




    function pageinfoVehicule(type,tab)
{
    var pageVehicule;
    if(type=="voiture")
    {
        pageVehicule="";
       pageVehicule =`<section class="carDetailsWrap_top">
       <div class="carDetailsWrap_top_right">
           <img src=${tab.image} alt="image car">
       </div>


       <div class="carDetailsWrap_top_left">
           <div class="price-sec-top">
               <h2 class="car-title">${tab.marque}</h2>
               
               <div class="tags">
                   <div class="tagsItem">${tab.date_fab}</div>
                   <div class="tagsItem">${tab.ville}</div>
                   <div class="tagsItem">${tab.nb_vitesse} Km/h</div>
                   <div class="tagsItem">${tab.couleur}</div>
                   <div class="tagsItem">${tab.typeV}</div>
               </div>
           </div>
           <div class="price-section">
               <p class="indice">Disponible au prix inbattable de</p>
               <h3 class="price">${tab.prix} FCFA</h3>
               <button class="buy-now">Commander</button>
               <div class="stars-sec">
                   <div class="stars">
                       <i class="fa-thin fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-thin fa-star"></i>
                       <i class="fa-regular fa-star"></i>
                   </div>
                   <button class="liker">Liker</button>
               </div>
           </div>
       </div>
   </section>

   <section class="details">
       <div class="details-info">
           <h3 class="title">Plus de Details</h3>
           <div class="datails-wrap">

               <div class="details-item">
                   <span> Marque : </span>
                   <span> ${tab.marque}</span>
               </div>

               <div class="details-item">
                   <span> nom du Vendeur : </span>
                   <span> ${tab.nom}</span>
               </div>
               <div class="details-item">
                   <span> Nbre de Place: </span>
                   <span> ${tab.nb_place}</span>
               </div>

               <div class="details-item">
                   <span> Moteur: </span>
                   <span> ${tab.moteur}</span>
               </div>

               <div class="details-item">
                   <span> Puissance: </span>
                   <span> ${tab.nb_cheveau} chevaux</span>
               </div>
               <div class="details-item">
                   <span> Numéro Chassie: </span>
                   <span> ${tab.num_chassie}</span>
               </div>

               <div class="details-item">
                    <span> Date De Fabrication: </span>
                    <span> ${tab.date_fab}</span>
                </div>

               <div class="details-item">
                   <span> Date Mise en vente: </span>
                   <span> ${tab.date_mise}</span>
               </div>

               <div class="details-item">
                   <span> Couleur: </span>
                   <span> ${tab.couleur}</span>
               </div>
               <div class="details-item">
                   <span> Vitesse : </span>
                   <span> ${tab.nb_vitesse} Km/h</span>
               </div>

               <div class="details-item">
                   <span> Ville: </span>
                   <span> ${tab.ville}</span>
               </div>
               <div class="details-item">
                   <span>Energie: </span>
                   <span> ${tab.energie}</span>
               </div>

           </div>
       </div>

       <div class="details-info">
           <h3 class="title">contacts du vendeur</h3>
           <div class="datails-wrap">
               <div class="details-item">
                   <span> Nom : </span>
                   <span>${tab.nom} </span>
               </div>

               <div class="details-item">
                   <span> Email: </span>
                   <span> ${tab.adresse}</span>
               </div>

               <div class="details-item">
                   <span> Phone number: </span>
                   <span> +237 686 856 877</span>
               </div>

               <div class="details-item">
                   <span> Nationalité : </span>
                   <span> ${tab.nationalite}</span>
               </div>

               <div class="details-item">
                   <span> ville: </span>
                   <span> ${tab.ville}</span>
               </div>

           </div>
       </div>

   </section>`
        return pageVehicule;

    }
    if(type=="moto")
    {
        pageVehicule="";
        pageVehicule =`<section class="carDetailsWrap_top">
        <div class="carDetailsWrap_top_right">
            <img src=${tab.image} alt="image car">
        </div>
 
 
        <div class="carDetailsWrap_top_left">
            <div class="price-sec-top">
                <h2 class="car-title">${tab.marque}</h2>
                
                <div class="tags">
                    <div class="tagsItem">${tab.date_fab}</div>
                    <div class="tagsItem">${tab.ville}</div>
                    <div class="tagsItem">${tab.nb_roue}</div>
                    <div class="tagsItem">${tab.couleur}</div>
                    <div class="tagsItem">${tab.typeV}</div>
                </div>
            </div>
            <div class="price-section">
                <p class="indice">Disponible au prix inbattable de</p>
                <h3 class="price">${tab.prix} FCFA</h3>
                <button class="buy-now">Commander</button>
                <div class="stars-sec">
                    <div class="stars">
                        <i class="fa-thin fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-thin fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <button class="liker">Liker</button>
                </div>
            </div>
        </div>
    </section>
 
    <section class="details">
        <div class="details-info">
            <h3 class="title">Plus de Details</h3>
            <div class="datails-wrap">
 
                <div class="details-item">
                    <span> Marque : </span>
                    <span> ${tab.marque}</span>
                </div>
 
                <div class="details-item">
                    <span> nom du Vendeur : </span>
                    <span> ${tab.nom}</span>
                </div>
                <div class="details-item">
                    <span> Nbre de Place: </span>
                    <span> ${tab.nb_place}</span>
                </div>
         
                <div class="details-item">
                    <span> Nombre De Roue: </span>
                    <span> ${tab.nb_roue}</span>
                </div>

                <div class="details-item">
                    <span> Date De Fabrication: </span>
                    <span> ${tab.date_fab}</span>
                </div>
 
                <div class="details-item">
                    <span> Date Mise en vente: </span>
                    <span> ${tab.date_mise}</span>
                </div>
 
                <div class="details-item">
                    <span> Couleur: </span>
                    <span> ${tab.couleur}</span>
                </div>
                <div class="details-item">
                    <span> Vitesse : </span>
                    <span> ${tab.nb_vitesse} Km/h</span>
                </div>
 
                <div class="details-item">
                    <span> Ville: </span>
                    <span> ${tab.ville}</span>
                </div>
 
            </div>
        </div>
 
        <div class="details-info">
            <h3 class="title">contacts du vendeur</h3>
            <div class="datails-wrap">
                <div class="details-item">
                    <span> Nom : </span>
                    <span>${tab.nom} </span>
                </div>
 
                <div class="details-item">
                    <span> Email: </span>
                    <span> ${tab.adresse}</span>
                </div>
 
                <div class="details-item">
                    <span> Phone number: </span>
                    <span> +237 686 856 877</span>
                </div>
 
                <div class="details-item">
                    <span> Nationalité : </span>
                    <span> ${tab.nationalite}</span>
                </div>
 
                <div class="details-item">
                    <span> ville: </span>
                    <span> ${tab.ville}</span>
                </div>
 
            </div>
        </div>
 
    </section>`
        return pageVehicule
    }
    if(type=="velo")
    {
        pageVehicule="";
        pageVehicule =`<section class="carDetailsWrap_top">
        <div class="carDetailsWrap_top_right">
            <img src=${tab.image} alt="image car">
        </div>
 
 
        <div class="carDetailsWrap_top_left">
            <div class="price-sec-top">
                <h2 class="car-title">${tab.marque}</h2>
                
                <div class="tags">
                    <div class="tagsItem">${tab.categorie}</div>
                    <div class="tagsItem">${tab.ville}</div>
                    <div class="tagsItem">Diesel</div>
                    
                    <div class="tagsItem">${tab.typeV}</div>
                </div>
            </div>
            <div class="price-section">
                <p class="indice">Disponible au prix inbattable de</p>
                <h3 class="price">${tab.prix} FCFA</h3>
                <button class="buy-now">Commander </button>
                <div class="stars-sec">
                    <div class="stars">
                        <i class="fa-thin fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-thin fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <button class="liker">Liker</button>
                </div>
            </div>
        </div>
    </section>
 
    <section class="details">
        <div class="details-info">
            <h3 class="title">Plus de Details</h3>
            <div class="datails-wrap">
 
                <div class="details-item">
                    <span> Marque : </span>
                    <span> ${tab.marque}</span>
                </div>
 
                <div class="details-item">
                    <span> nom du Vendeur : </span>
                    <span> ${tab.nom}</span>
                </div>
                <div class="details-item">
                    <span> Nbre de Place: </span>
                    <span> ${tab.nb_place}</span>
                </div>
 
                <div class="details-item">
                    <span> Categorie: </span>
                    <span> ${tab.categorie}</span>
                </div>
 
                <div class="details-item">
                    <span> Taille: </span>
                    <span> ${tab.taille} chevaux</span>
                </div>
 
                <div class="details-item">
                    <span> Couleur: </span>
                    <span> ${tab.couleur}</span>
                </div>

 
                <div class="details-item">
                    <span> Ville: </span>
                    <span> ${tab.ville}</span>
                </div>
 
            </div>
        </div>
 
        <div class="details-info">
            <h3 class="title">contacts du vendeur</h3>
            <div class="datails-wrap">
                <div class="details-item">
                    <span> Nom : </span>
                    <span>${tab.nom} </span>
                </div>
 
                <div class="details-item">
                    <span> Email: </span>
                    <span> ${tab.adresse}</span>
                </div>
 
                <div class="details-item">
                    <span> Phone number: </span>
                    <span> +237 686 856 877</span>
                </div>
 
                <div class="details-item">
                    <span> Nationalité : </span>
                    <span> ${tab.nationalite}</span>
                </div>
 
                <div class="details-item">
                    <span> ville: </span>
                    <span> ${tab.ville}</span>
                </div>
 
            </div>
        </div>
 
    </section>`
        return pageVehicule
    }
}
