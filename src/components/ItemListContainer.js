import React from 'react'
import ItemCount from './ItemCount';

function Productos(props){
    return <h1 className="text-center my-3">{props.bienvenida}</h1>
}


function ItemListContainer() {
    const texto = "Productos";
    return (
        <div>
            <Productos bienvenida={texto}/>
            <ItemCount stock="10" initial="1" onAdd={contador => console.log(`Agregaste ${contador} productos al carrito`)}/>
        </div>
    )
}
/* 
const Texto = <h1 className="text-center my-3">Productos</h1>

function ItemListContainer() {
    return (Texto)
} */

export default ItemListContainer;
