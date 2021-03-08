import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from './actionTypes';

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
}