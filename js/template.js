import {App,Vehicule,Voiture,Velo,Moto} from "../js/classe.js";
import {search_choices,objLength} from "../js/search_filter.js";
var b =search_choices.length;
//export let pageinfo;
console.log(b);
let r =0;
var select_choix = document.querySelectorAll(".select-search");
console.log(select_choix);

const carousel = document.querySelector(".content"),
 card = carousel.querySelectorAll(".card"),
firstTemplate = carousel.querySelectorAll(".card")[0];
const arrowIcons = document.querySelectorAll("#change-template");



let isDragStart =false,prevPageX,isDragging=false,prevScrollLeft,positionDiff;
//console.log(arrowIcons);
const showHideIcons = ()=>{
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click",()=>{
        clearInterval(intervalAnimation);
        let firstTemplateWidth = firstTemplate.clientWidth + 14;
        console.log(icon.className);
       
        carousel.scrollLeft +=icon.className == "fa-solid fa-angle-left" ? (-firstTemplateWidth) : firstTemplateWidth; 
        setTimeout(()=>showHideIcons(),60);
    })
});
const autoSlide = ()=>{
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth )) return;
    positionDiff = Math.abs(positionDiff);
    let firstTemplateWidth = firstTemplate.clientWidth +14;
    let valDifference = firstTemplateWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft)
    return carousel.scrollLeft +=positionDiff > firstTemplateWidth/3 ? valDifference : -positionDiff;
    carousel.scrollLeft -=positionDiff > firstTemplateWidth/3 ? valDifference : -positionDiff
   
}
//carousel.style.transition = "20%";
//console.log(carousel.style);
//console.log((carousel.scrollWidth - carousel.clientWidth ));


//carousel.style.transform = `translateX(${-slideWidth*index}px)`;
/*setInterval(()=>{
    console.log(carousel.scrollLeft);
},800);*/
console.log(carousel.clientWidth);


/*==============fin======== */
let intervalAnimation ;
let isClickCard = false;
 function scrolableLeft(){
    let firstTemplateWidth = firstTemplate.clientWidth +14;
   
       carousel.scrollLeft -= 5;
       if(carousel.scrollLeft==0){
        clearInterval(intervalAnimation);
        setTimeout(()=>{intervalAnimation = setInterval(scrolable,50)},1500) ;
       } 
 }
function scrolable(){
    
    
    let firstTemplateWidth = firstTemplate.clientWidth +14;
   
       carousel.scrollLeft += 5;
       if(carousel.scrollLeft==(carousel.scrollWidth - carousel.clientWidth )){
        
        clearInterval(intervalAnimation);
        setTimeout(()=>{intervalAnimation = setInterval(scrolableLeft,50)},1500) ;
       } 
}
setTimeout(()=>{


 intervalAnimation = setInterval(scrolable,50)
},2000)
carousel.addEventListener("transitionend",()=>{
    console.log("transition end");
})


const dragStart = (e)=>{
    isDragStart =true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft =carousel.scrollLeft;
}
const dragging = (e)=>{
    if(!isDragStart) return;
    e.preventDefault(); 
    carousel.classList.add("draggin");
    isDragging =true;
     positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft =prevScrollLeft -positionDiff;
    showHideIcons();
}
const dragStop =()=>{
    isDragStart = false; 
    carousel.classList.remove("draggin");
    if(!isDragging)return;
    isDragging = false;
    autoSlide();
}
let stopScroll = ()=>{
    if(!isClickCard)
    {
        isClickCard =true;
        clearInterval(intervalAnimation);
    }else intervalAnimation = setInterval(scrolable,50);

    
}
carousel.addEventListener("click",stopScroll);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchstart",dragging);

carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("touchsmove",dragStart)

carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("mouseleave",dragStop);
carousel.addEventListener("touchend",dragStop);
console.log(search_choices);

/* ================code pour gerer les template=========== */
const vehicule1 = new Vehicule(0,4,"voiture","../image/img1",7000000,"427LT65","toyota","06-9-2014","25-7-2016","blue");
const Voiture1 = new Voiture(0,4,"voiture","../image/img1",7000000,"427LT65","toyota","06-9-2014","25-7-2016","blue",500,400,1575,350);
console.log(Voiture1.nb_cheveau);
const content = document.querySelector(".content");

const section_template = document.querySelector(".section-reste");

