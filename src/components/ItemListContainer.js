import { collection, getFirestore, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getProductos()
    }, [])

    const getProductos = () => {
      const db = getFirestore()
      const  productosCollection = collection( db, 'productos')
      getDocs( productosCollection ).then(resp => {
        const productosData = resp.docs.map( d => ({id: d.id, ...d.data()}))
        console.log(productosData);
        setLoading(false)
        setProductos(productosData);
      })  
    }

    

  return ( 
    <div>
    <div className='m-10'>MI TIENDA</div>
    {loading ? <h1> Cargando...</h1>
    :
    productos.map( p => <ItemCard key={p.id} {...p}/>)}
    
    
  </div>
  )
} 

export default ItemListContainer
 

