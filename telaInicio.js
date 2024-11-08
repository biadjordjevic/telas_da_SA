//carrinho

var carrinho = document.getElementById('carrinho');
function abr_carrinho(){
    carrinho.style.display = "block"
}
function fechar_carrinho(){
    carrinho.style.display = "none"
}
window.onclick = function fechar_carrinho_jnl(event){
    if(event.target === carrinho){
        carrinho.style.display = "none"
    }
}

// ir para a página de cadastro de produtos

let paracadastroLivros = document.getElementById('para-cadastroLivros')
function Continuar(){
    window.location.href = "cadastro-produtos.html";
}


// chama o produto
function exibirProdutos(){
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const listaProdutos = document.getElementById('listaProdutos');

    listaProdutos.innerHTML = '';

    for(let produto of produtos){
        const li = document.createElement ('li')
        li.classList.add('produto-item');

        const img = document.createElement('img')
        img.src = produto.url_img;
        img.alt = produto.nome;
        img.classList.add('produto-img')

        const nome= document.createElement('p')
        nome.textContent = produto.nome;
        nome.classList.add('nome-produto')

        const valor = document.createElement('p');
        valor.innerHTML =  `<span>Preço:</span> R$${produto.valor}`;
        valor.classList.add('valor-produto')
        
        const condicao = document.createElement('p');
        condicao.innerHTML = `<span>Descrição:</span> ${produto.condicao}`;
        condicao.classList.add('condicao-produto')

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(valor);
        li.appendChild(condicao);
        listaProdutos.appendChild(li);
    }

}

window.onload = exibirProdutos;