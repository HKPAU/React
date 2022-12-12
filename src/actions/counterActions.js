import * as actionType from "./actionTypes";

export const increaseCount = () => ({
    type: actionType.INCREASE_COUNT,
    payload: 1
});

export const decreaseCounter = () => ({
    type: actionType.DECREASE_COUNT,
    payload: 1
});

export const increaseDoubleCounter = () => ({
   type: actionType.INCREASE_DOUBLE_COUNT,
   payload: 2 
});