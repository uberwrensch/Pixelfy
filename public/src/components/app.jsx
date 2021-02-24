import React, { createContext, useState } from 'react';
import Search from './search/search.jsx';

export const SearchContext = createContext();

function App() {
    const [keyword, setKeyword] = useState('');

    const changeKeyword = (word) => {
        setKeyword(word);
    };

    return (
        <div id='app-main-container'>
            <SearchContext.Provider value = {{ changeKeyword }}>
                <Search />
            </SearchContext.Provider>
        </div>
    );
};

export default App;