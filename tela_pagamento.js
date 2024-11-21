window.onload = () => {
    let total = 0
    const produto = JSON.parse(localStorage.getItem('produtoclicado'));
    const carrinho = JSON.parse(localStorage.getItem('carrinhoFinalizado')) || [];
  
        const listaPagamento = document.getElementById('listaPagamento')
        listaPagamento.innerHTML = ''
      
        
        if (produto){

            const itemPagamento = document.createElement("li");
            itemPagamento.classList.add('item-pagamento');

            const img = document.createElement('img');
            img.src = produto.url_img;
            img.style.margin = '10px';
            img.style.width = '80px';
            img.style.height = 'auto';

            const textoDiv = document.createElement('div');
            textoDiv.classList.add('texto-pagamento');

            const nome = document.createElement('p');
            nome.classList.add('nome-pagamento');
            nome.textContent = produto.nome;
            
            const valor = document.createElement('p');
            valor.classList.add('valor-pagamento');
            valor.textContent = `R$${produto.valor}`;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = ('Remover')
            removeBtn.classList.add('btn-remove-pagamento');
            removeBtn.onclick = () => {
                removerDaCompra(null, false);
                itemPagamento.remove(); 
            };
            //  já que é só um produto, não tem o indicie


            itemPagamento.appendChild(textoDiv);
            textoDiv.appendChild(nome);
            textoDiv.appendChild(valor);
            itemPagamento.appendChild(img);
            itemPagamento.appendChild(removeBtn)
            listaPagamento.appendChild(itemPagamento);

        }
    
        if(carrinho.length > 0){
            carrinho.forEach((produto, index) => {
                const itemPagamento = document.createElement("li");
            itemPagamento.classList.add('item-pagamento');

            const img = document.createElement('img');
            img.src = produto.url_img;
            img.style.margin = '10px';
            img.style.width = '80px';
            img.style.height = 'auto';

            const textoDiv = document.createElement('div');
            textoDiv.classList.add('texto-pagamento');

            const nome = document.createElement('p');
            nome.classList.add('nome-pagamento');
            nome.textContent = produto.nome;
            
            const valor = document.createElement('p');
            valor.classList.add('valor-pagamento');
            valor.textContent =  `R$${produto.valor}`;

            
            const removeBtn = document.createElement('button');
            removeBtn.textContent = ('Remover')
            removeBtn.classList.add('btn-remove-pagamento');
            removeBtn.onclick = () => removerDaCompra(index, true);
// usa o index e o positivo para indicar que está trabalhando com um array e itens

            itemPagamento.appendChild(textoDiv);
            textoDiv.appendChild(nome);
            textoDiv.appendChild(valor);
            itemPagamento.appendChild(img);
            itemPagamento.appendChild(removeBtn)
            listaPagamento.appendChild(itemPagamento);
            });
        }
     if (produto) {
        total += Number(produto.valor); // Converte o valor para número e soma
    }

    carrinho.forEach(produto => {
        total += Number(produto.valor); // Converte o valor para número e soma
    });

    // return `R$${total.toFixed(2)}`; // Retorna o total formatado em moeda
    ;
    
    // }
        document.getElementById('valorPagar').textContent = `R$${total.toFixed(2) }`;
    
}


const removerDaCompra = (index, isCarrinho = false) => {
    if (isCarrinho) {
        const carrinho = JSON.parse(localStorage.getItem('carrinhoFinalizado')) || [];
        carrinho.splice(index, 1);
        localStorage.setItem('carrinhoFinalizado', JSON.stringify(carrinho));
    }
     else {
        localStorage.removeItem('produtoclicado');
    }
}
// só armazena em uma tag html e mostra pelo inne html, igual na listaPagamento