import React, { useContext } from 'react';
import { SearchContext } from '../app.jsx';

export default function SearchOptions() {
    const { changeSearch, changeSpicy } = useContext(SearchContext);

    return (
        <div id='search-options-container'>
            <button id='search-only-container' onClick={changeSearch}>Search</button>
            <button id='spicy-container' onClick={changeSpicy}>Feeling Spicy!</button>
        </div>
    );
};