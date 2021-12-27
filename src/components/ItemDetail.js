import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({id, title , price , pictureUrl, description, category}) => {
    return(
        <div className="card m-5 d-flex justify-content-center" data-id={id} style={{backgroundColor:"#dfe6e9"}}>
        <div className="row g-0 p-3">
          <div className="col-md-4">
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <p className='card-text'>{category}</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-text">ID: {id}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text h3">${price}</p>
              <ItemCount stock="10" initial="1" onAdd={contador => console.log(`Agregaste ${contador} productos al carrito`)}/>
            </div>
          </div> 
        </div>
      </div>
    )    
}

export default ItemDetail;