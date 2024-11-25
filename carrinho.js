function exibirCarrinho(){
    const carrinhoModal = document.getElementById('carrinho');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';

    carrinhoModal.style.display = 'block';

    if(carrinho.length === 0){
        listaCarrinho.innerHTML = 
    '<p class="carrinho-vazio-texto"> Seu carrinho está vázio </p>';
    return;
}

for (let i in carrinho){
    const produto = carrinho[i];
    
    const li = document.createElement('li')
    li.classList.add('li-carrinho')

    const img = document.createElement('img');
    img.src = produto.url_img
    img.style.margin = '10px';
    img.style.width = '80px';
    img.style.height = 'auto';
    img.classList.add('carrinho-img-produto')
    const textoDiv = document.createElement('div');
    textoDiv.classList.add('texto-carrinho'); 
    
    const nome = document.createElement('p');
    nome.textContent = produto.nome;
    nome.classList.add('carrinho-nome');
    
    const valor = document.createElement('p');
    valor.textContent = `R$${produto.valor}`;
    valor.classList.add('carrinho-valor');
    
    const condicao = document.createElement('p');
    condicao.textContent = produto.condicao;
    condicao.classList.add('carrinho-condicao');

    
    // botao de remover do carrinho
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn-remove-cart');

    const imgRemove = document.createElement('img');
    imgRemove.src =  ("./imgs/Lixeira-icon.png");
    imgRemove.alt = 'Remover';
    imgRemove.classList.add('btn-remove-icon'); 
    
    removeBtn.onclick = () => removerDoCarrinho(i);

    const finalizar = document.getElementById('finalizarCompra');
    finalizar.addEventListener('click', () => {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length > 0) {
        localStorage.setItem('carrinhoFinalizado', JSON.stringify(carrinho));
        window.location.href = 'tela_pagamento.html';
    }
    else{
        alert("seu carrinho está vazio")
    }

});

    li.appendChild(img);
    li.appendChild(textoDiv); 
    li.appendChild(removeBtn);
    removeBtn.appendChild(imgRemove);
    textoDiv.appendChild(nome);
    textoDiv.appendChild(valor);
    textoDiv.appendChild(condicao);
    listaCarrinho.appendChild(li);
}


}

function removerDoCarrinho(index){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho()
        
}