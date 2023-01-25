

var inputMensagem = document.querySelector("#input-texto");
var outMensagem = document.querySelector("#out-texto");
var botaoCripto = document.querySelector(".button-criptografar");
var botaoDescripto = document.querySelector(".button-descriptografar");

var desenhoOut = document.querySelector(".desenho");

function criptografar(texto) {

	var textoEntrada = inputMensagem.value;
	texto = texto.toLowerCase();
	var textoCriptografado = texto.replaceAll("e", "enter").replaceAll("i", "imes")
	.replaceAll("a", "ai").replaceAll("o", "ober")
	.replaceAll("u", "ufat");
	return textoCriptografado;
}


function descriptografar(texto) {

	var textoDescriptografado = texto.replaceAll("enter", "e").replaceAll("imes", "i")
	.replaceAll("ai", "a").replaceAll("ober", "o")
	.replaceAll("ufat", "u");
	return textoDescriptografado;

}

function clicarCripto() {

	var textoEntrada = inputMensagem.value;
	var mensagem = criptografar(textoEntrada);
	outMensagem.value = mensagem;
	desenhoOut.innerHTML = '<button class="button-copiar" onclick="clicarCopiar()">Copiar</button>';
}

function clicarDescripto() {
	var textoEntrada = inputMensagem.value;
	var mensagem = descriptografar(textoEntrada);
	outMensagem.value = mensagem;
	desenhoOut.innerHTML = '<button class="button-copiar" onclick="clicarCopiar()">Copiar</button>';
}


function clicarCopiar() {
	
	var textoCopiado = document.querySelector(".button-copiar");
	document.querySelector("#out-texto").select();
	document.execCommand('copy');
	textoCopiado.innerText = 'Copiado com sucesso!'


}
botaoCripto.onclick = clicarCripto;
botaoDescripto.onclick = clicarDescripto;	
textoCopiado.onclick = clicarCopiar;
