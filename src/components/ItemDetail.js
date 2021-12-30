import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = item => {
	const {id, title, description, category, pictureUrl, price, stock} = item;
	const {addItem, cartItems} = useContext(CartContext);
	const navigate = useNavigate();
	const [counter, setCounter] = useState(null);

	console.log('cartItems', cartItems);

	const handleOnAdd = count => {
		setCounter(count);
		addItem(item, count);
	};

  return(
    <div className="card m-5 d-flex justify-content-center container p-3" data-id={id} style={{backgroundColor:"#dfe6e9"}}>
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
          <p className="card-text">{stock}</p>
          {/* Counter */}
          {counter ? (
          <div align="center" pad="small">
            <button className="btn btn-primary" onClick={() => navigate('/cart')}>Ir Carrito</button>
          </div>
          ) :	(
          <div>
            <ItemCount stock="10" onAdd={handleOnAdd}/>
          </div>
        )
          }
        </div>
      </div> 
    </div>
  </div>
)    
}

export default ItemDetail;