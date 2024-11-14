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

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(valor);
        li.appendChild(condicao);
        listaProdutos.appendChild(li);
    }

}

function exibirDestaques (){
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const listaDestaques = document.getElementById('listaDestaques');

    listaDestaques.innerHTML = '';

    for(let produto of produtos){

        if(produto.destaque === true){
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

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(valor);
        li.appendChild(condicao);
        listaDestaques.appendChild(li);
    }
    }
}

window.addEventListener('load', function() {
    exibirProdutos();
    exibirDestaques();
})