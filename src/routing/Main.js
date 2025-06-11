import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import Nopage from "./Nopage"
import img1 from "./car.jpg"  
import Productdata from "./Productdata"

// import img1 from "../logo512.png"  
// for src folder/
// import img1 from "./img2.png" for in routing folder

function Main(){
    const P=[
        {id:"001",name:"Product1",image:img1,price:"5000"},
        {id:"002",name:"Product2",image:img1,price:"4200"},
        {id:"003",name:"Product3",image:img1,price:"2400"},
        {id:"004",name:"Product4",image:img1,price:"2500"}
    ]
    return(
        <div>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/Product">Product</Link> </li>
                <li> <Link to="/Productdata">Product Data</Link> </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="/Productdata" element={<Productdata data={P}/>} />
                <Route path="*" element={<Nopage/>}/>

            </Routes>
        </Router>
        </div>
    )
}export default Main