import React, {FC} from 'react';
import styles from './CurrentCard.module.css'
import LazyImage from "../LazyImage/LazyImage";
import {useAppSelector} from "../../hooks/reduxHooks";
import {capitalizeFirstLetter} from "../../utils/capitalFirstLetter";
import {formatNumber} from "../../utils/formatNuber";
import Table from "../Table/Table";

interface CurrentCardProps {

}

const CurrentCard : FC<CurrentCardProps> = () => {

    const pokemon = useAppSelector(state => state.currentPokemon.pokemon)

    console.log(pokemon)

    const isVisible = pokemon !== null
    console.log(isVisible)

    if(!isVisible){
        return (
            <>
            </>
        )
    }

    return (
        <div className={styles.card}>
            <LazyImage url={pokemon.sprites.front_default}/>
            <div className={styles.pokemon_name}>
                {capitalizeFirstLetter(pokemon.name) + " " +formatNumber(pokemon.id)}
            </div>
            <Table/>
        </div>
    );
};

export default CurrentCard;