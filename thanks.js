
let goBack = document.getElementById('goBack');
goBack.addEventListener("contextmenu", function(event){
    event.preventDefault();
    window.location.href = ("index.html");
})