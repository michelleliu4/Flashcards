import './App.css';
import {useState} from "react";
import Answer from "../components/Answer"
import Card from "../components/Card";
import { title, subtitle, cardList } from "../components/CardList";

const App = () => {

  const [count, setCount] = useState(0);


  const updateCountUp = () => {
    if (count + 1 < cardList.length) {
      setCount(count + 1);
    }
    else {
      setCount(0);
    }
  }

  const updateCountDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      setCount(cardList.length - 1);
    }
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>Number of Flashcards: {cardList.length}</h4>
      </div>
      <Card props={cardList[count]}/>

      <Answer actualAnswer={cardList[count].answer}/>

      <div className="button-container">
        <button className="button" onClick={updateCountDown}>⬅</button>
        <button className="button" onClick={updateCountUp}>⮕</button>
      </div>
    </div>
  )
}

export default App