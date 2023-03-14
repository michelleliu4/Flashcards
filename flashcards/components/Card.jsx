import './Card.css'
import { useState } from 'react';

const Card = ({props}) => {

    const [flip, setFlip] = useState(false);
    const flipCard = () => {
        setFlip(!flip);
      };

  return (
    <div className={`card ${flip ? "flipped" : ""}`}>
        <div className="card-inner">
            <div onClick={flipCard} className="card-front">
                <div className={props.difficulty}> </div>

                <h4>Question</h4>
                <img src={props.image} alt="" style={{width:'8em', height:'8em'}}></img>
                <h3>{props.question}</h3>
            </div>
            <div onClick={flipCard} className="card-back">
                <div className={props.difficulty}> </div>

                <h4>Answer</h4>
                <h3>{props.answer}</h3>
            </div>
        </div>
    </div>
  )
}
export default Card;
