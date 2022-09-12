//----------FORMULÁRIO-------------//

var entrar = document.getElementById('entrar');
var msgValidacao = document.getElementById('msg-validacao');
var msgInvalidacao = document.getElementById('msg-invalidacao');
var azulLogin = document.getElementById('azul-login');

function validarFormulario() {

    entrar.addEventListener("click",function(){
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        if((email !== null && email !== undefined && email !== '') 
        && (senha !== null && senha !== undefined && senha !== '')) {
            msgValidacao.style.zIndex = '2';
            setTimeout(function(){
                window.open('index.html','_self');
            },1500);
        } else {
            msgInvalidacao.style.zIndex = '2';
            setTimeout(function(){
                msgInvalidacao.style.zIndex = '0';
            }, 1500)
        };
    });










};

validarFormulario();


