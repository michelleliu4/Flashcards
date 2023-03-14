import './App.css';
import {useState} from "react";

import Card from "../components/Card";
import { title, subtitle, cardList } from "../components/CardList";

/* Random number from 0 to 1 less than max */
function random(max) { 
  return Math.floor(Math.random() * (max))
}

const App = () => {
  const [correct, setCorrect] = useState(false);
  const [answer, setAnswer] = useState({value: "", correct: "none"});

  const [count, setCount] = useState(0);

  /* Go through cards random */
  const updateCount = () => {
    setCount(random(cardList.length))
  }

  const handleChange = (e) => {
    e.preventDefault();
    setAnswer({value: e.target.value});
  }

  const handleOnSubmit = () => {
    if (answer.value === cardList[count].answer) {
      setCorrect("correct");
    }
    else {
      setCorrect("wrong");
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

      <form onSubmit={handleOnSubmit}>
        <label>
          Answer:
          <input id={correct} type="text" className="a" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" className="action-button" />
      </form>

      <div className="button-container">
        <button className="button" onClick={updateCount}>⬅</button>
        <button className="button" onClick={updateCount}>⮕</button>
      </div>
    </div>
  )
}

export default App