const formulario = document.getElementById("form");
const campos = document.querySelectorAll(".inputs");
const mensagemErro = document.querySelectorAll(".small");

formulario.addEventListener("submit", function (event) {
	event.preventDefault();
	
});
function somenteNumeros(e) {
	var code = e.which || e.keyCode;

	if (code < 48 || code > 57) {
		e.preventDefault();
        
		return false;
	}
}

