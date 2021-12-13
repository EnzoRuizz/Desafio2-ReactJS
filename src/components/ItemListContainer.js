import React from 'react'
<<<<<<< HEAD
import ItemCount from './ItemCount';
=======
>>>>>>> 44a6751ec40087e96e2f6816c49d53b9e51b0cb4

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
<<<<<<< HEAD
/* 
=======

/*
>>>>>>> 44a6751ec40087e96e2f6816c49d53b9e51b0cb4
const Texto = <h1 className="text-center my-3">Productos</h1>

function ItemListContainer() {
    return (Texto)
} */

export default ItemListContainer;
