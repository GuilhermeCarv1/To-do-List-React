import React from "react";
import './TodoList.css';

function TodoList() {
    return (
      <div> 
          <h1>To do List</h1>
        <form>
            <input 
            type="text"
            placeholder="Add a Task" 
            />
            <button className="add" type="submit">Add</button>
        </form>
        <div className="listaTarefas">
            <div className="item">
                <span>Tarefa de exemplo</span>
                <button>Deletar</button>
            </div>
            <div className="item completo">
                <span>Tarefa de exemplo</span>
                <button>Deletar</button>
            </div>
        </div>
     </div>
        )
}

export default TodoList