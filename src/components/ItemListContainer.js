import React from 'react'

function Productos(props){
    return <h1 className="text-center my-3">{props.bienvenida}</h1>
}


function ItemListContainer() {
    const texto = "Productos";
    return (
        <div>
            <Productos bienvenida={texto}/>
        </div>
    )
}

/*
const Texto = <h1 className="text-center my-3">Productos</h1>

function ItemListContainer() {
    return (Texto)
} */

export default ItemListContainer;
