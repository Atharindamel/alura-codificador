var botonAdicionarEncriptar = document.getElementById("btn-encriptar");
var botonAdicionarDesencriptar = document.getElementById("btn-desencriptar");


botonAdicionarEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.getElementById("input-texto");
    var frase = encriptarTexto(form.value);
    document.getElementById("msg").value = frase;
    document.getElementById("input-texto").value = "";
});

botonAdicionarDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.getElementById("input-texto");
    var frase = desencriptarTexto(form.value);
    document.getElementById("msg").value = frase;
    document.getElementById("input-texto").value = "";
});


function encriptarTexto (form){
    
    var letras = form.split("");

    for (var i = 0; i < letras.length; i++){
        if (letras[i] == "a"){
            letras[i] = "ai";
        }
        if (letras[i] == "e"){
            letras[i] = "enter";
        }
        if(letras[i] == "i"){
            letras[i]= "imes";
        }
        if(letras[i]=="o"){
            letras[i] = "ober";
        }
        if(letras[i]=="u"){
            letras[i]=="ufat"
        }
    }

    var mensajeEncriptado = letras.join('');
    
    return mensajeEncriptado;
}

function desencriptarTexto (form){
    form = form.replace(/ai/g,"a");
    form = form.replace(/enter/g,"e");
    form = form.replace(/imes/g,"i");
    form = form.replace(/ober/g,"o");
    form = form.replace(/ufat/g,"u");

    return form;
}
