import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import ItemCart from './ItemCart';
import {Link} from 'react-router-dom';

const Cart = () => {
	const {cartItems, clear, price, total} = useContext(CartContext);

	return (
		<div className="text-center">
			<div>
				{
					cartItems.length === 0 ? (
						<div>
							<Link to={'/'}>
								<h5 className="my-5">El carrito se encuentra vacio, volver a la pagina principal</h5>
							</Link>
						</div>
					) : (
						<div className="container">
							<Link to={'/'}><span className="d-flex align-items-start"><i class="fas fa-arrow-left fa-2x"></i></span></Link>
							<div>
								{cartItems && cartItems.map((item, index) => (
									<ItemCart key={'cart' + index} {...item} />
								))}
							</div>
							<div>
								<div>
									<h3>Cantidad de items: {total}</h3>
									<div>
										<h3>Total: {price}</h3>
									</div>
								</div>
								<div>
									<button className="btn btn-primary mx-1" onClick={() => alert(`compraste ${total} items`)}>Comprar</button>
									<button className="btn btn-primary mx-1" onClick={() => clear()}>LimpiarCarrito</button>
								</div>
							</div>
						</div>
					)}
			</div>
		</div>
	);
};

export default Cart;
