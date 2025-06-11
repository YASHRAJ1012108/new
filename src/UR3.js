import {useReducer} from "react"
import P2 from "./P2.jfif"
import P3 from "./P3.jfif"
const obj={image:P2,bgcolor:"lime"}
function reducer(state,action){
    if (action.type==="display"){
        if(state.image===P2)
        {
            return {image:P3,bgcolor:"red"}
        }
        else
        {
            return {image:P2,bgcolor:"lime"}
        }
    }
    return state;
}
function UR3(){
    const[state,dispatch]=useReducer(reducer,obj)

    return(<>
        <button onClick={()=>{dispatch({type:"display"})}} style={{color:"white",backgroundColor:"Green",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>Change Image and BGcolor</button>
        <img src={state.image} height="300" width="300"/>
        <div style={{height:"500px",width:"500px",padding:"50px",backgroundColor:state.bgcolor}}>Test</div>
    </>)
}
export default UR3