export interface IPokemonDefault {
    name:string
    url: string
}

export interface IPokemonResponse {
    id:number
    types: ITypeResponse[]
    sprites:ISprite
    height:number
    weight:number
    stats: IStat[]
}

export interface IPokemon extends IPokemonDefault, IPokemonResponse {}

export interface IPokemonsResponseDefault {
    next: string
    results: IPokemonDefault[]
}

export interface IPokemonsResponse {
    next: string
    results: IPokemon[]
}

export interface IType {
    name:string
    url: string
    color:string
}

export interface ITypeResponse{
    slot:number
    type:IType
}

export interface IStat {
    base_stat:number
    stat:IStatName
}

export interface IStatName {
    name:string
}

export interface ISprite{
    front_default:string
}