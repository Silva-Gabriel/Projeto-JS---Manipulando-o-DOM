var usuario = document.getElementById('usuario');
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
    usuario.addEventListener('focus',() => {
        usuario.style.borderColor = 'royalblue'
    });
    
    usuario.addEventListener('blur',() => {
        usuario.style.borderColor = '#ccc';
    });
    
    senha.addEventListener('focus',() => {
        senha.style.borderColor = 'royalblue'
    });
    
    senha.addEventListener('blur',() =>{
        senha.style.borderColor = '#ccc';
    });
}

var entrar = document.getElementById('entrar');
        entrar.addEventListener('click',() =>{
            let msgSucess = document.getElementById('msgSucess');
            let msgError = document.getElementById('msgError');
            let form = document.querySelector('form');
            let msgLogar = document.getElementById('msgLogar');

            let listaUsuarios = [];

            //Desestruturando objeto
            let usuarioValido = {
                nome: '',
                usuario: '',
                senha: ''
            }

            listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
            listaUsuarios.forEach(item => {
                if(usuario.value == item.Usuario && senha.value == item.Senha)
                {
                    //Pega os valores do localStorage
                    usuarioValido = {
                        name: item.Nome,
                        user: item.Usuario,
                        key: item.Senha
                    }
                }
            });

            //Valida usuário e senha
            if(usuario.value == usuarioValido.user && senha.value == usuarioValido.key){
                msgSucess.style.display = 'block';
                msgError.style.display = 'none';
                msgLogar.style.display = 'flex';
                msgSucess.innerHTML = '<strong>Autenticando</strong>';
                form.style.maxHeight = '27rem';
                setTimeout(() =>{
                    location.href = 'home.html';
                },3000)
            }else{
                msgError.style.display = 'block';
                msgSucess.style.display = 'none';
                msgError.innerHTML = '<strong>Usuário ou senha incorretos</strong>';
                form.style.maxHeight = '26rem';
                usuario.focus();
            }
        })

//Inicializando as funções
borderInput();
mostrarSenha();
ocultarSenha();
