function Print(){
    return(
        <>
        <h1 style={{color:"blue",backgroundColor:"yellow"}}>Current Date</h1>
        </>
    )
}
export default function Task2(){
    return(
        <>
        <Print/>
        {/* import {Print} from "/Task1" if u dont take print above */ }
        {/* import Task2  from "/Task1" */}
        <h2> Date:{new Date().toLocaleDateString()}</h2>
        <h2>Time :{new Date().toLocaleTimeString()}</h2>
        </>
    )
};
// export {print}