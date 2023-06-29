const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
let formeEValido = false;

function validaNumero(A, B){
    return B>A;
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    const mensagemErro = `O número B é menor ou igual ao número A, digite novamente!`;
    const mensagemSucesso = `B é maior que A, parabéns!`;
    
    formEValido = validaNumero(numeroA.value, numeroB.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        numeroA.value = '';
        numeroB.value = '';

    } else {
        const containerMensagemErro =  document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})

numeroB.addEventListener('keyup', function(e){
    numeroA.addEventListener('keyup', function(f){
        formEValido = validaNumero(f.target.value, e.target.value);
        if (!formEValido){
            numeroB.classList.add('error');
            const containerMensagemErro =  document.querySelector('.error-message');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        }else{
            numeroB.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
    })
})