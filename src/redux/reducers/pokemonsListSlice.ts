import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPokemonsResponse} from "../../axios/types";

export interface IPokemonsListsState {
    pokemons: IPokemonsResponse
    error: string|null
    isLoading: boolean
}

const initialState: IPokemonsListsState = {
    pokemons: {next: 'https://pokeapi.co/api/v2/pokemon/?limit=12', results: []},
    error:null,
    isLoading:false
}

export const pokemonsListSlice = createSlice({
    name:'pokemons',
    initialState,
    reducers:{
        setError(state, action:PayloadAction<string|null>){
            state.error = action.payload
        },
        addPokemons(state, action:PayloadAction<IPokemonsResponse>){
            state.pokemons.next = action.payload.next
            state.pokemons.results.push(...action.payload.results)
        },
        setIsLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload
        }
    }
})

export default pokemonsListSlice.reducer