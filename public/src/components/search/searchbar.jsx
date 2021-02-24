import React, { useContext } from 'react';
import { SearchContext } from '../app.jsx';

export default function SearchBar(props) {
    const { changeKeyword } = useContext(SearchContext);

    return (
        <div id='search-bar-container'>
            <input id='search-bar-area' onChange={e => changeKeyword(e.target.value)}></input>
        </div>
    );
};