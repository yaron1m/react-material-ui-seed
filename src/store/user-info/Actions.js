import {UPDATE_NAME} from "./ActionTypes";

export function updateName(newName){
    return {
        type: UPDATE_NAME,
        payload: newName
    }
}