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
        window.location.href = "tela_inicio.html"; 
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
        window.location.href="tela_login.html" 
    }
}

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


    let paracadastroLivros = document.getElementById('para-cadastroLivros')
    function Continuar(){
        window.location.href = "cadastro-produtos.html";
    }

    let voltarInicio = document.getElementById('voltar')
    function Voltarinicio() {
        window.location.href = "tela_inicio.html";
    }