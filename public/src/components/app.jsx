import React, { createContext, useState } from 'react';
import Search from './search/search.jsx';
import Image from './image/image.jsx';

export const SearchContext = createContext();

function App() {
    const [keyword, setKeyword] = useState('');
    const [search, setSearch] = useState(false);
    const [spicy, setSpicy] = useState(false);

    const changeKeyword = (word) => {
        setKeyword(word);
    };

    const changeSearch = () => {
        setSearch(!search);
    };

    const changeSpicy = () => {
        setSpicy(!spicy);
    };

    return (
        <div id='app-main-container'>
            <SearchContext.Provider value={{ changeKeyword, changeSearch, changeSpicy, keyword, search, spicy }}>
                <Search />
                <Image />
            </SearchContext.Provider>
        </div>
    );
};

export default App;