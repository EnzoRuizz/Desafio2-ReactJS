import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import {FirebaseClient} from './firebase';
import {ProductContext} from '../context/ProductContext';

const ItemDetailContainer = () => {
	const {id: idItem} = useParams();
	const navigate = useNavigate();
	const [item, setItem] = useState(null);
	const {setLoad} = useContext(ProductContext);
	const firebase = new FirebaseClient();

	useEffect(() => getProductById(), []);

	const getProductById = async () => {
		try {
			setLoad(true);
			const value = await firebase.getProduct(idItem);
			setLoad(false);
			if (value) {
				setItem(value);
			} else {
				navigate('/');
			}
		} catch (error) {
			navigate('/');
			console.error('Error getProductById', error);
		}
	};

	return (
		<div className="text-center my-5">
			{item ? <ItemDetail {...item} /> : <Spinner />}
		</div>
	);
};

export default ItemDetailContainer;
