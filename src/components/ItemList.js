import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className="container row row-cols-3 m-2">
        		{
			        items.map((item, index) => (<Item key={'itemlist' + index} {...item} />))
		        }
        </div>
    )
}

export default ItemList