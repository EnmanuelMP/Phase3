import React from "react";

function CarouselItem () {

    return (

        <div className="carousel-item">
        
            <img className="carousel-item__img carousel-item__img-expanded"
                src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-1097456.jpg&fm=jpg"
                alt="Video" />

            <img className="carousel-item__img"
                src="https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg?cs=srgb&dl=pexels-josh-hild-2854693.jpg&fm=jpg"
                alt="Video" />

            <div className="carousel-item__details">


                <div>


                    <img src="../assets/Play-Icon.png" alt="play" width="30" />
                    <img src="../assets/plus-Icon.png" alt="add" width="30" />


                </div>
                
                <p className="carousel-item__title">Title</p>
                <p className="carousel-item__subtitle">Year-Gender-Time</p>


            </div>


        </div>

    );


} 

export { CarouselItem };