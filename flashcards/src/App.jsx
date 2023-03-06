import './App.css';
import {useState} from "react";

import Card from "../components/Card"
import { title, subtitle, cardList } from "../components/CardList"


/* Random number from 0 to 1 less than max */
function random(max) { 
  return Math.floor(Math.random() * (max))
}

const App = () => {
  const [count, setCount] = useState(0);

  /* Go through cards random */
  const updateCount = () => {
    setCount(random(cardList.length))
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>Number of Flashcards: {cardList.length}</h4>
      </div>
      <Card props={cardList[count]}/>
      <div className="button-container">
        <button className="button" onClick={updateCount}>⮕</button>
      </div>
    </div>
  )
}

export default App