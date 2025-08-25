import { Component, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { reset, draw, shuffle } from './Deck'
import card0 from './assets/card-0.jpg'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      cardImg: card0
    }
  }

  onClick(event) {
    console.log(`Hola!`);
  }

  render() {
    return (
      <>
        <div className='grid-container'>
          <div></div>
          <Card cardImg={ this.state.cardImg } />
          <div></div>
          <div></div>
          <Navbar click={this.onClick}/>
          <div></div>
        </div>
      </>
    );
  }
}

export default App
