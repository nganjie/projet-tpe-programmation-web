var form = document.getElementById("form-message");
var form_api = document.getElementById("form-api");
var message = document.querySelector(".message-info");
console.log(form_api);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(form["nom"].value&&form["adresse"].value&&form["objet"].value&&form["message"].value)
    {
        fetch("../php/api.php",{
            method:"POST",
            body:new FormData(document.getElementById("form-message"))
        })
        .then(res =>res.json())
        .then((data)=>{
            console.log(data);
            if(data.status==1)
            alert("tous les champs doivent être remplies");
            if(data.status==0)
            {
                message.textContent=data.info;
                message.style.color ="#41f1b6";
                message.style.size="0.8rem";
            }
        })
    }else alert("tous les champs doivent être remplies");
})