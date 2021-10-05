let iniciar = { "name" : "Nome", "consultorio" : "Consultório"};
let iniciarVar = JSON.stringify(iniciar);

let registro = localStorage.getItem("storage") || [iniciarVar];

(function () {
    function adicionar() {
        let tamanho = 4;
        var dados = JSON.stringify({
            name    : document.querySelector("input[name=name]").value,
            consultorio    : document.querySelector("input[name=consultorio]").value
        });
        if (registro.length < 4 ) {
            registro.unshift(dados);
            localStorage.setItem("storage", JSON.stringify(registro));
            alert("Registro Adicionado!");
            return true;
        }
        else {
            registro.pop();
            registro.unshift(dados);
            localStorage.setItem("storage", JSON.stringify(registro));
            alert("Registro Adicionado!");
            return true;
        }
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", function () {
        event.preventDefault();
        return adicionar();
    });



})();

//let limpar = document.getElementById("clickMe");
    
//limpar.addEventListener("click", function () {
        
//});