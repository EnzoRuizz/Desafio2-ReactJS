import React from 'react';
import {useNavigate} from 'react-router-dom';

const Item = ({id, title , price , pictureUrl, category}) => {
    const navigate = useNavigate();
    return(
        <div className="my-2" data-id={id}>
            <div className="card p-2 mx-2" style={{backgroundColor:"#F8F8F8", width: "18rem", borderRadius: '25px'}} onClick={() => navigate(`/item/${id}`)}>
                <h2 className="card-title">{title}</h2>
                <img src={pictureUrl} className="card-img-top" alt="lorem" />
                <p className='card-text'>Categoria: {category}</p>
                <div className="card-body">
                    <p className="card-text">${price}</p>
                </div>
            </div>
        </div>
    )    
}

export default Item