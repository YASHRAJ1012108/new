function Child(props){
    // {name,age}=props and direct {name}
    return(
        <>
        <ul>
        <li>{props.name}</li> 
        <li>{props.age}</li> 
        </ul>
        </>
    )
}export default Child;