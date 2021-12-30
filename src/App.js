import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
          <Routes>
          <Route exact path="/" element = {<ItemListContainer />} ></Route>
          <Route exact path="/category/:id" element = {<ItemListContainer />} ></Route>
          <Route exact path="/item/:id" element = {<ItemDetailContainer />} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

