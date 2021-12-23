import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import ProductosData from '../mock/data';
import Spinner from './Spinner';

const ItemListContainer = () => {
	const {id: idCategory} = useParams();
	const [items, setItems] = useState(null);

	useEffect(() => getItemsAsyncAwait(), [idCategory]);


	const getItems = () => new Promise((resolve, reject) => {
		setTimeout(() => ProductosData
			? resolve(ProductosData)
			: reject(new Error('getItems Error'))	
		, 1000);
	});

	const getItemsAsyncAwait = async () => {
		try {
			const products = await getItems();
			setItems(filtroData(products));
		} catch (error) {
			console.error('Error en getItemsAsyncAwait', error);
		}
	};

	const filtroData = data => (idCategory && data)
		? data.filter(item => item.category === idCategory)
		: data;

    return (
        <div className='text-center my-5 d-flex justify-content-around'>
            {items ? <ItemList items={items}/> : <Spinner></Spinner>}
        </div>
    )
}

export default ItemListContainer;