import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../app.jsx';
import { ImageContext } from './image.jsx';
import { key } from '../../../../config.js';
import axios from 'axios';

export default function GetImages() {
    const { keyword, search } = useContext(SearchContext);
    const { getImages } = useContext(ImageContext);
    
    useEffect(() => {
        const options = {
            url: `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyword}`,
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${key}`
            }
        };

        axios(options)
            .then(images => {
                getImages(images.data.results);
            })
            .catch(err => {
                console.log(`API call for ${keyword} failed due to ${err}`);
            });
    }, [search]);

    return (
        <div id='image-results-container'>

        </div>
    )
};