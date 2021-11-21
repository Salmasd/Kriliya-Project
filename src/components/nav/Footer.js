import React, { Component } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';

export class Footer extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="light" variant="dark" expand="lg">
                    <Container>
                        <Nav.Link> Copyright &copy; 2021-2022.
                        All rights reserved.
                        </Nav.Link>
                        <Nav.Link>Made <b> with <span>&#10084;</span> </b></Nav.Link>
    
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer;
