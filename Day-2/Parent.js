// in props you must pass all parent data to his child hiercy not diretly last child
import Child from "./Child"
import Child2 from "./Child2"
function Parent(){
    var n="ABC"
    var t={name:"ABC",age:20}
    return(
        <div>
        <Child name="xyz" age="20"/>
        <Child name={n} age="30"/>
        <Child2 data={t}/>
        </div>
    )
}export default Parent;