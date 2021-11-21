import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import cover3 from "../../images/cover3.jpeg";
import cover1 from "../../images/cover1.jpeg";
import cover2 from "../../images/cover2.jpeg";
import { color } from '@mui/system';

export class CarouselCover extends Component {
    render() {
        return (
            <div className="cover">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={cover3}
                            alt="First slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <b><h3 style={{color:"#FFF"}}>Trouver la location la plus convenable et les collocataires les plus adequats.</h3></b>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={cover2}
                            alt="Second slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <b><h3 style={{color:"#FFF"}}>Trouver la location la plus convenable et les collocataires les plus adequats.</h3></b>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={cover1}
                            alt="Third slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <b><h3 style={{color:"#FFF"}}>Trouver la location la plus convenable et les collocataires les plus adequats.</h3></b>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
            </div>
        )
    }
}

export default CarouselCover;
