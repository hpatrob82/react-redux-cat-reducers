import { ACTION_EAT, ACTION_NAP, ACTION_PLAY, ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

export function actionEat() {
    return {
        type: ACTION_EAT
    }
};
export function actionNap() {
    return {
        type: ACTION_NAP
    }
};
export function actionPlay() {
    return {
        type: ACTION_PLAY
    }
};
export function actionSetName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name
        }
    }
};
export function actionSetActivity(activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity
        }
    }
};