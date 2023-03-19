var nav = document.querySelector(".navbar");
console.log("unmatin : "+nav);
const menuHamberguer = document.querySelector(".menu-hamburger");
console.log(menuHamberguer);
const navLinks = document.querySelector(".nav-links");
menuHamberguer.addEventListener("click",()=>{
    navLinks.classList.toggle("mobile-menu");
})