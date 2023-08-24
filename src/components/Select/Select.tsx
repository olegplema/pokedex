import React, {FC, ForwardedRef, forwardRef, MutableRefObject, RefObject} from 'react';
import TypesColors from "../../utils/TypesColors";
import styles from './Select.module.css'

interface SelectProps {
    onChange: (type: string) => void
}

const Select : FC<SelectProps> = (props:SelectProps) => {
    const types = Object.keys(TypesColors)

    return (
        <select onChange={(event) => props.onChange(event.target.value)}
                defaultValue={'no filter'}
                className={styles.select}>
            <option value={'no filter'}>no filter</option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
    );
};

export default Select;