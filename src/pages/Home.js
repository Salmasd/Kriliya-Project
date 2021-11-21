import React from 'react';

import '../App.css';
import CarouselCover from '../components/cards/CarouselCover';
import CardsLayout from '../components/cards/CardsLayout';

function Home () {
    return (
        <div>
            <CarouselCover/>
            <br/>
            <br/>
            <CardsLayout/>
            <br/>
            <br/>
            
        </div>
    )
}

export default Home ;