const form = document.querySelector('.form_main')

const usuárioInput = form.querySelector("input[type='text']")

const senhaInput = form.querySelector("input[type='password']")

form.addEventListener('submit', (Event) => {
    event.preventDefault(); 

    const usuário = usuárioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuário === '' || senha === '') {
        alert("Por Favor, Preencha os campos corretamente")
    }
    
    else if (usuário === 'usuário' && senha === 'senha' ) {
        alert("Bem vindo") 
        location.replace("/tarefa/Pagina.html", "_self")
    } 
   
    else {
        alert("Usuário ou senha incorreto, tente novamente")
    }

} )