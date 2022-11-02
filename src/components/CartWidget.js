import React from 'react'
import { useCart } from './context/CartContext'
import ItemCard from './ItemCard'


const CartWidget = () => {

  const { productos, clearCart } = useCart()
  
   
 
  return (
    <div>
      <div>Carrito</div>
      {productos.map( p => <ItemCard key={p.id} {...p}/>)}{/* { productos.map( ( p, i ) => <li key={i}>{p.name} : {p.price}</li> ) } */}
      <div>
      <button onClick={ clearCart } className="btn m-5">Limpiar carrito</button>
      <button className='btn m-5' >Pagar</button>
      </div>
      <button onClick={ clearCart } className="btn m-5">Limpiar carrito</button>
      <button className='btn m-5' >Pagar</button>
         
    </div> 
  ) 
}

export default CartWidget

