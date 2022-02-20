var botonAdicionarEncriptar = document.getElementById("btn-encriptar");

botonAdicionarEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.getElementById("input-texto");
    var frase = encriptarTexto(form.value);
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
