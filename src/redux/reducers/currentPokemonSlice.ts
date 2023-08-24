import {IPokemon} from "../../axios/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ICurrentPokemonStare {
    pokemon: IPokemon|null
}

const initialState : ICurrentPokemonStare = {
    pokemon:null
}

export const currentPokemonSlice = createSlice({
    name:'current',
    initialState,
    reducers:{
        setCurrentPokemon(state, action: PayloadAction<IPokemon|null>){
            state.pokemon = action.payload
        }
    }
})

export default currentPokemonSlice.reducer