import React from "react";
import { CarouselItem } from './carousel-item'
import '../Styles/Carousel.css'
import { ArrowButton } from "./button-Arrow";

function Carousel ( {section} ) {

    let carouselNum = [];

    for (let i = 0; i < 20; i++) {
        carouselNum.push(<CarouselItem />)
    
    }

    return (

        <section className="carousel">

            <div className="carousel-category">

                <h2 className="carousel-category__title">
                    {section}
                </h2>

                <div className="carousel-category__list">
                    <ArrowButton direction="left" />
                    {carouselNum}
                    <ArrowButton direction="right" />
                </div>

                
            </div>

        </section>

    );


} 

export { Carousel };