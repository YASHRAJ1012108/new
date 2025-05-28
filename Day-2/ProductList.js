import Child3 from "./Child3"

function Productlist(){
    const p=[
        {title:"Product1",id:1,Price:"300",rating:4.5,image:"logo192.png"},
        {title:"Product2",id:2,Price:"400",rating:8.5,image:"logo192.png"},
        {title:"Product3",id:3,Price:"500",rating:0.5,image:"logo192.png"},
        {title:"Product4",id:4,Price:"600",rating:9.5,image:"logo192.png"}
    ]
    return(<>
        <Child3 data={p}/>
    </>
    )
}