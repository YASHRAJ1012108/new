import {useReducer} from "react"
function reducer(state,action){
    return state+action
}
function UR1(){
    const[state,dispatch]=useReducer(reducer,20)
    return(<>
    <h1>{state}</h1>
    <button onClick={()=>dispatch(2)}>Add</button>
    </>)
}
export default UR1