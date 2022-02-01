import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Compra from './components/Compra';
import {CartContextProvider} from './context/CartContext';
import {ProductContextProvider} from './context/ProductContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <ProductContextProvider>
            <Routes>
                <Route exact path="/" element = {<ItemListContainer />} ></Route>
                <Route exact path="/category/:id" element = {<ItemListContainer />} ></Route>
                <Route exact path="/item/:id" element = {<ItemDetailContainer />} ></Route>
                <Route exact path="/cart" element = {<Cart />}></Route>
                <Route exact path="/compra/:id" element={<Compra />} />
            </Routes> 
        </ProductContextProvider>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App

