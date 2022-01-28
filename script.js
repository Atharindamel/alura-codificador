var botonAdicionar = document.getElementById("btn-encriptar")

botonAdicionar.addEventListener("click",function(e){
    e.preventDefault();
    var form = document.getElementById("input-texto");
    console.log(form.value);

    var frase = encriptarTexto(form.value);
    console.log(frase);
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
    
    return letras;
    
}




/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/