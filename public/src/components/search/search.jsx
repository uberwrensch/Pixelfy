import React from 'react';
import SearchBar from './searchbar.jsx';
import SearchOptions from './searchoptions.jsx';

export default function Search() {
    return (
        <div id='search-container'>
            <SearchBar />
            <SearchOptions />
        </div>
    );
};