// Información breve de un producto
import React from 'react';

function Item({id, title , price , pictureUrl}) {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }
    return(
        <div className="m-5">
            <div className="card p-2" style={{backgroundColor:"#dfe6e9", width: "18rem"}}>
                <h2 className="card-title">{title}</h2>
                <img src={pictureUrl} className="card-img-top" alt="lorem" />
                <div className="card-body">
                    <p className="card-text">${price}</p>
                    <h5 className="card-text">id: {id}</h5>
                    <button className="btn btn-primary">Ver detalles del producto</button>
                </div>
            </div>
        </div>
    )    
}

export default Item