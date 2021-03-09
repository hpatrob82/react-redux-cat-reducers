import { ACTION_EAT, ACTION_NAP, ACTION_PLAY, ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

export function activity(state, action) {
    switch (action.type) {
        case ACTION_EAT:
            return {
                activity: 'eating'
            }
        case ACTION_NAP:
            return {
                activity: 'napping'
            }
        case ACTION_PLAY:
            return {
                activity: 'playing'
            }
        case ACTION_SET_NAME:
            return {
                name: state.name + action.payload,
            }
        case ACTION_SET_ACTIVITY:
            return {
                activity: state.activity + action.payload
            }
        default:
            return state;
    }
}