let botão =  document.getElementById ('button')

// dados cadastro

function Cadastro(){

    let user = document.getElementById("user_cad").value;
    let email = document.getElementById("email_cad").value;
    let senha = document.getElementById("senha_cad").value;
    let senha_confirm = document.getElementById("senha_confirm_cad").value;
    
    

    if(!user || !email|| !senha|| !senha_confirm){
        alert('Preencha todos os campos. ')
    }else if(senha == senha_confirm){
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};
         
    
        if(bancoDeDados[email]){
            alert("Email já cadastrado.");
            return;
        }

        bancoDeDados[email] = { email: email, user: user, senha: senha };
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

        alert('Usuário cadastrado com sucesso!')
        window.location.href="tela_login.html" 
    }else{
        alert('As senhas são diferentes!')
    }
    
}

//dados Login

function Login(){

    let email = document.getElementById("email_log").value
    let senha = document.getElementById("senha_log").value

    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))

    if (bancoDeDados[email] && bancoDeDados[email].senha === senha) {
        alert("Login bem-sucedido!"); // Exibe mensagem se o login for bem-sucedido
        window.location.href = "/inicio-telas/tela_inicio.html";
        } else {
        alert("Endereço de email ou senha incorretos."); // Exibe mensagem se o login falhar
    }
   
}

//Recuperação de senha

function Recp_senha(){
 
    let email = document.getElementById("email_rec_senha").value;
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))

    if(!email){
        alert('Preencha o campo de email!')
    }else if(!bancoDeDados[email]){
        alert('Email não cadastrado!')
    }
    else{
        //falta o codigo p enviar o email aqui !!!
        alert('Email de confirmação foi enviado com sucesso!')
        window.location.href="/inicio-telas/tela_inicio.html" 
    }
}



// termos

let abrirTermos = document.getElementById('abrir-termos')
let fecharTermos = document.getElementById('fechar-termos')

function TermosPriv(){
    let modal = document.getElementById ('fade1')
    modal.style.display = 'block';
  
}

function FecharTermos(){
    let modal = document.getElementById ('fade1')
    modal.style.display = 'none';
    }



    let voltarInicio = document.getElementById('voltar')
    function Voltarinicio() {
        window.location.href = "/inicio-telas/tela_inicio.html";
    }


// cadastrar produtos

let salvarItem = document.getElementById('salvarItem')
let excluirItem = document.getElementById('excluirItem')
let produtoEditandoIndex = null;

function salvarnovoItem(){
  
    const nome = document.getElementById('nome').value;
    const autor = document.getElementById('autor').value;
    const condicao = document.getElementById('condicoes').value;
    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;
    const url_img = document.getElementById('img').value;
    const destaque = false;
    const produto = {
        nome,
        autor,
        condicao,
        data,
        valor,
        descricao,
        url_img,
        destaque,
    };

    if (produto.nome && produto.autor && produto.condicao  && produto.url_img && produto.valor && produto.data) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
       
    if (produtoEditandoIndex !== null) {
        produtos[produtoEditandoIndex] = produto;
        produtoEditandoIndex = null;
    }
    else{
        produtos.push(produto);
    }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        limparFormulario()
        exibirProdutos()
    }
    
    else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario(){
    document.getElementById('nome').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('condicoes').value = '';
    document.getElementById('data').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('img').value = '';
    
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');
        li.classList.add('lista-produtos-container')

        const img = document.createElement('img');
        img.src = produto.url_img;
        img.style.margin ='10px';
        img.style.width ='100px';
        img.style.height ='auto';

        li.textContent = `${produto.nome} - ${produto.condicao} - -R$${produto.valor}`

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);
    
        const destaquebtn = document.createElement('button');
         destaquebtn.textContent = 'Destaque';
         destaquebtn.classList.add('destaque-btn');
         destaquebtn.onclick = () => destacarProduto(i);

        const deldestaquebtn = document.createElement('button');
        deldestaquebtn.textContent = 'Remover-destaque';
        deldestaquebtn.classList.add('deldestaque-btn');
        deldestaquebtn.onclick = () => tirarDestaque(i);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar'
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);

        

        li.appendChild(img);
        li.appendChild(deleteBtn);
        li.appendChild(destaquebtn);
        li.appendChild(deldestaquebtn);
        li.appendChild(editBtn);
        listaProdutos.appendChild(li);


    }
}

function deletarProduto(index){

    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index,1);
    localStorage.setItem('produtos',JSON.stringify(produtos));
    exibirProdutos()
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}


function destacarProduto(index){
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos[index].destaque = true;
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos()
    console.log('Produto ${produtos[index].nome} agora é destaque:,' + produtos[index].destaque);
}


function tirarDestaque(index){

    let produtos = JSON.parse(localStorage.getItem('produtos'));

    if (produtos[index]) {
        produtos[index].destaque = false;
        localStorage.setItem('produtos', JSON.stringify(produtos));
        exibirProdutos();
    } 
}

function editarProduto(index){
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtos[index];

    document.getElementById('nome').value = produto.nome;
    document.getElementById('autor').value = produto.autor;
    document.getElementById('condicoes').value = produto.condicao;
    document.getElementById('data').value = produto.data;
    document.getElementById('valor').value = produto.valor;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('img').value = produto.url_img;

    produtoEditandoIndex = index;
}

window.onload = () =>{
    exibirProdutos()
} 


