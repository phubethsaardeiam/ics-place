// import './Style.css'

const Item = (props)=>{
    const {resimg, name} = props
    return (
        <li>{resimg}<h3>{name}</h3></li>
    );
}
export default Item