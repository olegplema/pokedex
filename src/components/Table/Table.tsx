import React, {FC} from 'react';
import styles from './Table.module.css'
import TableLine from "./TableLine";
import {useAppSelector} from "../../hooks/reduxHooks";
import {typesToString} from "../../utils/typesToString";
import {convertName} from "../../utils/convertName";

const Table : FC= () => {

    const pokemon = useAppSelector(state => state.currentPokemon.pokemon)

    return (
        <table className={styles.table}>
            <TableLine firstCol={'Types'} secondCol={typesToString(pokemon!.types)}/>
            {pokemon!.stats.map(stat => <TableLine firstCol={stat.stat.name}
                                                  secondCol={stat.base_stat}
                                                  key={stat.stat.name}/>)}
            <TableLine firstCol={'Weigh'} secondCol={pokemon!.weight}/>
            {/*<TableLine firstCol={'Total moves'} secondCol={typesToString(pokemon!.types)}/>*/}
        </table>
    );
};

export default Table;