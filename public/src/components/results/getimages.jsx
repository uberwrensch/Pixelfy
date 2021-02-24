import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../app.jsx';
import { key } from '../../../../config.js';
import axios from 'axios';

export default function GetImages() {
    const { keyword, search } = useContext(SearchContext);

    useEffect(() => {
        const options = {
            url: `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyword}`,
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${key}`
            }
        }

        axios(options)
            .then(images => {
                console.log(images);
            })
            .catch(err => {
                console.log(err);
            })
    }, [search]);

    return (
        <div id='image-results-container'>

        </div>
    )
};