import React from 'react';
import { SearchBox } from './SearchBox';
import { FilterByState } from './FilterByState';
import './Header.css'

export const Header = ({searchChange, handleSelect, currentUsersPage}) => {
    return (
        <header className="header">
            <div className="search-box">
                <SearchBox searchChange={searchChange}/>
            </div>
            <div className='filter'>
                <FilterByState handleSelect={handleSelect} currentUsersPage={currentUsersPage}/>
            </div>
        </header>
    )
};
