const numeracaoCartao = document.querySelector("#numeracao-cartao");
const numeracaoInput = document.querySelector("#numeracao-input");

const titularCartao = document.querySelector("#titular-cartao");
const titularInput = document.querySelector("#titular-input");

const mesCartao = document.querySelector("#mes-cartao");
const mesInput = document.querySelector("#mes-input");

const anoCartao = document.querySelector("#ano-cartao");
const anoInput = document.querySelector("#ano-input");

const segurancaCartao = document.querySelector("#seguranca-cartao");
const segurancaInput = document.querySelector("#seguranca-input");

const botao = document.querySelector("#botao");
const formulario = document.querySelector("#form");

formulario.addEventListener("submit", event => {
	event.preventDefault();
	checarTitular();
	checarNumeracao();
	checarMes();
	checarAno();
	checarCvc();
});

function checarTitular() {
	const valorTitularInput = titularInput.value;

	if (valorTitularInput === "") {
		erroInput(titularInput, "fill in all fields");
	} else {
		const formItem = titularInput.parentElement;
		formItem.classList = "itens-cartao";
	}
}

function checarNumeracao() {
	const valorNumeracaoInput = numeracaoInput.value;

	if (valorNumeracaoInput === "") {
		erroInput(numeracaoInput, "Wrong format, numbers only");
	} else {
		const formItem = numeracaoInput.parentElement;
		formItem.classList = "itens-cartao";
	}
}

function checarMes() {
	const valorMesInput = mesInput.value;

	if (valorMesInput === "") {
		erroInput(mesInput, "Can't be blank");
	} else {
		const formItem = mesInput.parentElement;
		formItem.classList = "itens-cartao";
	}
}
function checarAno() {
	const valorAnoInput = anoInput.value;

	if (valorAnoInput === "") {
		erroInput(anoInput, "Can't be blank");
	} else {
		const formItem = anoInput.parentElement;
		formItem.classList = "itens-cartao";
	}
}

function checarCvc() {
	const valorSegurancaInput = segurancaInput.value;

	if (valorSegurancaInput === "") {
		erroInput(segurancaInput, "Can't be blank");
	} else {
		const formItem = segurancaInput.parentElement;
		formItem.classList = "itens-cartao";
	}
}

function erroInput(input, mensagem) {
	const formItem = input.parentElement;
	const textoMensagem = formItem.querySelector("a");
	textoMensagem.innerText = mensagem;
	formItem.className = "itens-cartao erro";
}

numeracaoInput.oninput = () => {
	numeracaoCartao.innerText = numeracaoInput.value;
};

titularInput.oninput = () => {
	titularCartao.innerText = titularInput.value;
};
mesInput.oninput = () => {
	mesCartao.innerText = mesInput.value;
};
anoInput.oninput = () => {
	anoCartao.innerText = anoInput.value;
};
segurancaInput.oninput = () => {
	segurancaCartao.innerText = segurancaInput.value;
};
