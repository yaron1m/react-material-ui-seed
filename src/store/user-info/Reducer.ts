import {UPDATE_NAME} from "./ActionTypes";
import {IState} from "../IState";

const initialState = {
    name: null,
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, {
                name: action.payload
            });

        default:
            return state;
    }
}

export function getName(state: IState) {
    return state.userInfo.name;
}