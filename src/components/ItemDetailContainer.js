import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import ProductosData from './data';


const ItemDetailContainer = () => {
	const [items, setItem] = useState(null);

	useEffect(() => getItemAsyncAwait(), []);

	const getItem = () => new Promise((resolve, reject) => {
		setTimeout(() => ProductosData[0]
			? resolve(ProductosData[0])
			: reject(new Error('getItems Error'))
		, 2000);
	});

	const getItemAsyncAwait = async () => {
		try {
			const product = await getItem();
			setItem(product);
		} catch (error) {
			console.log('Error', error);
		}
	};

	return (
		<div className="text-center">
			{items ? <ItemDetail {...items} /> : <span className='h3'>Cargando...</span>}
		</div>
	);
};

export default ItemDetailContainer;
