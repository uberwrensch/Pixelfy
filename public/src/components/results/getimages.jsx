import React, { useContext, useEffect } from 'react';
import DisplayImages from './displayimages.jsx';
import { SearchContext } from '../app.jsx';
import { ImageContext } from './image.jsx';
import axios from 'axios';

export default function GetImages() {
    const { keyword, search, changeSearch } = useContext(SearchContext);
    const { setImagesState } = useContext(ImageContext);

    useEffect(() => {
        if (search) {
            getImages();
        }
    }, [search]);

    const getImages = () => {
        axios.get(`images/${keyword}`)
            .then(images => {
                setImagesState(images.data);
                changeSearch();
            })
            .catch(err => {
                console.log(`Failed to get images due to ${err}`);
            })
    };

    return (
        <div id='image-results-container'>
            <DisplayImages />
        </div>
    )
};