import React from 'react';
import './Searchbox.css'

export const SearchBox = ({searchChange}) =>{
    return(
        <input type='search'
        className='search'
        placeholder='Search...'
        onChange={searchChange}
        />
    )
}



