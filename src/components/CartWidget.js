import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';

const CartWidget = () => {
	const {total} = useContext(CartContext);

	return total !== 0 && (
		<Link to="/cart">
				<div>
                <i className="fas fa-shopping-cart fa-2x"></i>
					<span>
						({total})
					</span>
				</div>
        </Link>
	);
};

export default CartWidget;

