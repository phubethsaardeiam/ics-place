import Item from "./Item";
import './Style.css'

const Placelist = ()=>{
    const data = [
        {resimg:"ลิ้งรูปร้าน",name:"ชื่อร้าน"},
        {resimg:"ลิ้งรูปร้าน",name:"ชื่อร้าน"},
        {resimg:"ลิ้งรูปร้าน",name:"ชื่อร้าน"},
        {resimg:"ลิ้งรูปร้าน",name:"ชื่อร้าน"}
    ]
    return (
        <ul className="item">
            {data.map((element)=>{
                return <Item resimg={element.resimg} name={element.name}/>
            })}
        </ul>
    );
}

export default Placelist