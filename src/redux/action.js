import {  INC } from "./constants"

const incAct = () => {
    return {
        type: INC,
        payload : 1
     }
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(incAct());
    }, 3000);
  };
}

export default incrementAsync;