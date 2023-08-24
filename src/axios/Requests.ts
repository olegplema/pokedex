import {IPokemonsResponse, IPokemonResponse, IPokemonsResponseDefault} from "./types";
import axios from "axios";


export default class Requests{

    static async getPokemons(url: string): Promise<IPokemonsResponseDefault>{
        const response = await axios.get<IPokemonsResponseDefault>(url)
        return response.data
    }

    // static async getTypes(limit: number): Promise<IType[]>{
    //     const response = await axios_instance.get<ITypes>('/type', {
    //         params:{
    //             limit
    //         }
    //     })
    //     console.log(response)
    //     return response.data.results
    // }
    //
    // static async getTypeInfo(url: string){
    //     const response = await axios.get<IType>(url)
    //     console.log(response.data)
    //     return response.data
    // }

    static async getPokemonInfo(url: string): Promise<IPokemonResponse> {
        const response = await axios.get<IPokemonResponse>(url)
        return response.data
    }
}