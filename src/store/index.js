import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import sampleReducer from "./sample-reducer/Reducer";

const combinedReducers = combineReducers({
    sampleReducer: sampleReducer
});

const store = createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        )
    )
);

export default store;