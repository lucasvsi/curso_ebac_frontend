$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        $(`
            <li>${novaTarefa}</li>
        `).appendTo('ul');
        $('#nova-tarefa') = '';
    })
    $(document).on('click', 'li', function(){
        $('li').css('text-decoration', 'line-through');
    })
})

