import * as actitonTypes from "../actions/actionTypes";
import initialState from "../states/initialState";

export default function changeAction(state=initialState.currentCategory, action)
{
    switch (action.type){
        case actitonTypes.CHANGE_CATEGORY:
            return action.payload;

        default:
            return state;
    }


}