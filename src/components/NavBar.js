import React from 'react';
import {useNavigate, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './styles/NavBar.css';

const NavBar = () =>  {
    const navigate = useNavigate();
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar" sticky="top">
        <Container>
              <Navbar.Brand onClick = {() => navigate('/')}>
                <img
                  alt="Logo"
                  src="logo192.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{backgroundColor: '#000000', borderRadius: '50px'}}
                />{' '}
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><NavLink to={'/'} className="navLink">Inicio</NavLink></Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item><NavLink to={'/category/tecnologia'} className="navLink">Tecnologia</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={'/category/hogar'} className="navLink">Hogar</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={'/category/juegos-y-juguetes'} className="navLink">Juegos y juguetes</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink to={'/category/libros'} className="navLink">Libros</NavLink></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    )
}

export default NavBar


