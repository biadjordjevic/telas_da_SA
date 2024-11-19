function exibirCarrinho(){
    const carrinhoModal = document.getElementById('carrinho');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';

    carrinhoModal.style.display = 'block';

    if(carrinho.length === 0){
        listaCarrinho.innerHTML = 
    '<p class="carrinho-vazio-texto"> Se carrinho está vázio </p>';
    return;
}

for (let i in carrinho){
    const produto = carrinho[i];

    const li = document.createElement('li')
    const img = document.createElement('url_img');
    img.src = produto.urlImage;
    img.style.margin = '10px';
    img.style.width = '50px';
    img.style.height = 'auto';
    
    li.textContent = `${produto.nome} - R$${produto.valor} - ${produto.condicao}`;
    
    // botao de remover do carrinho
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.classList.add('btn-remove-cart');
    
    removeBtn.onclick = () => removerDoCarrinho(i);
    
        li.appendChild(img);
        li.appendChild(removeBtn);
        listaCarrinho.appendChild(li);
}
  
}

function removerDoCarrinho(index){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho()
}