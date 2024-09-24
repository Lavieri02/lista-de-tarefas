
package com.pi.lista_de_tarefas.Repository;

import com.pi.lista_de_tarefas.Model.TarefaEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TarefaRepository extends JpaRepository<TarefaEntity, Long>{
    
     
}
