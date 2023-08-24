import React, {FC} from 'react';
import styles from './Header.module.css'

const Header : FC = () => {
    return (
        <div className={styles.header}>
            Pokedex
        </div>
    );
};

export default Header;