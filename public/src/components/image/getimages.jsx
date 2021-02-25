import React, { useContext, useEffect } from 'react';
import DisplayImages from './displayimages.jsx';
import { SearchContext } from '../app.jsx';
import { ImageContext } from './image.jsx';
import axios from 'axios';

export default function GetImages() {
    const { keyword, search, changeSearch, spicy, changeSpicy } = useContext(SearchContext);
    const { setImagesState } = useContext(ImageContext);

    useEffect(() => {
        search === true ? getImages() : spicy === true ? randomImages() : null
    }, [search, spicy]);

    const getImages = () => {
        axios.get(`/images/${keyword}`)
            .then(images => {
                setImagesState(images.data);
                changeSearch();
            })
            .catch(err => {
                console.log(`Failed to get images due to ${err}`);
            });
    };

    const randomImages = () => {
        axios.get('/random-images')
            .then(randomImages => {
                setImagesState(randomImages.data);
                changeSpicy();
            })
            .catch(err => {
                console.log(`Failed to get random images due to ${err}`);
            });
    };

    return (
        <div id='image-results-container'>
            <DisplayImages />
        </div>
    )
};