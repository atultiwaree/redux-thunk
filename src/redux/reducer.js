import { INC } from "./constants";
import { combineReducers } from "redux";


 const reducer = (state = {num : 0}, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                num : state.num +  action.payload
            }
        
        default:
            return {...state}
    }
}


const asyreducer = (state = {}, action) => {
    const data = action.data
    if (action.type === 'ASY') {
        return {...state, data}
    } else {
        return {};
    }
}


const rootReducer = combineReducers({reducer, asyreducer})
export default rootReducer;