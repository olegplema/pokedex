import React, {FC, ReactNode} from 'react';
import styles from './Table.module.css'

interface ColProps {
    children: ReactNode
    className?:string
}

const Col : FC<ColProps> = ({children,className}) => {

    const classes = [styles.col]

    if (className) classes.push(className)

    return (
        <td className={classes.join(' ')}>
            {children}
        </td>
    );
};

export default Col;