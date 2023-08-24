import React, {FC, ReactNode} from 'react';
import styles from './Table.module.css'

interface RowProps {
    children:ReactNode
}

const Row : FC<RowProps> = ({children}) => {
    return (
        <tr className={styles.row}>
            {children}
        </tr>
    );
};

export default Row;