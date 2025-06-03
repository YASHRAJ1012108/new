function E1(){
    return(
        
        <>
        <textarea id="ta" onChange={Charcount}/>
        <button onClick={display}>Submit</button>
        <h1 id="count">Character: 0</h1>
        </>
    )
}export default E1

function Charcount(){
    var d1=document.getElementById("ta").value;
    document.getElementById("count").innerHTML="Characters "+d1.length;
}

function display(){
    var d2=document.getElementById("ta").value;
    alert(d2);
}