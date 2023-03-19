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
