import {AppDispatch} from "../store";
import {pokemonsListSlice} from "../reducers/pokemonsListSlice";
import Requests from "../../axios/Requests";
import {IPokemon, IPokemonsResponse} from "../../axios/types";


export const getPokemons = (url: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pokemonsListSlice.actions.setIsLoading(true))
        const pokemons = await Requests.getPokemons(url)
        const promises = pokemons.results.map((p) =>  Requests.getPokemonInfo(p.url))
        const infos = await Promise.all(promises);

        console.log(infos[0])
        const results = pokemons.results.map((p, index):IPokemon => ({
            ...p,
            // image: infos[index].sprites.front_default,
            sprites: infos[index].sprites,
            types: infos[index].types,
            height:infos[index].height,
            weight:infos[index].weight,
            stats:infos[index].stats,
            id:infos[index].id,
        }))

        dispatch(pokemonsListSlice.actions.addPokemons({results, next:pokemons.next}))
    }catch(e) {
        dispatch(pokemonsListSlice.actions.setError('Something went wrong'))
    }finally {
        dispatch(pokemonsListSlice.actions.setIsLoading(false))
    }
}