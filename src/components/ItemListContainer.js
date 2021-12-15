import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import ProductosData from './data';

function ItemListContainer(){
    const [items, setProductos] = useState(null)

    useEffect(() => {
      console.log("inicio")
      setProductosPromise()
    }, [])

  const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => ProductosData
          ? resolve(ProductosData)
          : reject(new Error('getProducts Error'))   
        , 2000)        
      })
  }

  const setProductosPromise = () => {
        getProducts()
          .then(
            response => {
              console.log(`Resuelto`, response)
              setProductos(response)
            },
            error => console.log(`Rechazo`, error)
        )
        .catch(error => console.log(`Error`, error))
  }

    return (
        <div className='text-center'>
            <ItemCount stock="10" initial="1" onAdd={contador => console.log(`Agregaste ${contador} productos al carrito`)}/>
            {/* Mostrar productos*/}
            {items ? <ItemList items={items}/> : <span className='h3'>Cargando...</span>}
        </div>
    )
}

export default ItemListContainer;