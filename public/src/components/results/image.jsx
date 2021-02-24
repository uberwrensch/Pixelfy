import React, { createContext, useState } from 'react';
import GetImages from './getimages.jsx';
import DisplayImages from './displayimages.jsx';

export const ImageContext = createContext();

export default function Image() {
    const [images, setImages] = useState([]);

    const getImages = (images) => {
        setImages(images);
    };

    return (
        <div id='image-only-container'>
            <ImageContext.Provider value={{ getImages, images }}>
                <GetImages />
                <DisplayImages />
            </ImageContext.Provider>
        </div>
    );
};