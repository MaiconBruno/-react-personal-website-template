import React from 'react';
import {Button,Navbar,Nav} from 'react-bootstrap';
import {Menubutton,Navp,Spantext,NavT} from './heade_styles';
import Logo from '../../img/logo_white.png';
function Heade() {
    return (
        <Navp className="d-flex main-header justify-content-center align-items-center"  expand="lg">
            <Navbar.Brand href="#inicio"><img src={Logo} width="330px" height="80px"/></Navbar.Brand>
            <Navbar.Toggle  style={{backgroundColor:'white',}} aria-controls="basic-navbar-nav" />
            <Navp.Collapse id="basic-navbar-nav">
            <NavT className="mr-auto col-md-9 justify-content-end align-items-center">
                    <Nav.Link  href="#inicio"><Spantext>INICIO</Spantext></Nav.Link>
                    <Nav.Link  href="#servico"><Spantext>SERVIÇOS</Spantext></Nav.Link>
                    <Nav.Link  href="#projetos"><Spantext>PROJETOS</Spantext></Nav.Link>
                    <Nav.Link  href="#blog"><Spantext>BLOG</Spantext></Nav.Link>
             </NavT>
             <NavT className="mr-auto col-md-2  justify-content-end align-items-center">
                    <Menubutton variant="outline-light"  href="#contato">CONTATO</Menubutton>
             </NavT>
            </Navp.Collapse>
        </Navp>
    );
}


export default Heade;