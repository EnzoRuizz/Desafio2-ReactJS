import React from 'react'
import Item from './Item';

function ItemList({items}) {
    return (
        <div className="text-center d-flex justify-content-center">
        		{
			        items.map((item, index) => (<Item key={'itemlist' + index} {...item} />))
		        }
        </div>
    )
}

export default ItemList

