import {createStore} from 'redux';
import Reducer,{initialState} from './reducer';

export const store = createStore(
    Reducer,
    initialState
)