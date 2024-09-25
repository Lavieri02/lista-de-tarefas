// @ts-check
document.addEventListener('DOMContentLoaded', function () {
    var editarBtns = document.querySelectorAll('.editarBtn');
    var modalTitle = document.getElementById('modalLabel');
    editarBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var tarefaId = this.getAttribute('data-id');
            
            // Requisição para obter os dados da tarefa
            fetch(`/tarefas/editar/json/${tarefaId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao buscar tarefa');
                    }
                    return response.json();
                })
                .then(data => {
                    // Preencher o formulário com os dados da tarefa
                    document.querySelector('input[name="id"]').value = data.id;
                    document.querySelector('input[name="titulo"]').value = data.titulo;
                    document.querySelector('input[name="descricao"]').value = data.descricao;
                    document.querySelector('input[name="concluida"]').checked = data.concluida;
                    
                    // Muda o título do modal para "Editar Tarefa"
                    modalTitle.textContent = "Editar Tarefa";
                })
                .catch(error => {
                    console.error(error);
                });
        });
    });
    
     // Muda o título do modal para "Nova Tarefa" quando o botão é clicado
    document.getElementById('formTarefa').addEventListener('show.bs.modal', function () {
        modalTitle.textContent = "Nova Tarefa";
    });
    
       // Evento para limpar os campos do formulário ao fechar o modal
    $('#formTarefaModal').on('hidden.bs.modal', function () {
        document.querySelector('input[name="id"]').value = '';
        document.querySelector('input[name="titulo"]').value = '';
        document.querySelector('input[name="descricao"]').value = '';
        document.querySelector('input[name="concluida"]').checked = false;
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
