import { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionaliade X no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Terminar de fazer o Quiz do CJRM",
      category: "Estudos",
      isCompleted: false
    },
    {

      id: 3,
      text: "Pagar o seguro do carro",
      category: "Contas",
      isCompleted: false
    },
    {
      id: 4,
      text: "Ir a academia",
      category: "Pessoal",
      isCompleted: false
    }
  ])
  return <div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) =>
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p>({todo.category})</p>
          </div>
          <div className="button">
            <button>Completar</button>
            <button>x</button>
          </div>
        </div>
      )}
    </div>
  </div>
}

export default App
