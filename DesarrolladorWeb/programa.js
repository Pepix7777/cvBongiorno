function Agrandar(){
    document.getElementById("imagen").style.height="700px";
    document.getElementById("imagen").style.width="700px";
}
function Achicar(){
    document.getElementById("imagen").style.height="300px";
    document.getElementById("imagen").style.width="300px";
}
document.getElementById("imagen").addEventListener("click",function(){
    if (document.getElementById("imagen").style.height < 700) {
        if (window.screen.height > 700){  /*Evaluo que la imagen no sea mayor al tamaño de la pantalla*/
            Agrandar();
        }
    }else {
        Achicar();
    }
});
document.getElementById('mostrar').onclick = function(){
    document.getElementById("referencias").innerHTML= "Referencias:" 
    document.getElementById("referencia1").innerHTML= "Marcela Andrade | Ensigna       | Tel: 221-584-7458 | Emal: marceandrade@gmail.com";
    document.getElementById("referencia2").innerHTML= "Pedro Fernández | Casa Colombia | Tel: 221-256-2874 | Emal: pedrofernandez@gmail.com";
}
document.getElementById('enviar').onclick = function (){
    document.getElementById('enviar').innerHTML="¡Muchas gracias!"
}
document.getElementById('mostrar').onmouseover = function() {
    document.getElementById('mostrar').style.backgroundColor = 'white';
}
document.getElementById('mostrar').onmouseout = function() {
    document.getElementById('mostrar').style.backgroundColor = 'pink';
}