import {SAMPLE_ACTION_TYPE} from "./ActionTypes";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE:
            return Object.assign({}, action.payload);

        default:
            return state;
    }
}