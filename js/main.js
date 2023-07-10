const form = document.getElementById("form-formulario");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function validaValores(num1, num2){
    return num1 > num2
}

form.addEventListener("submit", function(e){ 
    e.preventDefault()

    if (Number(num1.value) < Number(num2.value)) {
        alert("B é maior que A, Você conseguiu!!");
    }

    else {
        alert("B precisa ser maior que A");
    }

})