import React, { createContext, useState } from 'react';
import Search from './search/search.jsx';
import ImageResults from './results/getimages.jsx';

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
    }

    return (
        <div id='app-main-container'>
            <SearchContext.Provider value = {{ changeKeyword, changeSearch, changeSpicy, keyword, search }}>
                <Search />
                <ImageResults keyword={keyword} search={search} spicy={spicy}/>
            </SearchContext.Provider>
        </div>
    );
};

export default App;