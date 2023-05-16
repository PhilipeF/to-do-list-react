import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

import './App.css';
import { Search } from "./components/Search";
import Filter from "./components/Filter";

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

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('')

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }
    ]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    )
    if (!filteredTodos.length) {
      // alert('Todas as tarefas serão deletas')
    }
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  const verfica = (todos) => todos.isCompleted === true

  if (todos.every(verfica)) {
    // alert('Todas as tarefas foram concluídas')
  }
  

  return (
    <div className="app">
      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        setSort={setSort}
      />
      <h1>Lista de tarefas</h1>
      <div className="todo-list">

        {!todos.length ? 'Todos as tarefas foram deletas' : todos
          .filter((todo) =>
            filter === 'All'
              ? true
              : filter === "Completed" ? todo.isCompleted : !todo.isCompleted
          )
          .sort((a, b) =>
            sort === 'Asc'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .filter((todo) =>
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((todo) =>
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          )
        }
      </div>
      <TodoForm addTodo={addTodo} />
    </div >
  )
}

export default App
