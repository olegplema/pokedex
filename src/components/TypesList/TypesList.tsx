import React, {FC} from 'react';
import {ITypeResponse} from "../../axios/types";
import styles from './TypesList.module.css'
import Type from "../Type/Type";
import typesColors from "../../utils/TypesColors";

interface TypesListProps{
    types: ITypeResponse[]
}

const TypesList : FC<TypesListProps>= ({types}) => {
    return (
        <div className={styles.types_list}>
            {types.map(type => <Type color={typesColors[type.type.name]}
                                     children={type.type.name}
                                     key={type.slot}/>)}
        </div>
    );
};

export default TypesList;