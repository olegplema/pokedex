import React, {createRef, FC, useCallback, useMemo, useRef, useState} from 'react';
import styles from './List.module.css'
import PokemonCard from "../PokemonCard/PokemonCard";
import Button from "../Button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {getPokemons} from "../../redux/actionCreators/pokemonListActionCreators";
import {setCurrentPokemon} from "../../redux/actionCreators/currentPokemonActionCreators";
import {IPokemon} from "../../axios/types";
import Select from "../Select/Select";

const List : FC= () => {
    const pokemons = useAppSelector(state => state.pokemonList.pokemons)
    const dispatch = useAppDispatch()
    const [filter,setFilter] = useState<string>('no filter')

    const cardClickHandler = useCallback((pokemon:IPokemon) => {
        dispatch(setCurrentPokemon(pokemon))
    },[])

    const clickHandler = useCallback(() => {
        dispatch(getPokemons(pokemons.next))
    }, [pokemons.next])

    const pokemonsArray = useMemo(() => {
        if (filter === 'no filter' || null){
            return pokemons.results
        }
        else{
            return pokemons.results.filter(pokemon =>
                pokemon.types.some(p => p.type.name === filter))
        }
    }, [filter, pokemons.results])

    return (
        <div className={styles.list}>
            <div className={styles.select_div}>
                <h2>Filter by: </h2>
                <Select onChange={setFilter}/>
            </div>
            {pokemonsArray.map((pokemon) => <PokemonCard key={pokemon.name}
                                                            onClick={() => cardClickHandler(pokemon)}
                                                            pokemon={pokemon}/>)}
            <Button onClick={clickHandler} children={'Load more'}/>
        </div>
    );
};

export default List;