import { createContext, useContext } from "react";
import useLocalStorage from "../../hooks/UseLocalStore";



const CartContext = createContext({
    productos: [],
    addToCart: ()=>{},
    clearCart: ()=>{},
    count: 0,
    
})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    
    const [productos, setProductos] = useLocalStorage('productos', [])

    const addToCart = (producto) => {
    setProductos(productos => [...productos, producto]) 
    }
    const clearCart = () => {
        setProductos([])    
    }
   
    const context = {
        productos: productos,
        addToCart: addToCart,
        clearCart: clearCart,
        count: productos.length
        
    }
    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export  { useCart, CartContextProvider}