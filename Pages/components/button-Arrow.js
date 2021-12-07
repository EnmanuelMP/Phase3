import React from "react";
import './button-Arrow.css'

function ArrowButton ({direction}) {

    return (

        <div className="arrow-container">
            <b className={`Arrow ${direction}`}></b>

        </div>

    );

}

export {ArrowButton};