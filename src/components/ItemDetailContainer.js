import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import ProductosData from '../mock/data';

const ItemDetailContainer = () => {
	const {id: idItem} = useParams();
	const navigate = useNavigate();
	const [item, setItem] = useState(null);
  
	const getItems = () => {
	  return new Promise ((resolve, reject) => {
		setTimeout(() => {
			ProductosData ? resolve(ProductosData) : reject(new Error());
		}, 500);
	  })
	}
  
	const getItemsAsyncAwait = async () => {
	  try {
		const product = await getItems();
		handleFilterData(product);
	  } catch (error) {
		console.log(error)
	  }
	}
  
	const handleFilterData = data => {
	  if (idItem && data) {
		const filterData = data.filter(item => item.id == idItem);
		if (filterData.length === 1) {
		  setItem(filterData[0]);
		} else {
		  navigate('/');
		}
	  } else {
		navigate('/');
	  }
	}
  
	useEffect(() => {
	  getItemsAsyncAwait();
	}, [])

	return (
		<div className="text-center my-5">
			{item ? <ItemDetail {...item} /> : <Spinner />}
		</div>
	);
};

export default ItemDetailContainer;
