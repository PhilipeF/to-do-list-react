import React from 'react'
import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!value || !category) return
        addTodo(value, category)
        setValue('')
        setCategory('')
    }

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Criar uma nova tarefa"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudo">Estudo</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Finanças">Finanças</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm