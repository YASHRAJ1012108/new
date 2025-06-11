import axios from "axios"
import { useState, useEffect } from "react"
function A2(){
    const[joke,setjoke]=useState("");
    function fetchjoke(){
        axios
        .get("https://apipheny.io/free-api")
        .then((res)=>{setjoke(res.data)})
        .catch((e)=>console.log(e))

    }
    useEffect(fetchjoke,[])
    return(
        <>
        <h1>{joke.setup}</h1>
        <h3>{joke.punchline}</h3>
        <button onClick={fetchjoke}>Get Joke</button>
        </>
    )












} export default A2

