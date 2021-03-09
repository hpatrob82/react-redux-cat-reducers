import { createStore } from 'redux';
import { activity } from './reducers';
// import { name } from './reducers'


const defaultState = {
    name: 'Guster',
    activity: 'blep'
};



export const store = createStore(activity, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());