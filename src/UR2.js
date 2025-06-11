import {useReducer} from "react"
function reducer(state,action){
    if (action.type==="increment"){
        return state+1
    }
    else if (action.type==="decrement"){
        return state-1
    }
     else if (action.type==="reset"){
        return 0
    }
    else{
        return state
    }
}
function UR2(){
    const[state,dispatch]=useReducer(reducer,0)

    return(<>
    <h1 style={{textAlign:"center",color:"black"}}>{state}</h1>
        <button onClick={()=>{dispatch({type:"increment"})}} style={{color:"white",backgroundColor:"Green",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>Increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}} style={{color:"white",backgroundColor:"red",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>Decrement</button>
        <button onClick={()=>{dispatch({type:"reset"})}} style={{color:"white",backgroundColor:"black",height:"30px",width:"70px",borderRadius:"5px"}}>Reset</button>
    </>)
}
export default UR2