// window.onload = () => {
//     const produto = JSON.parse(localStorage.getItem('produtoclicado'));
//     const listaDetalhes = document.getElementById('produtoDetalhes');

//     const li = document.createElement('li');
//     li.classList.add('produto-item');

//     const img = document.createElement('img');
//     img.src = produto.url_img;
//     img.style.margin = '10px';
//     img.style.width = '80px';
//     img.style.height = 'auto';
//     img.classList.add('carrinho-img-produto');

//     const textoDiv = document.createElement('div');
//     textoDiv.classList.add('texto-carrinho');

//     const nome = document.createElement('p');
//     nome.textContent = produto.nome;
//     nome.classList.add('carrinho-nome');

//     const autor = document.createElement('p');
//     nome.textContent = produto.autor;
//     nome.classList.add('autor')



//     const valor = document.createElement('p');
//     valor.textContent = `R$${produto.valor}`;
//     valor.classList.add('carrinho-valor');

//     const condicao = document.createElement('p');
//     condicao.textContent = produto.condicao;
//     condicao.classList.add('carrinho-condicao');

//     // Montando a estrutura
//     li.appendChild(img);
//     textoDiv.appendChild(nome);
//     textoDiv.appendChild(autor);
//     textoDiv.appendChild(valor);
//     textoDiv.appendChild(condicao);
//     li.appendChild(textoDiv);

//     // Adicionando o 'li' ao contêiner
//     listaDetalhes.appendChild(li);
// };



window.onload = () => {
    const produto = JSON.parse(localStorage.getItem('produtoclicado'));

    document.getElementById('produtoImagem').src = produto.url_img;
    document.getElementById('produtoNome').textContent = produto.nome;
    document.getElementById('produtoAutor').textContent = `Autor: ${produto.autor}`;
    document.getElementById('produtoCondicao').textContent = `Condição: ${produto.condicao}`;
    document.getElementById('produtoData').textContent = `Data: ${produto.data}`;
    document.getElementById('produtoValor').textContent = `Valor: R$${produto.valor}`;
    document.getElementById('produtoDescricao').textContent = `Descrição: ${produto.descricao}`;
   const containerBtn = document.getElementById('container-button')
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = '+ ao carrinho';
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.onclick = () => adicionarNoCarrinho(produto);
    containerBtn.appendChild(addToCartBtn);

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