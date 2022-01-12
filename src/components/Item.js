import React from 'react';
import {useNavigate} from 'react-router-dom';

const Item = ({id, title , price , pictureUrl, category}) => {
    const navigate = useNavigate();
    return(
        <div className="my-2" data-id={id}>
            <div className="card p-2" style={{backgroundColor:"#dfe6e9", width: "18rem"}} onClick={() => navigate(`/item/${id}`)}>
                <h2 className="card-title">{title}</h2>
                <img src={pictureUrl} className="card-img-top" alt="lorem" />
                <p className='card-text'>{category}</p>
                <div className="card-body">
                    <p className="card-text">${price}</p>
                    <h5 className="card-text">id: {id}</h5>
                </div>
            </div>
        </div>
    )    
}

export default Item