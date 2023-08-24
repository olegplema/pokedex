import React, {FC, lazy, LazyExoticComponent, Suspense} from 'react';
import LazyLoad from "react-lazy-load";
import styles from './LazyImage.module.css'

interface LazyImageProps{
    url: string
    className?:string
}

const LazyImage : FC<LazyImageProps> = ({url,className}) => {
    return (
        <LazyLoad className={className}>
            <img className={styles.image} src={url}/>
        </LazyLoad>
    );
};

export default LazyImage;