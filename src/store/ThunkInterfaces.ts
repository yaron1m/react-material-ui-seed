import {IState} from './IState';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

export type IDispatch = ThunkDispatch<IState, void, AnyAction>;
export type IGetState = () => IState;