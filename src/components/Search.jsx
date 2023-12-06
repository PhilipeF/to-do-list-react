import React from 'react'

const body = document.querySelector('body')

const handleCLick = () => {
    body.classList.toggle('dark')
}

export const Search = ({search , setSearch}) => {
    const handleSearch = () => {
        console.log(`Pesquisando por: ${search}`)
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="search">
            <div className="topo">
                <h2>Pesquisar:</h2>
                <div className="toggle-switch" onClick={() => handleCLick()}>
                    <span className="switch"></span>
                </div>
            </div>
            <div>
                <input
                    id='searchInput'
                    type="text"
                    placeholder='Digite aqui o nome da tarefa'
                    value={search}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </div>
    )
}
