import React from "react";
import "./Card.css"

const Card = ({ cardImg }) => {
    return (
        <div id='card-display'>
            <img id='cardOnTable' className='' src={ cardImg } />
        </div>
    )
}

export default Card