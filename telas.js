let botão =  document.getElementById ('button')

function Cadastro(){
    
// dados cadastro
    const user_cad = document.getElementById("user_cad");
    const email_cad = document.getElementById("email_cad");
    const senha_cad = document.getElementById("senha_cad");
    const senha_confirm_cad = document.getElementById("senha_confirm_cad");

    if(!user_cad.value || !email_cad.value || !senha_cad.value || !senha_confirm_cad.value){
        alert('Preencha todos os campos. ')
    }
    else if(senha_cad.value != senha_confirm_cad.value){
            alert('A senha de confirmação não corresponde. ')
    }
    else{
        alert('Usuário cadastrado com sucesso!')
        window.location.href="tela_login.html"
    }
}

function Login(){
// dados de login
    const user_log = document.getElementById("user_log")
    const senha_log = document.getElementById("senha_log")

    let user= user_log.value
    let senha= senha_log.value
    
    let banco_dados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if(banco_dados  ){
        mensagem = "Nenhum usuário cadastrado até o momento"
    }
    else{
        
    }
    
}
