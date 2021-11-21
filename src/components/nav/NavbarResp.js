import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import image from "../../images/logo.png";

export class NavbarResp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img 
                                src={image}
                                width="80"
                                height="60"
                                className="d-inline-block align-top"
                                alt="Krilya logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/user/addannonce">Ajouter Annonce</Nav.Link>
                                <Nav.Link href="/user/mesannonces" >Mes annonces</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/login" >Se connecter</Nav.Link>
                                <Nav.Link href="/register" >S'inscrire</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarResp ;
