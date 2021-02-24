import React, { useState } from 'react';
import SearchBar from './searchbar.jsx';
import SearchOptions from './searchoptions.jsx';

export default function Search() {
    const [keyword, setKeyword] = useState('');

    const getKeyword = (keyword) => {
        setKeyword(keyword);
    };

    return (
        <div id='search-container'>
            <SearchBar getKeyword = {getKeyword}/>
            <SearchOptions />
        </div>
    );
};