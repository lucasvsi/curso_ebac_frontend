document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroN = document.getElementById('numero').value;
        numeroN = parseInt(numeroN);
    })
})