import { collection, doc, getFirestore, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useCart } from './context/CartContext'
import Count from './count'

const ItemDetail = () => {

  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const { addToCart } = useCart()

  useEffect(() => {
    getProducto()
  
  }, [])

  const getProducto = () => {
    const db = getFirestore()
    const productosCollection = collection(db, 'productos')
    const docRef = doc( productosCollection, id) 
    getDoc( docRef ).then(resp => {
      console.log(resp.data());
      setProducto(resp.data())
    })
    }

    const addHandler = () => { 
      addToCart(producto)
       

    }
  
  return (
    <div>
      <div>{producto.name}</div>
      <div>{producto.price}</div>
      <img src={producto.image} width={200}/>
      <Count/>
      <button onClick={ addHandler } className="btn m-5">Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail