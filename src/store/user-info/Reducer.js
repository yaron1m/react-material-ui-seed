import {UPDATE_NAME} from "./ActionTypes";

const initialState = {
    name: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, {
                name: action.payload
            });

        default:
            return state;
    }
}

export function getName(state) {
    return state.userInfo.name;
}