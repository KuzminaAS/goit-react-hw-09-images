import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import styles from './ImageGallery.module.css'

const ImageGallery = ({ list, openModal }) => {
    const listElements = list.map((item) => <ImageGalleryItem key={item.id} openModal={openModal} {...item} />)

    return (
        <ul className={styles.gallery}>
            {listElements}
       </ul>
    )
};

export default ImageGallery;
