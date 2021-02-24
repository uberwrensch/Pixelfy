import React from 'react';

export default function SearchBar(props) {
    return (
        <div id='search-bar-container'>
            <input id='search-bar-area' onChange = {e => props.getKeyword(e.target.value)}></input>
        </div>
    );
};