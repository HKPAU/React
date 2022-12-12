import * as actionTypes from "../actions/actionTypes"

const counterReducer = (state=0, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNT:
            newState = state + action.payload;
            return newState;

        case actionTypes.DECREASE_COUNT:
            newState = state - action.payload;
            return newState;

        case actionTypes.INCREASE_DOUBLE_COUNT:
            newState = state + action.payload;
            return newState;

        default:
            return state;
    }
}

export default counterReducer;