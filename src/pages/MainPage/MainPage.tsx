import React, {FC, useEffect} from 'react';
import styles from './MainPage.module.css';
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {getPokemons} from "../../redux/actionCreators/pokemonListActionCreators";
import CurrentCard from "../../components/CurrentCard/CurrentCard";

const MainPage : FC = () => {

    const dispatch = useAppDispatch()
    const url = useAppSelector(state => state.pokemonList.pokemons.next)

    useEffect(() => {
        dispatch(getPokemons(url!))
    },[])

    return (
        <div>
            <Header/>
            <List/>
            <CurrentCard/>
        </div>
    );
};

export default MainPage;