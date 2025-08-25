import React from "react";
import card0 from './assets/card-0.jpg'
import "./Deck.css"

const Deck = () => {
    return (
        <div id='card-display'>
            <img id='cardOnTable' className='' src={ card0 } />
        </div>
    )
}

export default Deck