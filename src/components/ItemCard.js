import { Link } from "react-router-dom"


const ItemCard = ({id, name, price, image}) => {
  return (
    <Link to={`/detail/${id}`}  >
          <div>{name}</div>
          <div>$ {price}</div>
          <img src={image} width={200}/>
    </Link>
  )
}

export default ItemCard 