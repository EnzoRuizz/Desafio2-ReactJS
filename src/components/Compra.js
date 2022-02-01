import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const ThankYouContainer = () => {
	const {id: idOrder} = useParams();
    const navigate = useNavigate();
	return (
        <div className="text-center">
            <h1 className="my-5">Gracias por su compra</h1>
            <h2 className="my-5">Su compra fue registrada con exito</h2>
            <h2 className="my-5">Su numero de orden es: <b>{idOrder}</b></h2>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Regresar a la pagina principal</button>
        </div>
	);
};

export default ThankYouContainer;
