import { useState, useCallback } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import card0 from './assets/card-0.jpg'
import cardEmpty from './assets/card-empty.jpg'
import './App.css'
import { Deck, shuffleDeck } from './Deck.js'

function App() {
  const [cardImg, setCardImg] = useState(card0);
  const [deck, setDeck] = useState(() => shuffleDeck(Deck));
  const [cardClassName, setCardClassName] = useState('');

  const shufBtn = useCallback(() => {
    setDeck(() => shuffleDeck(Deck));
    setCardImg(card0);
    setCardClassName('');
  }, []);

  const drawBtn = useCallback(() => {
    setDeck(prev => {
      if (prev.length === 0) {
        setCardImg(cardEmpty);
        setCardClassName('empty');
        return prev;
      }
      const nextDeck = prev.slice(0, -1);
      const nextCard = prev[prev.length - 1];
      setCardImg(nextCard);
      setCardClassName('');
      return nextDeck;
    });
  }, []);

  return (
    <>
      <div className='grid-container'>
        <div></div>
        <Card cardImg={cardImg} cardClassName={cardClassName} />
        <div></div>
        <div></div>
        <Navbar shuffle={shufBtn} draw={drawBtn} />
        <div></div>
      </div>
    </>
  );
}

export default App;