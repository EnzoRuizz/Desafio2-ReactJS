import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import ItemCart from './ItemCart';
import {ProductContext} from '../context/ProductContext';
import {FirebaseClient} from './firebase';
import {Box, Button, Form, FormField, Text, TextInput} from 'grommet';

const Cart = () => {
	const {cartItems, clear, price, total} = useContext(CartContext);
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const {load, setLoad} = useContext(ProductContext);
	const firebase = new FirebaseClient();

	const addOrderDb = async () => {
		if (user) {
			try {
				setLoad(true);
				const idOrder = await firebase.addOrder(cartItems, user, price, total);
				navigate(`/Compra/${idOrder}`);
				setLoad(false);
			} catch (error) {
				console.error('components/CartContainer/getProductFromDbById', error);
			}
		}

		return null;
	};

	return (
		<div className=" my-3 text-center d-flex">
			<div>
				{
					cartItems.length === 0 ? (
						<div className="mx-5">
							<Link to={'/'} style={{textDecoration: 'none', color:'#000000'}}>
								<button className="btn my-5" style={{backgroundColor: '#39841E', color: '#000000', marginLeft: '340px'}}>El carrito se encuentra vacio, volver a la pagina principal</button>
							</Link>
						</div>
					) : (
						<div className="container">
							<Link to={'/'} style={{textDecoration: 'none', color: '#FF922E'}}><span className="d-flex align-items-start"><i className="fas fa-arrow-left fa-2x"></i></span></Link>
							<div>
								{cartItems && cartItems.map((item, index) => (
									<ItemCart key={'cart' + index} {...item} />
								))}
							</div>
							<div>
								<div className='p-2' style={{border: '2px solid black', borderRadius: '25px'}}>
									<h3 className='p-2' style={{border: '2px solid black', borderRadius: '25px'}}>Cantidad de items: {total}</h3>
									<div>
										<h3 className='p-2' style={{border: '2px solid black', borderRadius: '25px'}}>Total: {price}</h3>
									</div>
								</div>
							</div>
				<div className='mx-5 p-2' style={{border: '2px solid black', borderRadius: '25px'}}>
					<Form value={user} onChange={nextValue => setUser(nextValue)} onReset={() => setUser({})} onSubmit={() => addOrderDb()}>
						<div>
							<h2>Ingrese sus datos</h2>
						</div>
						<FormField name="Nombre" htmlFor="text-input-name" label="Nombre">
							<TextInput id="text-input-name" name="name"/>
						</FormField>
						<FormField name="Email" htmlFor="text-input-email" label="Email">
							<TextInput id="text-input-email" name="email"/>
						</FormField>
						{!load && 
						<Box>
							<Button style={{backgroundColor: '#FF922E', border: '2px solid #000000'}} type="submit" label={<Text color="black">Comprar</Text>} primary/>
						</Box>}
					</Form>
				</div>
				</div>
				)}	
			</div>
		</div>
	);
};

export default Cart;
