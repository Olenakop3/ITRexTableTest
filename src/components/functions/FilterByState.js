import React from 'react';
import './FilterByState.css'

export const FilterByState = ({handleSelect, currentUsersPage}) =>{
    return(
        <select name="select"  className='select' onChange={handleSelect}>
            <option className='state' value='' selected>Filter by state</option>
            <option className='state' value=''>All</option>
            {currentUsersPage.map((user, index) => 
            (<option className='state' value={user.adress.state}>
            {user.adress.state}
            </option>))}
        </select>

    )
}