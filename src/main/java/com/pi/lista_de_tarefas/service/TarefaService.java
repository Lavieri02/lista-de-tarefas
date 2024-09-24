
package com.pi.lista_de_tarefas.service;

import com.pi.lista_de_tarefas.Model.TarefaEntity;
import com.pi.lista_de_tarefas.Repository.TarefaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TarefaService {
    
    @Autowired
    private TarefaRepository tarefaRepository;
    
    public List<TarefaEntity> listarTodas() {
        return tarefaRepository.findAll();
    }

    public TarefaEntity salvar(TarefaEntity tarefa) {
        return tarefaRepository.save(tarefa);
    }

    public TarefaEntity buscarPorId(Long id) {
        return tarefaRepository.findById(id).orElse(null);
    }

    public void deletar(Long id) {
        tarefaRepository.deleteById(id);
    }
}
