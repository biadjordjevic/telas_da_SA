
window.onload = () => {
    const produto = JSON.parse(localStorage.getItem('produtoclicado'));

    document.getElementById('produtoImagem').src = produto.url_img;
    document.getElementById('produtoNome').textContent = produto.nome;
    document.getElementById('produtoAutor').textContent = `${produto.autor}`;
    document.getElementById('produtoCondicao').textContent = `Condição: ${produto.condicao}`;
    document.getElementById('produtoData').textContent = `Data de publicação do anúncio: ${produto.data}`;
    document.getElementById('produtoValor').textContent = `R$${produto.valor}`;
    document.getElementById('produtoDescricao').textContent = `Descrição: ${produto.descricao}`;
   const containerBtn = document.getElementById('container-button')
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = '+ ao carrinho';
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.onclick = () => adicionarNoCarrinho(produto);
    containerBtn.appendChild(addToCartBtn);

    const btnPagar = document.getElementById('para-pagamento')
    btnPagar.addEventListener('click', () => {
        localStorage.setItem('produtoclicado', JSON.stringify(produto));
        console.log('Produto armazenado no localStorage:', produto);
        window.location.href = 'tela_pagamento.html'; });

};

function fechar_carrinho(){
    carrinho.style.display = "none"
}
window.onclick = function fechar_carrinho_jnl(event){
    if(event.target === carrinho){
        carrinho.style.display = "none"
    }
}


function adicionarNoCarrinho(produto){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = carrinho.find(p => p.nome === produto.nome);

    if(produtoExistente){
        alert('Parece que você já adicionou esse produto ao seu carrinho')
    }

    else{
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('Produto adicionado com sucesso! Verfique no seu carrinho');
    }}


  