import React, {FC, ReactNode} from 'react';
import styles from './Type.module.css'

interface TypeProps {
    children:ReactNode
    color:string
}

const Type : FC<TypeProps> = ({children, color}) => {
    return (
        <div className={styles.type} style={{background: `linear-gradient(to right top,${color},${color}66)`}}>
            {children}
        </div>
    );
};

export default Type;