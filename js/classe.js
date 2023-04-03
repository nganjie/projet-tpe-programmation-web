
export class App{
    tab_object =[];
    constructor(tab_json){
       // console.log("le tableau json");
        //console.log(tab_json);
        tab_json.map((value) =>{
             if(String(value.typeV).toLowerCase()=="voiture")
               this.tab_object.push(new Voiture(value.idvehicule,value.nb_place,value.typeV,value.image,value.prix,value.immatri,value.marque,value.date_fab,value.date_mise,value.couleur,value.ville,value.nb_vitesse,value.boite_vitesse,value.num_chassie,value.nb_cheveau,value.moteur));
              if(String(value.typeV).toLowerCase()=="moto")
               this.tab_object.push(new Moto(value.idvehicule,value.nb_place,value.typeV,value.image,value.prix,value.immatri,value.marque,value.date_fab,value.date_mise,value.couleur,value.ville,value.nb_vitesse,value.nb_roue));
               if(String(value.typeV).toLowerCase()=="velo")
               this.tab_object.push(new Velo(value.idvehicule,value.nb_place,value.typeV,value.image,value.prix,value.immatri,value.marque,value.date_fab,value.date_mise,value.couleur,value.ville,value.idvelo,value.taille))
        })
    }
    Filter(tab)
    {
        return this.tab_object.filter((vehicule)=>vehicule.isFilter(tab))
    }
}
export class Vehicule{
    constructor(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville){


        this.idVehicule = idVehicule;
        this.nb_place =nb_place;
        this.typeV =typeV;
        this.image=image;
        this.prix =prix;
        this.immatri = immatri;
        this.marque = marque;
        this.date_fab=date_fab;
        this.date_mise=date_mise;
        this.couleur =couleur;
        this.ville = ville;

    }
    template(){

    }
    dateb(){
        return this['marque'];
        //.toLowerCase()
    }
    isFilter(tbFilter){
        var b = objLength(tbFilter);
        var c =0;
        for(var option in tbFilter){
            if(option=="marque")
             {
                //console.log(option);
                if(tbFilter[option].toLowerCase()==this.marque.toLowerCase())
                c++;
             }else if(option=="ville")
             {
                //console.log(option);
                if(tbFilter[option].toLowerCase()==String(this.ville).toLowerCase())
                c++;
             }else if(option=="couleur")
             {
                console.log(this.couleur);
                if(tbFilter[option].toLowerCase()==String(this.couleur).toLowerCase())
                c++;
             }else if(option=="prix_min")
             {
                console.log(option);
                if(this.prix>=tbFilter[option]&&this.prix<=tbFilter["prix_max"])
                {
                    console.log("c'est bon pour : "+this.prix);
                    c++;
                    c++;
                }
                
             }else if(option=="moteur"&&this.typeV=="voiture")
             {
                //console.log(option);
                if(tbFilter[option].toLowerCase()==this.moteur.toLowerCase())
                c++;
             }else if(option=="type")
             {
                if(tbFilter[option].toLowerCase()==this.typeV.toLowerCase())
                c++;
             }
             
        }
        console.log("la valeur de c : "+c+" la valeur de b :"+b);
        if(c!=0&&c==b)
        return true;
        
        return false
    }

}
export class Voiture extends Vehicule{
    constructor(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville,nb_vitesse,boite_vitesse,num_chassie,nb_cheveau,moteur){
        super(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville);
        this.nb_vitesse = nb_vitesse;
        this.boite_vitesse=boite_vitesse;
        this.num_chassie = num_chassie;
        this.nb_cheveau = nb_cheveau;
        this.moteur = moteur;

    }
    template()
    {
        return `<div class="card" draggable="false">
        <div class="card-content">
            <div class="image">
                <img src="${this.image}"alt="un autre monde">
            </div>
            <div class="media-icons">

            </div>
            <div class="info-vehicule">
                <div class="info-float">
                    <div class="info-left">
                        <p><span class="marque">Marque :</span></p>
                        <p><span class="autre-info">Nombre de cheveau:</span></p>
                        <p><span class="autre-info">date de fabrication:</span></p>
                        <p><span class="autre-info">prix :</span></p>
                    </div>
                    <div class="info-right">
                    <p><span class="information">${this.marque}</span></p>
                    <p><span class="information">${this.nb_cheveau}</span></p>
                    <p></span><span class="information">${this.date_fab}</span></p>
                    <p><span class="information">${this.prix} fcfa</span></p>
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
                    <button class="about" id="${this.idVehicule}"> Voir plus</button>
                    <button class="liker">Liker </button>
                </div>                                    
            </div>                        
        </div>
    </div>`;
    }

}
export class Moto extends Vehicule{
    constructor(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville,nb_vitesse,nb_roue){
        super(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville);
        this.nb_vitesse=nb_vitesse;
        this.nb_roue =nb_roue;

    }
    template(){
        return `<div class="card" draggable="false">
        <div class="card-content">
            <div class="image">
                <img src="${this.image}" alt="un autre monde">
            </div>
            <div class="media-icons">

            </div>
            <div class="info-vehicule">
                <div class="info-float">
                    <div class="info-left">
                        <p><span class="marque">Marque :</span></p>
                        <p><span class="autre-info">vistesse :</span></p>
                        <p><span class="autre-info">date de fabrication :</span></p>
                        <p><span class="autre-info">prix :</span></p>
                    </div>
                    <div class="info-right">
                        <p><span class="information">${this.marque}</span></p>
                        <p><span class="information">${this.nb_vitesse}</span></p>
                        <p></span><span class="information">${this.date_fab}</span></p>
                        <p><span class="information">${this.prix} fcfa</span></p>
                        
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
                    <button class="about" id="${this.idVehicule}"> Voir plus</button>
                    <button class="liker">Liker </button>
                </div>                                    
            </div>                        
        </div>
    </div>`;
    }
}
export class Velo extends Vehicule{
    constructor(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville,idvelo,taille)
    {
        super(idVehicule,nb_place,typeV,image,prix,immatri,marque,date_fab,date_mise,couleur,ville);
        this.idvelo =idvelo;
        this.taille =taille;
    }
    template(){
        return `<div class="card" draggable="false">
        <div class="card-content">
            <div class="image">
                <img src="${this.image}" alt="un autre monde">
            </div>
            <div class="media-icons">

            </div>
            <div class="info-vehicule">
                <div class="info-float">
                    <div class="info-left">
                        <p><span class="marque">Marque :</span></p>
                        <p><span class="autre-info">nombre de place:</span></p>
                        <p><span class="autre-info">taille :</span></p>
                        <p><span class="autre-info">prix :</span></p>
                    </div>
                    <div class="info-right">
                        <p><span class="information">${this.marque}</span></p>
                        <p><span class="information">${this.nb_place}</span></p>
                        <p></span><span class="information">${this.taille}</span></p>
                        <p><span class="information">${this.prix} fcfa</span></p>
                        
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
                    <button class="about" id="${this.idVehicule}"> Voir plus</button>
                    <button class="liker">Liker </button>
                </div>                                    
            </div>                        
        </div>
    </div>`;
    }
    
}
function objLength(obj){
    var i=0;
    for(var props in obj){
        i++;
    }
    return i;
}
/*
const vehicule = new Vehicule(0,4,"voiture","../image/img1",7000000,"427LT65","toyota","06-9-2014","25-7-2016","blue");
const Voiture1 = new Voiture(0,4,"voiture","../image/img1",7000000,"427LT65","toyota","06-9-2014","25-7-2016","blue",500,400,1575,350);
console.log(Voiture1.nb_cheveau);
fetch("../js/donnes.json")
.then(response => response.json())
.then((data)=>{
    console.log(data);
   var app = new App(data);
   console.log(app.tab_object)
    data.map((value)=>{
        //if(value instanceof Voiture)
        console.log(value instanceof Voiture);
    })
    //console.log(app.tab_object);
})*/

