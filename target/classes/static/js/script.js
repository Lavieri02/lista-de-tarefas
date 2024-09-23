document.addEventListener('DOMContentLoaded', function () {
    
    
    var editarBtns = document.querySelectorAll('.editarBtn');
    editarBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var tarefaId = this.getAttribute('data-id');
            
            console.log("Editar tarefa ID: " + tarefaId);
            
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
