import axios from "axios"
import { useState, useEffect } from "react"
function Randomimg(){
    const[myimg,setimg]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            axios.get("https://dog.ceo/api/breeds/image/random")
            .then((res)=>{console.log(res.data);
                setimg(res.data)
            })
            .catch((err)=>{console.log(err)})
        },2000)
    },[])
    return (<>
    <img src={myimg.message} alt={myimg.message} height="500" width="500"/>
    </>)
} export default Randomimg

