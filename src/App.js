import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {CartContextProvider} from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
            <Routes>
            <Route exact path="/" element = {<ItemListContainer />} ></Route>
            <Route exact path="/category/:id" element = {<ItemListContainer />} ></Route>
            <Route exact path="/item/:id" element = {<ItemDetailContainer />} ></Route>
            <Route exact path="/cart" element = {<Cart />}></Route>
          </Routes> 
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App

