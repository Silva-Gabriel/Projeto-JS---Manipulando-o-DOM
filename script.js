var email = document.getElementById('email');
var senha = document.getElementById('senha');
var olhoAberto = document.getElementById('eye');
var olhoFechado = document.getElementById('eyeSlash');


function mostrarSenha()
{
    olhoFechado.addEventListener('click',() =>{
        if(senha.getAttribute('type') == 'password')
        {
            senha.setAttribute('type','text');
            olhoAberto.style.display = 'inline';
            olhoFechado.style.display = 'none';
        }
        else{
            senha.setAttribute('type','password');
            olhoFechado.style.display = 'inline';
            olhoAberto.style.display = 'none';
        }
    })
}

function ocultarSenha()
{
    olhoAberto.addEventListener('click',() =>{
        if(senha.getAttribute('type') == 'password')
        {
            senha.setAttribute('type','text');
            olhoAberto.style.display = 'inline';
            olhoFechado.style.display = 'none';
        }
        else{
            senha.setAttribute('type','password');
            olhoFechado.style.display = 'inline';
            olhoAberto.style.display = 'none';
        }
    })
}

function borderInput()
{
    email.addEventListener('focus',() => {
        email.style.borderColor = 'rgba(0,0,0,.95)'
    });
    
    email.addEventListener('blur',() => {
        email.style.borderColor = '#ccc';
    });
    
    senha.addEventListener('focus',() => {
        senha.style.borderColor = 'rgba(0,0,0,.95)'
    });
    
    senha.addEventListener('blur',() =>{
        senha.style.borderColor = '#ccc';
    });
}

function cadastrar()
{
    
}

//Inicializando as funções
borderInput();
mostrarSenha();
ocultarSenha();
