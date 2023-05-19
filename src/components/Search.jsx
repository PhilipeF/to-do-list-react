import React from 'react'

const body = document.querySelector('body')
const modeSwitch = document.querySelector('.toggle-switch')

const handleCLick = () => {
    console.log('Passei aqui')
    body.classList.toggle('dark')
}

export const Search = ({ search, setSearch }) => {
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
                    type="text"
                    placeholder='Digite aqui'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    autoComplete='off'
                />
            </div>
        </div>
    )
}
