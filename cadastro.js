// Declaração escopo senha e senhaConfirm
var openSenha = document.getElementById('EOpen');
var closeSenha = document.getElementById('EClose');
var senha = document.getElementById('senha');
var openConfirmSenha = document.getElementById('EOpenConfirm');
var closeConfirmSenha = document.getElementById('ECloseConfirm');
var senhaConfirm = document.getElementById('senhaConfirm');

// Declaração escopo input-form
var nome = document.getElementById('nome');
var usuario = document.getElementById('usuario');
var celular = document.getElementById('celular');
var email = document.getElementById('email');


 
        // Mostra ou oculta a senha com base no tipo de atributo
        function mostrarSenha(chave,olhoAberto,olhoFechado)
        {
            olhoFechado.addEventListener('click',() =>{
                if(chave.getAttribute('type') == 'password')
                    chave.setAttribute('type','text');
            })

            olhoAberto.addEventListener('click',() => {
                if(chave.getAttribute('type') == 'text')
                    chave.setAttribute('type','password');
            })
        }

        function changeIconEyeSenha()
        {
            // Ao clicar no botão para mostrar senha ele oculta o atual e mostra o próximo,no caso o ocultar senha
            openSenha.addEventListener('click',() => {
                openSenha.style.display = 'none';
                closeSenha.style.display = 'inline';
            })

            // Evento anterior,mas ao contrário
            closeSenha.addEventListener('click',() =>{
                closeSenha.style.display = 'none';
                openSenha.style.display = 'inline';
            })
        }

        function changeIconEyeConfirmSenha()
        {
            openConfirmSenha.addEventListener('click',() => {
            openConfirmSenha.style.display = 'none';
            closeConfirmSenha.style.display = 'inline';
            })

            // Evento anterior,mas ao contrário
            closeConfirmSenha.addEventListener('click',() =>{
                closeConfirmSenha.style.display = 'none';
                openConfirmSenha.style.display = 'inline';
            })
        }

        // Coloca borda ao focar e tira ao desfocar
        function borderInputCadastro()
        {
            nome.addEventListener('focus',() => {
                nome.style.borderColor = 'royalblue'
            });
            
            nome.addEventListener('blur',() => {
                nome.style.borderColor = '#ccc';
            });

            usuario.addEventListener('focus',() => {
                usuario.style.borderColor = 'royalblue'
            });
            
            usuario.addEventListener('blur',() => {
                usuario.style.borderColor = '#ccc';
            });

            celular.addEventListener('focus',() => {
                celular.style.borderColor = 'royalblue'
            });
            
            celular.addEventListener('blur',() => {
               celular.style.borderColor = '#ccc';
            });

            email.addEventListener('focus',() => {
                email.style.borderColor = 'royalblue'
            });
            
            email.addEventListener('blur',() => {
                email.style.borderColor = '#ccc';
            });

            senha.addEventListener('focus',() => {
                senha.style.borderColor = 'royalblue'
            });
            
            senha.addEventListener('blur',() => {
                senha.style.borderColor = '#ccc';
            });

            senhaConfirm.addEventListener('focus',() => {
                senhaConfirm.style.borderColor = 'royalblue'
            });
            
            senhaConfirm.addEventListener('blur',() => {
                senhaConfirm.style.borderColor = '#ccc';
            });
        }
        
        var meSalvaAi;

        nome.addEventListener('keyup', () => {
            let p = document.getElementById('minName');
            if(nome.value.length >= 4)
            {
                p.style.color = '#04CB32';
                return true;
            }
            else
                p.style.color = 'red';
                return false;
        })

        usuario.addEventListener('keyup',() =>{
            let p = document.getElementById('minUser');
            if(usuario.value.length >= 4)
            {
                p.style.color = '#04CB32';
            }
            else
                p.style.color = 'red';
        })

        function validarCelular(phone) {
            var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
            return regex.test(phone);
        }

        celular.addEventListener('keyup', () => {
            let p = document.getElementById('validFormatNumber');

            if(validarCelular(celular.value))
            {
                p.style.color = '#04CB32';
                return true;
            }
            else{
                p.style.color = 'red';
                return false;
            }
        })
        
        function validarEmail(){
            if(
            email.value=='' ||
            email.value.indexOf('@') == -1 ||
            email.value.indexOf('.com') == -1 ||
            !email.value.indexOf('@.com') == -1
            )
            {
                return false;
            }
            else if(email.value.indexOf('@.com')==-1){
                return true;
            }
        }

        email.addEventListener('keyup',() => {
            let p = document.getElementById('validFormatEmail');
            if(validarEmail())
            {
                p.style.color = '#04CB32';
                return true;
            }
            else   
                p.style.color = 'red';
                return false;
        })

        /*senha.addEventListener()*/
        senha.addEventListener('keyup',() => {
            let letraMaiuscula = document.getElementById('letraM');
            let letraMinuscula = document.getElementById('letram');
            let simbolo = document.getElementById('simbolo');
            let numero = document.getElementById('numero');
            let minChar = document.getElementById('minChar');

            if(senha.value.length >= 8)
            {
                minChar.style.color = '#04CB32';
            }  
            else{
                minChar.style.color = 'red';
            }

            if(senha.value.match(/[A-Z]+/))
            {
                letraMaiuscula.style.color = '#04CB32';
            } 
            else{
                letraMaiuscula.style.color = 'red';
            }
                
            if(senha.value.match(/[a-z]/))
            {
                letraMinuscula.style.color = '#04CB32';
            }
            else{
                letraMinuscula.style.color = 'red';
            }

            if(senha.value.match(/[@#$%&;*?+-./=]/))
            {
                simbolo.style.color = '#04CB32';
            }
            else{
                simbolo.style.color = 'red';
            }

            if(senha.value.match(/[0-9]/))
            {
                numero.style.color = '#04CB32';
            }
            else{
                numero.style.color = 'red';
            }

            if(senha.value.length >= 8 &&
            senha.value.match(/[A-Z]/) &&
            senha.value.match(/[a-z]/) && 
            senha.value.match(/[@#$%&;*?+-./=]/) &&
            senha.value.match(/[0-9]/)
            )
            {
                meSalvaAi = true;
            }else{
                meSalvaAi = false;
            }
        })

        function validarSenha()
        {
            senhaConfirm.addEventListener('keyup',() => {
                let p = document.getElementById('confirmP');
                if(senha.value != '' && senhaConfirm.value != '')
                {
                    if(senha.value == senhaConfirm.value){
                        p.style.color = '#04CB32';
                    }
                    else{
                        p.style.color = 'red';
                    }
                }
            })

            senha.addEventListener('keyup',() => {
                if(senha.value != '' && senhaConfirm.value != '')
                {
                    let p = document.getElementById('confirmP');
                    if(senha.value == senhaConfirm.value){
                        p.style.color = '#04CB32';
                    }
                    else{
                        p.style.color = 'red';
                    }
                }
            })
        }

        let cadastrar = document.getElementById('cadastrar');
        cadastrar.addEventListener('click',() => {
            let msgSucess = document.getElementById('msgSucess');
            let msgError = document.getElementById('msgError');
            let form = document.querySelector('form');
            if(nome.value.length >= 4 &&
                usuario.value.length >= 4 &&
                validarCelular(celular.value) &&
                validarEmail(email.value) &&
                meSalvaAi == true &&
                senha.value == senhaConfirm.value
                )
            {
                limparCampos();
                msgSucess.style.display = 'block';
                msgError.style.display = 'none';
                msgSucess.innerHTML = '<strong>Cadastro realizado com sucesso</strong>';
                form.style.maxHeight = '39rem';
                alert('Sucess');
                // window.location.href = 'index.html';
            }
            else{
                msgError.style.display = 'block';
                msgSucess.style.display = 'none';
                msgError.innerHTML = '<strong>Por favor,preencha todos os campos corretamente!</strong>';
                form.style.maxHeight = '39rem';
                alert('Erro');
            }
        });

        function limparCampos()
        {
            nome.value = '';
            usuario.value = '';
            celular.value = '';
            email.value = '';
            senha.value = '';
            senhaConfirm.value = '';

            nome.style.color = 'red';
            usuario.style.color = 'red';
            celular.style.color = 'red';
            email.style.color = 'red';
            senha.style.color = 'red';
            senhaConfirm.style.color = 'red';

        }

        
        borderInputCadastro();
        changeIconEyeConfirmSenha();
        changeIconEyeSenha();
        validarSenha();