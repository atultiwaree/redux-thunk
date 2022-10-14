import {  INC } from "./constants"
import axios from "axios";
const incAct = () => {
    return {
        type: INC,
        payload : 1
     }
}

const asyAct = (data) => {
    return {
        type: 'ASY',
        data
     }
}

export function incrementAsync() {
    return dispatch => {
      console.log('Inc act called')
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
        
      dispatch(incAct());
    }, 1000);
  };
}


export function asythunker() {
    console.log('fetch called');
    
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            dispatch(asyAct(response.data))
        })
            .catch((error) =>{
            console.log(error);
            
        })
     }
}

