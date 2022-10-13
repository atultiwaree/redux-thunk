import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import incrementAsync from "./redux/action";
export const App = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state)

     return (
         <div style={{margin : "0 auto", width : "50%"}}>
             <h1>Number : {selector.num} </h1>
             <div>
                 <button onClick={() => dispatch(incrementAsync())}>Inc</button>
             </div>
         </div>
     )
}