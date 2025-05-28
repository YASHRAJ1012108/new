function Map1(){
    var arr=[10,5,3,7,4,2,6,7]
    var ch=['a','b','c','d','e']
    // according to array length give array but filter accord condtion give array of element and return and tag not apply in filter
    // v.touppercase()
    return(
        <>
        {
        // if dont give key-->react-dom-client.development.js:24027  Each child in a list should have a unique "key" prop.
        arr.map((v,i)=>{
        return <h3 key={i} >{i} {5}*{v}={v*5}</h3>
        
            })
        }

        </>
    )
}export default Map1;