import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';

const ItemCart = product => {
	const {removeItem, removeOneItem, addOneItem} = useContext(CartContext);
	const {item, count} = product;
	const {title, price} = item;

	return (
		<div style={{backgroundColor: '#000000', borderRadius: '25px'}} className="card-body my-2">
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
				<button className="btn mx-1" style={{backgroundColor: '#39841E'}} onClick={() => addOneItem(item)}>Añadir 1 item</button>
				<button className="btn mx-1" style={{backgroundColor: '#F8F8F8'}} onClick={() => removeOneItem(item)}>Quitar 1 item</button>
				<button className="btn mx-1" style={{backgroundColor: '#FF922E'}} onClick={() => removeItem(item)}>Eliminar todos los items</button>
			</div>
		</div>
	);
};

export default ItemCart;
