// npm config set proxy http://192.168.10.252:808
//  npm i react-router-dom
import img1 from "./car.jpg"  

export default function Product(){
    return(
    <div>
        <h1 style={{color:"violet",textAlign:"center"}}>Welcome to Product Page</h1>
        <img src={img1} style={{dispay:"block",margin:"0 auto",height:"500px",width:"800px" }} alt="Home"/>
    </div>
    )
}