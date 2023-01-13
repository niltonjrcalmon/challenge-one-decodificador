
/* puxar o campo de entrada, saída e botões do html*/
var inputMensagem = document.querySelector("#input-texto");
var outMensagem = document.querySelector("#out-texto");
var botaoCripto = document.querySelector(".button-criptografar");
var botaoDescripto = document.querySelector(".button-descriptografar");

/* puxar varíaveis da imagem do campo de saída e os textos escritos*/
var desenhoOut = document.querySelector(".desenho");

/*função do criptografar, vai declarar uma variavel para pegar o texto/valor digitado (inputMensagem)
e gerar mensagem criptografada usando replace, logo após usa o "retun" pra retornar/informar o valor digitado.*/

function criptografar(texto) {

	var textoEntrada = inputMensagem.value;
	var textoCriptografado = texto.replaceAll("e", "enter").replaceAll("i", "imes")
	.replaceAll("a", "ai").replaceAll("o", "ober")
	.replaceAll("u", "ufat");
	return textoCriptografado;
}

/*função descriptografar, vai retornar a mensagem original digita usando replace, 
logo após usa o "retun" pra retornar/informar o valor digitado.*/

function descriptografar(texto) {

	var textoDescriptografado = texto.replaceAll("enter", "e").replaceAll("imes", "i")
	.replaceAll("ai", "a").replaceAll("ober", "o")
	.replaceAll("ufat", "u");
	return textoDescriptografado;

}

/* vai colocar campo de entrada, saída e a função criptografar*/
function clicarCripto() {

	var textoEntrada = inputMensagem.value;
	var mensagem = criptografar(textoEntrada);
	outMensagem.value = mensagem;
	desenhoOut.innerHTML = '<button class="button-copiar" onclick="clicarCopiar()">Copiar</button>';
}

/* vai colocar campo de entrada, saída e a função descriptografar*/
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