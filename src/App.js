import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {incrementAsync, asythunker} from "./redux/action";
export const App = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state)
     return (
         <div style={{margin : "0 auto", width : "50%"}}>
             <h1>Number : {selector.reducer.num} </h1>
             {console.log(selector)}

             <div>
                 <button onClick={() => dispatch(incrementAsync())}>Inc</button>
                 <button onClick={() => dispatch(asythunker())} >FetchAsyncData</button>
             </div>
                          <h1>Asynchronous Todo</h1>
             <ul>
                 {selector.asyreducer.data && selector.asyreducer.data.map((data) => {
                     return <li key={data.id}>{ data.title }</li>
                 }) }
             </ul>
         </div>
     )
}