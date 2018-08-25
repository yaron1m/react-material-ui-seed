import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import userInfoReducer from "./user-info/Reducer";

const combinedReducers = combineReducers({
    userInfo: userInfoReducer
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