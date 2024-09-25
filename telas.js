let botão =  document.getElementById ('button')

function Cadastro(){
    
// dados cadastro

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

function Login(){
// dados de login

    let email = document.getElementById("email_log").value
    let senha = document.getElementById("senha_log").value

    // let email= email_log.value
    // let senha= senha_log.value
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))

    if (bancoDeDados[email] && bancoDeDados[email].senha === senha) {
        alert("Login bem-sucedido!"); // Exibe mensagem se o login for bem-sucedido
        window.location.href = "tela_inicio.html"; 
        } else {
        alert("Endereço de email ou senha incorretos."); // Exibe mensagem se o login falhar
    }
   
}

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