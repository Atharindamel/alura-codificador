var botonCopiar = document.getElementById("btn-copy");

botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    var input = document.getElementById("msg");
    input.select();
    document.execCommand('copy');
    document.getElementById("msg").value = "";
});