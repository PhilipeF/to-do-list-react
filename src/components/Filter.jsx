import React from 'react'

const Filter = () => {
    return (
        <div className='filter'>
            <h2>Filtrar:</h2>
            <div className="filter-status">
                <p>Status:</p>
                <select>
                    <option value="All">Todos</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div >
    )
}

export default Filter