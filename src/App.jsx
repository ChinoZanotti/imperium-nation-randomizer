import { Component, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import card0 from './assets/card-0.jpg'
import cardEmpty from './assets/card-empty.png'
import './App.css'
import { Deck, shuffleDeck } from './Deck.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      cardImg: card0,
      deck: shuffleDeck(Deck)
    }
  }

  shufBtn = () => {
    this.setState({ 
      deck: shuffleDeck(Deck),
      cardImg: card0
    })
  }

  drawBtn = () => {
    this.setState(prev => {
      if (prev.deck.length === 0) {
        return { cardImg: cardEmpty };
      }
      const deck = prev.deck.slice();
      const cardImg = deck.pop();
      return { deck, cardImg };
    });
  };

  render() {
    return (
      <>
        <div className='grid-container'>
          <div></div>
          <Card cardImg={ this.state.cardImg } />
          <div></div>
          <div></div>
          <Navbar shuffle={this.shufBtn} draw={this.drawBtn} />
          <div></div>
        </div>
      </>
    );
  }
}

export default App
