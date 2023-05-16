const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => {
      if (todo.length === 0) {
        alert('Array zazio')
      } else {
        todo.id !== id ? todo : null
      }
    })
    setTodos(filteredTodos)
  }