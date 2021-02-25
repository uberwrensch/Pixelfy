import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../app.jsx';
import { ImageContext } from './image.jsx';
import axios from 'axios';

export default function GetImages() {
    const { keyword, search } = useContext(SearchContext);
    const { getImages } = useContext(ImageContext);

    return (
        <div id='image-results-container'>

        </div>
    )
};