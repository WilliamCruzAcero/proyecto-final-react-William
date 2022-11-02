import './App.css';
import NavBar from './components/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemDetail from './components/ItemDetail';
import { CartContextProvider } from './components/context/CartContext';
import 'boxicons'


function App() {
  return ( 
     <CartContextProvider>
       <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
          <Route path='/detail/:id' element={<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>
     </CartContextProvider>
    
  );
}

export default App;
 