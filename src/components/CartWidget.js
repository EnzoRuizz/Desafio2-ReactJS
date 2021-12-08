import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/CartWidget.css';

function CartWidget() {
    return (
        <div>
            <Nav.Link>
                <i className="fas fa-shopping-cart fa-2x"></i>
                <span className="cant">0</span>
            </Nav.Link>
        </div>
    )
}

export default CartWidget
