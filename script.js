var botonAdicionar = document.getElementById("btn-encriptar")

botonAdicionar.addEventListener("click",function(e){
    e.preventDefault();
    var form = document.getElementById("input-texto");
    
    encriptarTexto(form.value);

});


function encriptarTexto (form){
    let newForm = form;
    
    const vocales = ["a","e","i","o","u"];

    for(let i = 0; i < form.length, i++){
        if
    }
    return newForm;
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