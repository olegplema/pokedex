import { configureStore } from '@reduxjs/toolkit'
import pokemonsListSlice from "./reducers/pokemonsListSlice";
import currentPokemonSlice from "./reducers/currentPokemonSlice";

const store = configureStore({
    reducer: {
        pokemonList: pokemonsListSlice,
        currentPokemon: currentPokemonSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store