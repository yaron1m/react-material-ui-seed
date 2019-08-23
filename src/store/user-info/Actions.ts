import {UPDATE_NAME} from "./ActionTypes";

export function updateName(newName: string){
    return {
        type: UPDATE_NAME,
        payload: newName
    }
}