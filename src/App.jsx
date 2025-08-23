import { useState } from 'react'
import card0 from './assets/card-0.jpg'
import Navbar from './Navbar'
import './App.css'

function App() {
  return (
    <>
      <div className='grid-container'>
        <div></div>
        <div id='card-display'>
          <img id='cardOnTable' className='' src={ card0 } />
        </div>
        <div></div>
        <div></div>
        <Navbar />
        <div></div>
      </div>
    </>
  )
}

export default App
