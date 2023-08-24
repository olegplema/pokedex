import React, {FC, ReactNode} from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    onClick?:() => void
    children: ReactNode
}

const Button : FC<ButtonProps>= ({onClick,children}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;