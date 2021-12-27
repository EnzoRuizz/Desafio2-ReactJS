import React, {useState} from 'react';
import ItemCount from './ItemCount';
import {useNavigate} from 'react-router-dom'

const ItemDetail = ({id, title , price , pictureUrl, description, category}) => {
    const [counter, setCounter] = useState(null);
    const navigate = useNavigate();
    return(
        <div className="card m-5 d-flex justify-content-center container p-3" data-id={id} style={{backgroundColor:"#dfe6e9"}}>
        <div className="row g-0 p-3">
          <div className="col-md-4">
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <p className='card-text'>{category}</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-text">ID: {id}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text h3">${price}</p>
              {/* Counter */}
              {counter ? (
							<div align="center" pad="small">
								<button className="btn btn-primary" onClick={() => navigate('/cart')}>Ir Carrito</button>
							</div>
						  ) :	(
							<div>
								<ItemCount stock="10" initial="1" onAdd={value => setCounter(value)}/>
							</div>
						)
				      }
            </div>
          </div> 
        </div>
      </div>
    )    
}

export default ItemDetail;