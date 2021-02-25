import React, { createContext, useState } from 'react';
import GetImages from './getimages.jsx';

export const ImageContext = createContext();

export default function Image() {
    const [images, setImages] = useState([]);

    const setImagesState = (images) => {
        setImages(images);
    };

    return (
        <div id='image-only-container'>
            <ImageContext.Provider value={{ setImagesState, images }}>
                <GetImages />
            </ImageContext.Provider>
        </div>
    );
};