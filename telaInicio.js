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

// ir para a página de cadastro de produtos - TELA DO ADM

let paracadastroLivros = document.getElementById('para-cadastroLivros')
function Continuar(){
    const email_adm = "adm@gmail.com"
    const senha_adm = 1234

    let email = document.getElementById('email-adm').value
    let senha = document.getElementById('senha-adm').value

    if(senha == senha_adm & email == email_adm){
        alert('Bem vindo!!')
        window.location.href = "cadastro-produtos.html";
    }else{
        alert('Senha ou email errado, tente novamente')
    }
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
        valor.innerHTML =  `R$${produto.valor}`;
        valor.classList.add('valor-produto')
        
        const condicao = document.createElement('p');
        condicao.innerHTML = ` ${produto.condicao}`;
        condicao.classList.add('condicao-produto')

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Adicionar ao carrinho';
        addToCartBtn.classList.add('add-to-cart-btn');
        addToCartBtn.onclick = () => adicionarNoCarrinho(produto);


        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(valor);
        li.appendChild(condicao);
        li.appendChild(addToCartBtn)
        listaProdutos.appendChild(li);
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
    }
}

function exibirDestaques(){
    const listaDestaques = document.getElementById('listaDestaques');
    if (!listaDestaques) {
        console.error("Elemento 'listaProdutos' não encontrado.");
        return;
    }

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    listaDestaques.innerHTML = '';

    const produtosDestaque = produtos.filter(produto => produto.destaque);

    for(let produto of produtosDestaque){
        const li = document.createElement ('li')
        li.classList.add('destaque-item');

        const img = document.createElement('img')
        img.src = produto.url_img;
        img.alt = produto.nome;
        img.classList.add('destaque-img')

        const nome= document.createElement('p')
        nome.textContent = produto.nome;
        nome.classList.add('nome-destaque')

        const valor = document.createElement('p');
        valor.innerHTML =  `R$${produto.valor}`;
        valor.classList.add('valor-destaque')
        
        const condicao = document.createElement('p');
        condicao.innerHTML = ` ${produto.condicao}`;
        condicao.classList.add('condicao-destaque')

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Adicionar ao carrinho';
        addToCartBtn.classList.add('add-to-cart-btn');
        addToCartBtn.onclick = () => adicionarNoCarrinho(produto);


        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(valor);
        li.appendChild(condicao);
        li.appendChild(addToCartBtn)
        listaDestaques.appendChild(li);
    }

}


// function mostrarprodutos() {
//     exibirProdutos();  
//     exibirDestaques(); 
// }
window.onload = () => {
    exibirDestaques();
    exibirProdutos();
    
};
