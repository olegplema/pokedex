import {ITypeResponse} from "../axios/types";

export function typesToString(types: ITypeResponse[]) {
    return types.map(t => t.type.name).join(' ')
}