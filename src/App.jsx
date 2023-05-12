import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
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
      category: "Finanças",
      isCompleted: false
    },
    {
      id: 4,
      text: "Ir a academia",
      category: "Pessoal",
      isCompleted: false
    }
  ])
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) =>
          <Todo todo={todo} />
        )}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
