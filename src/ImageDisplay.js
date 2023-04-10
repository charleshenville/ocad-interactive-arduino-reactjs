import React, { useState, useEffect } from 'react';
import images from './images.json'
import styles from './image.module.css'

const ImageDisplay = ({ code }) => {

    const [imageUrl, setImageUrl] = useState('');
    let image = images.find(img => img.code === code);

    //Image Pre-Loading
    
    if (!image) {
        // if image with given code is not found, try to find the closest even code
        const evenCode = String(Number(code) + 1);
        image = images.find(img => img.code === evenCode);
        // if (!image) {
        //     // if no image is found with even code, return error message
        //     return <div>Image not found</div>;
        // }
    }

    useEffect(() => {
        const preloadImage = new Image();
        preloadImage.src = image.src;
        preloadImage.onload = () => {
            setImageUrl(image.src);
        };
    }, [image.src]);

    if (!imageUrl) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.imageWrapper}>
            <img src={image.src} alt={`Image ${code}`} className={styles.image} />
        </div>
    );
}

export default ImageDisplay;
