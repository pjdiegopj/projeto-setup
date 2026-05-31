const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".peca");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPeca();

		botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
	});
});

function desselecionarPeca() {
	const pecaSelecionado = document.querySelector(".peca.selecionado");
	pecaSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
