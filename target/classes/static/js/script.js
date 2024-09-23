document.addEventListener('DOMContentLoaded', function () {
    console.log("Editar tarefa ID: " );
    // Aqui você pode fazer uma requisição AJAX para carregar dados da tarefa no modal quando for editar
    var editarBtns = document.querySelectorAll('.editarBtn');
    editarBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var tarefaId = this.getAttribute('data-id');
            // Chamada AJAX para buscar os dados da tarefa a ser editada e preencher no formulário do modal
            console.log("Editar tarefa ID: " + tarefaId);
            // Você pode adicionar lógica AJAX aqui para carregar os dados no modal antes de exibi-lo
        });
    });
    document.getElementById('formTarefa').addEventListener('submit', function(event) {
        var titulo = document.querySelector('input[name="titulo"]').value.trim();
        var descricao = document.querySelector('input[name="descricao"]').value.trim();
    
        if (titulo === "" || descricao === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();  // Evita o envio do formulário se os campos não forem preenchidos
        }
    });
});
