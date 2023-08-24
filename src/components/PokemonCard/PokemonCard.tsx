import React, {FC} from 'react';
import styles from './PokemonCard.module.css';
import LazyImage from "../LazyImage/LazyImage";
import {IPokemon} from "../../axios/types";
import TypesList from "../TypesList/TypesList";
import {capitalizeFirstLetter} from "../../utils/capitalFirstLetter";
import {setCurrentPokemon} from "../../redux/actionCreators/currentPokemonActionCreators";
import {useAppDispatch} from "../../hooks/reduxHooks";

interface PokemonCardProps {
    pokemon:IPokemon
    onClick?:() => void
}

const PokemonCard : FC<PokemonCardProps>= ({pokemon,onClick}) => {


    return (
        <div className={styles.card} onClick={onClick}>
            <LazyImage url={pokemon.sprites.front_default}/>
            {capitalizeFirstLetter(pokemon.name)}
            <TypesList types={pokemon.types!}/>
        </div>
    );
};

export default PokemonCard;