var form_api = document.getElementById("form-api");
//console.log(form_api[""]);
console.log("la forme");
fetch("../php/api.php",{
    method:"POST",
    body:new FormData(document.getElementById("form-api"))
})
.then(res => res.json())
.then((data)=>{
    console.log(data);
})
/*fetch("../js/donnes.json")
.then(response => response.json())*/
fetch("../php/api.php",{
    method:"POST",
    body:new FormData(document.getElementById("form-api"))
})
.then(response => response.json())
.then((data)=>{
    console.log(data);
   var app = new App(data);
   console.log(app.tab_object)
   content.innerHTML ="";
   section_template.innerHTML= "";
   app.tab_object.map((value)=>{
        //if(value instanceof Voiture)
        
        content.innerHTML +=value.template();
        section_template.innerHTML +=value.template();
        
        
    })
    var tmp_liker=document.querySelector(".liker");
    console.log(tmp_liker);
    tmp_liker.addEventListener("click",(e)=>{
        e.preventDefault();
        alert("votre Like à été enregistrer");
    })
     console.log(form_api["idvehicule"]);
     form_api["type-demande"].value = "infotemplate";
     console.log(form_api["type-demande"].value);
    let template_about = document.querySelectorAll(".about");
    template_about.forEach(elt=>{
        elt.addEventListener("click",(e)=>{
            e.preventDefault();
            window.location.href =`../html/infoVehicule.php?id=${elt.id}`;
            pageTemplate(elt);
        
    })})
     function pageTemplate(elt)
    {
       // e.preventDefault();
       form_api["idvehicule"].value = elt.id;
        console.log(form_api["idvehicule"].value);
           fetch("../php/api.php",{
            method:"POST",
            body:new FormData(document.getElementById("form-api"))
        })
        .then(res1 =>res1.json())
        .then((data1)=>{
            /*console.log(data1);
            console.log(data1.typeV);
           pageinfo = pageinfoVehicule(data1.typeV,data1)
           console.log(pageinfo);
           window.location.href ="../html/infoVehicule.php";*/
        })
        
    }

    //console.log(template_about); 

    /*var b =0;
    setInterval(()=>{
        if()
    },3000)*/
    var reload = false;
    function getteurdefiltre(){
        setInterval(()=>{
            console.log(objLength(search_choices));
            //console.log(b!=objLength(search_choices));
            if((b!=objLength(search_choices)))
            {
                r=1;
                b = objLength(search_choices);
                console.log(search_choices);
                console.log("un monde en couille");
                reload = true;
                refreshFilter();
            }else reload = false;
        },7000)
    } 
    getteurdefiltre();
    select_choix.forEach(elt =>{
        elt.addEventListener("change",refreshFilter)
    })
    var tmp_section_template;
    var conteur = 0;
    function refreshFilter(elt){
        if(conteur==0)
        {
            tmp_section_template=section_template.innerHTML;
            conteur++
        }
       if(reload===true)
        section_template.innerHTML = tmp_section_template;
        var tabelt = app.Filter(search_choices);
        console.log("debut du spectacle");
        console.log(search_choices);
       // console.log(app.tab_object[1]);
        //console.log(app.tab_object[1].isFilter(search_choices));
        console.log(tabelt);
        if(tabelt.length!=0)
        {
            section_template.innerHTML = "";
            tabelt.map((valuefilter)=>{
                section_template.innerHTML +=valuefilter.template();
            })
            var tmp_liker1=document.querySelector(".liker");
    tmp_liker1.addEventListener("click",(e)=>{
        e.preventDefault();
        alert("votre Like à été enregistrer");
    })
            let template_about_tmp = document.querySelectorAll(".about");
            console.log(template_about_tmp);
            template_about_tmp.forEach(elt=>{
                elt.addEventListener("click",(e)=>{
                    e.preventDefault();
                    window.location.href =`../html/infoVehicule.php?id=${elt.id}`;
                    pageTemplate(elt);
                
            })})
        }else {
            setTimeout(()=>{
                alert("aucun vehicule ne correspond à ses caractèristiques");
            },1000)
           
        }
       
        //console.log(e);
        console.log("rien ne va ici bas");
    }
    //console.log(app.tab_object);
})
function innerTemplateData(tab){
   
}

/*
function Template(type,tab){
    let template;
    if(type=="voiture")
     {
        console.log(tab);
        template ="";
       return `<div class="card" draggable="false">
        <div class="card-content">
            <div class="image">
                <img src="${tab.image}"alt="un autre monde">
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
                    <p><span class="information">${tab.marque}</span></p>
                    <p><span class="information">${tab.nb_cheveau}</span></p>
                    <p></span><span class="information">${tab.date_fab}</span></p>
                    <p><span class="information">${tab.prix} fcfa</span></p>
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
    </div>`;
     }
     if(type=="moto"){
        console.log(tab);
        template = "";
        return `<div class="card" draggable="false">
        <div class="card-content">
            <div class="image">
                <img src="${tab.image}" alt="un autre monde">
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
                        <p><span class="information">${tab.marque}</span></p>
                        <p><span class="information">${tab.nb_vitesse}</span></p>
                        <p></span><span class="information">${tab.date_fab}</span></p>
                        <p><span class="information">${tab.prix} fcfa</span></p>
                        
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
    </div>`;
     }
     if(type=="velo"){
        console.log(tab);
        template = "";
        return `<div class="card" draggable="false">
        <div class="card-content">
            <div class="image">
                <img src="${tab.image}" alt="un autre monde">
            </div>
            <div class="media-icons">

            </div>
            <div class="info-vehicule">
                <div class="info-float">
                    <div class="info-left">
                        <p><span class="marque">Marque :</span></p>
                        <p><span class="autre-info">nombre de place:</span></p>
                        <p><span class="autre-info">date de fabrication:</span></p>
                        <p><span class="autre-info">prix :</span></p>
                    </div>
                    <div class="info-right">
                        <p><span class="information">${tab.marque}</span></p>
                        <p><span class="information">${tab.nb_place}</span></p>
                        <p></span><span class="information">${tab.date_fab}</span></p>
                        <p><span class="information">${tab.prix} fcfa</span></p>
                        
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
    </div>`;
     }
}
*/