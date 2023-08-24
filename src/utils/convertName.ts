import {capitalizeFirstLetter} from "./capitalFirstLetter";


export function convertName(name:string) {
    const arr = name.split('-')
    return arr.map(w => capitalizeFirstLetter(w)).join(' ')
}