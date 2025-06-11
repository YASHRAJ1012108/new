// Useeffect-ti perform sideeffect Useeffect(function,dependencies)
import react from "react";
import { useState,useEffect }  from "react";
function UE1(){
    const[countA,setcountA]=useState(0);
    const[countB,setcountB]=useState(0);
    useEffect(()=>{alert("welcome")},[])
    // []==>countA it redirect function everyclick of countA
    function handlecountA(){setcountA(countA+1)};
    function handlecountB(){setcountB(countB+1)};
    return(
        <>
        <button onClick={handlecountA}>ButtonA{countA}</button>
        <button onClick={handlecountB}>ButtonB{countB}</button>
        </>
    )

}export default UE1
