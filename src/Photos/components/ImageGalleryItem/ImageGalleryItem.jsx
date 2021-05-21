import React from 'react';

import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, largeImageURL, openModal}) => {
    return (
        <li className={styles.item} onClick={()=>openModal(largeImageURL)}>
            <img src={webformatURL} alt="" className={styles.item_image} />
        </li>
    )
};

export default ImageGalleryItem;
