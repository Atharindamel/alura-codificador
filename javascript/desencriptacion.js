var botonAdicionarDesencriptar = document.getElementById("btn-desencriptar");

botonAdicionarDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.getElementById("input-texto");
    var frase = desencriptarTexto(form.value);
    document.getElementById("msg").value = frase;
    document.getElementById("input-texto").value = "";
});

function desencriptarTexto (form){
    form = form.replace(/ai/g,"a");
    form = form.replace(/enter/g,"e");
    form = form.replace(/imes/g,"i");
    form = form.replace(/ober/g,"o");
    form = form.replace(/ufat/g,"u");

    return form;
}