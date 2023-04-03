var str = window.location.href;
console.log(document.cookie);
console.log(getCookie("nom"));
var p_nom =document.querySelector(".p-nom");
var profil =document.querySelector(".profil");
var span = profil.querySelector("span")
console.log(span);
if(getCookie("nom"))
{
    p_nom.textContent=getCookie("nom");
    p_nom.style.color="#41f1b6";
    span.style.color="#ff7782";
}

/*var url = new URL(str);
var nom = url.searchParams.get("nom");
var numero =url.searchParams.get("tel");
var p_nom =document.querySelector(".p-nom");
if(nom)
{
    p_nom.textContent =numero;
    console.log(nom);
console.log(nom);

}*/
function getCookie(name) {
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(name + "="))
        ?.split('=')[1]
    if (value === undefined) {
        return null
    } 
    return decodeURIComponent(value)
}
