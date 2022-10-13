import { INC } from "./constants";

export const reducer = (state = {num : 0}, action) => {
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