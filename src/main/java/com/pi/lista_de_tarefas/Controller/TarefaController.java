
package com.pi.lista_de_tarefas.Controller;

import com.pi.lista_de_tarefas.Model.TarefaEntity;
import com.pi.lista_de_tarefas.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    private TarefaService tarefaService;

    // Lista todas as tarefas
    @GetMapping
    public String listar(Model model) {
        model.addAttribute("tarefas", tarefaService.listarTodas());
        return "lista-tarefas";
    }

    // Exibe o formulário para adicionar uma nova tarefa
    @GetMapping("/nova")
    public String novaTarefa(Model model) {
        model.addAttribute("tarefa", new TarefaEntity());
        return "form-tarefa";
    }

    // Salva a nova tarefa
    @PostMapping("/salvar")
    public String salvarTarefa(@ModelAttribute TarefaEntity tarefa) {
        tarefaService.salvar(tarefa);
        return "redirect:/tarefas";
    }

    // Exibe o formulário para editar uma tarefa existente
    @GetMapping("/editar/{id}")
    public String editarTarefa(@PathVariable Long id, Model model) {
        TarefaEntity tarefa = tarefaService.buscarPorId(id);
        if (tarefa != null) {
            model.addAttribute("tarefa", tarefa);
            return "form-tarefa";
        }
        return "redirect:/tarefas";
    }

    // Exclui uma tarefa
    @GetMapping("/deletar/{id}")
    public String deletarTarefa(@PathVariable Long id) {
        tarefaService.deletar(id);
        return "redirect:/tarefas";
    }

}
