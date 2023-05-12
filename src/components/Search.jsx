import React from 'react'

export const Search = ({ search, setSearch }) => {
    return (
        <div className='search'>
            <h2>Pesquisar:</h2>
            <input
                type="text"
                placeholder='Digite aqui'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    )
}
