import React, { Component } from 'react';
import { CardGroup,Card,Col,Row } from 'react-bootstrap';
import axios from 'axios';
import image from "../../images/image.jpeg";
import { Link } from 'react-router-dom';

export class CardsLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            annonces: []
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/annonce/get").then((res) => {
            this.setState({ annonces: res.data });
        });
    }
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                {this.state.annonces.map((annonce) => (
                    <Col key = {annonce.id}>
                    <Card>
                        <Card.Img variant="top" 
                        src={image} 
                        width="160px"
                        height="366px" />
                        <Card.Body>
                        <Card.Title>{annonce.titre}</Card.Title>
                        <Card.Text>
                            {annonce.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link  to={"/annonce/"+annonce.id} className="nav-link" style={{marginLeft:"25%"}}> Consulter l'annonce</Link>
                        </Card.Footer>
                       
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        )
    }
}

export default CardsLayout
