// npm config set proxy http://192.168.10.252:808
//  npm i react-router-dom
import img1 from "./car.jpg"  
export default function Home(){
    return(
    <div>
        <h1 style={{color:"blue",textAlign:"center"}}>Welcome to home Page</h1>
        <img src={img1} style={{dispay:"block",margin:"0 auto",height:"500px",width:"800px" }} alt="Home"/>
    </div>
    )
}