import React from "react";
import "./Card.css"

const Card = ({ cardImg, cardClassName }) => {
    return (
        <div id='card-display'>
            <img id='cardOnTable' className={cardClassName} src={ cardImg } />
        </div>
    )
}

export default Card