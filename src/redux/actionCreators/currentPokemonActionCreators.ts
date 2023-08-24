import {AppDispatch} from "../store";
import {IPokemon} from "../../axios/types";
import {currentPokemonSlice} from "../reducers/currentPokemonSlice";

export const setCurrentPokemon = (pokemon: IPokemon) =>
    (dispatch: AppDispatch) => {
    dispatch(currentPokemonSlice.actions.setCurrentPokemon(pokemon!))
}