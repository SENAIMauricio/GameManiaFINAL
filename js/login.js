//----------FORMULÁRIO-------------//

var entrar = document.getElementById('entrar');
var msgValidacao = document.getElementById('msg-validacao');
var msgInvalidacao = document.getElementById('msg-invalidacao');
var azulLogin = document.getElementById('azul-login');

function validarFormulario() {

    entrar.addEventListener("click", function () {
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        if ((email !== null && email !== undefined && email !== '')
            && (senha !== null && senha !== undefined && senha !== '')) {
            azulLogin.style.display = 'none';
            msgValidacao.style.display = 'flex';
            msgValidacao.style.marginTop = '200px';
            setTimeout(function () {
                window.open('index.html', '_self');
            }, 1500);
        } else {
            azulLogin.style.display = 'none';
            msgInvalidacao.style.display = 'flex';
            msgInvalidacao.style.position = 'relative';
            msgInvalidacao.style.top = '200px';
            msgInvalidacao.style.left = '0';


            setTimeout(function () {
                msgInvalidacao.style.display = 'none';
                azulLogin.style.display = 'flex';
            }, 1500);
        };
    });










};

validarFormulario();


