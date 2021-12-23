import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import ProductosData from '../mock/data';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';

const ItemDetailContainer = () => {
	const [items, setItem] = useState(null);
	const {id : idItem} = useParams();
	const navigate = useNavigate();

	useEffect(() => getItemAsyncAwait(), []);

	const getItemAsyncAwait = async () => {
		try {
			const products = await getItem();
			filtroData(products);
		} catch (error) {
			console.log('Error en getItemAsyncAwait', error);
		}
	};

	const getItem = () => new Promise((resolve, reject) => {
		setTimeout(() => ProductosData
			? resolve(ProductosData)
			: reject(new Error('Error en getItem'))
		, 1000);
	});
	
	const filtroData = data => {
		if (idItem && data) {
			const item = data.filter(item => item.id === idItem);
			if (item.length === 1) {
				setItem(item[0]);
			} else {
				navigate('/');
			}
		} else {
			navigate('/');
		}
	};

	return (
		<div className="text-center my-5">
			{items ? <ItemDetail {...items} /> : <Spinner />}
		</div>
	);
};

export default ItemDetailContainer;
