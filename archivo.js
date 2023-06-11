alert("Un detalle para mi programadora");


const boton = document.querySelector(".cuatro");
const pan = document.querySelector(".otro");
const primero = document.querySelector(".primero");
const botons = document.querySelector(".prime");
const botont = document.querySelector(".perro");
const segundo = document.querySelector(".segundo");
const botonter = document.querySelector(".tres");
const tercero = document.querySelector(".tercero");


boton.addEventListener("click",()=>{
    pan.classList.toggle("bajar");
});


window.addEventListener("click", e=>{
    if(pan.classList.contains('bajar') && e.target!=boton){
        pan.classList.toggle("bajar");
    }
}
);


botons.addEventListener("click",()=>{
    primero.classList.toggle("corazon");
});



window.addEventListener("click", e=>{
    if(primero.classList.contains('corazon') && e.target!=botons){
        primero.classList.toggle("corazon");
    }
}
);

botont.addEventListener("click",()=>{
    segundo.classList.toggle("abajo");
});



window.addEventListener("click", e=>{
    if(segundo.classList.contains('abajo') && e.target!=botont){
        segundo.classList.toggle("abajo");
    }
}
);



botonter.addEventListener("click",()=>{
    tercero.classList.toggle("que");
});



window.addEventListener("click", e=>{
    if(tercero.classList.contains('que') && e.target!=botonter){
        tercero.classList.toggle("que");
    }
}
);

