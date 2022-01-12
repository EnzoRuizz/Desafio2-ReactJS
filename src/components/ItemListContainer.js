import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Spinner from './Spinner';
import { ProductContext } from '../context/ProductContext';
import {FirebaseClient} from './firebase';

const ItemListContainer = () => {
	const {id: idCategory} = useParams();
	const {products, setProducts, load, setLoad} = useContext(ProductContext);
	const firebase = new FirebaseClient();

	useEffect(() => {
		getProductsFromDb();
	}, [idCategory]);

	const getProductsFromDb = async () => {
		try {
			setLoad(true);
			const value = (idCategory)
				? await firebase.getProductsByCategory(idCategory)
				: await firebase.getProducts();
			setProducts(value);
			setLoad(false);
		} catch (error) {
			console.error('Error getProductsFromDb', error);
		}
	};
    return (
        <div className='text-center my-5 d-flex justify-content-around'>
            {load ? <Spinner /> : <ItemList items={products}/>}
        </div>
    )
}

export default ItemListContainer;