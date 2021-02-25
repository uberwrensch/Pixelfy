import React, { useContext } from 'react';
import { ImageContext } from './image.jsx';

export default function DisplayImages() {
    const { images } = useContext(ImageContext);

    return (
        <div id='display-images-container'>
            {images.map(image => {
                return (
                    <img src={image.urls.full} />
                )
            })}
        </div>
    );
};