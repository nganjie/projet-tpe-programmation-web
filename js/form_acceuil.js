var form_insc = document.getElementById("form-inscription");
var p_info = document.querySelector(".info");
var p_connexion = document.querySelector(".info-connexion");
var login = document.querySelector(".login");
var tmp_form = document.querySelector(".temp-form");
var form_connexion = document.getElementById("form-connexion");
console.log(form_connexion);
console.log(login);
form_connexion.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(form_connexion["adresse"].value&&form_connexion["password"].value)
    {
        fetch("../php/api.php",{
            method:"POST",
            body:new FormData(document.getElementById("form-connexion"))
        }).then(resc =>resc.json())
        .then((datac)=>{
            console.log(datac);
            if(datac.status==1)
             alert(datac.info);
            if(datac.status ==2)
            {
                p_connexion.innerHTML=datac.info;
                p_connexion.style.color="red";
            }

            if(datac.status ==0)
            {
                console.log(datac.nom);
                document.cookie = "nom="+datac.nom;
                document.cookie = `tel=${datac.num_tel}`;
                console.log(document.cookie);
                location.reload();
               // window.location.href=`../html/Acceuil.php?nom=${datac.nom}&&tel=${datac.num_tel}`;
            }
        })
    }else alert("tous les champs doivent étre remplies");
})
login.addEventListener("click",(e)=>{
    e.preventDefault();
    tmp_form.style.display ="block";
})
form_insc.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(form_insc[3].value);
    if(form_insc["nom"].value&&form_insc["tel"].value&&form_insc["adresse"].value&&form_insc["password"].value)
    {
        fetch("../php/api.php",{
            method:"POST",
            body:new FormData(document.getElementById("form-inscription"))
        }).then(res => res.json())
        .then((data)=>{
            console.log(data);
            if(data.status==1)
             alert(data.info)
             if(data.status==0)
             {
                p_info.innerHTML = data.info;
                for(var i=0;i<form_insc.length-2;i++)
                {
                    form_insc[i].value ="";
                }
             }
               
        })
    }else alert("tous les champs doivent étre remplies");
   
})