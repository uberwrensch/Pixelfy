import React, { useContext } from 'react';
import { ImageContext } from './image.jsx';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

export default function DisplayImages() {
    const { images } = useContext(ImageContext);
 
    return (
    <div className='displayed-images-container'>
        <GridList cols={5} spacing={20} cellHeight={300} className='grid-list-container'>
        {images.map((image) => (
            <GridListTile key={image.id} className='grid-list-tile'>
            <img src={image.urls.small} alt={image.alt_description} />
            <GridListTileBar
                title={image.description || image.alt_description}
                subtitle={<span>by: {image.user.name}</span>}
            />
            </GridListTile>
        ))};
        </GridList>
    </div>
    );
};