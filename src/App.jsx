import { useState } from 'react'
import card0 from './assets/card-0.jpg'
import Navbar from './Navbar'
import Deck from './Deck'
import './App.css'

function App() {
  return (
    <>
      <div className='grid-container'>
        <div></div>
        <Deck />
        <div></div>
        <div></div>
        <Navbar />
        <div></div>
      </div>
    </>
  )
}

export default App
