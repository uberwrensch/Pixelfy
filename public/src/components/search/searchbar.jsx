import React from 'react';
import SearchOptions from './searchoptions.jsx';

function SearchBar() {
    return (
        <div id='search-bar-container'>
            <input id='search-bar-area'></input>
            <SearchOptions />
        </div>
    )
};

export default SearchBar;