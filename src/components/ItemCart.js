import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';

const ItemCart = product => {
	const {removeItem, removeOneItem, addOneItem} = useContext(CartContext);
	const {item, count} = product;
	const {title, price} = item;

	return (
		<div style={{backgroundColor: '#2c3e50', borderRadius: '25px'}} className="card-body my-2">
			<div>
				<div style={{backgroundColor: '#ffffff', borderRadius: '25px'}}>
					<div>
						<h2>{`Nombre: ${title}`}</h2>
						<h5>{`Cantidad: ${count}`}</h5>
					</div>
					<div>
						<h2>{count * price}</h2>
					</div>
				</div>
			</div>
			<div>
				<button className="btn btn-danger mx-1" onClick={() => addOneItem(item)}>Añadir 1 item</button>
				<button className="btn btn-success mx-1" onClick={() => removeOneItem(item)}>Quitar 1 item</button>
				<button className="btn btn-primary mx-1" onClick={() => removeItem(item)}>Eliminar todos los items</button>
			</div>
		</div>
	);
};

export default ItemCart;
