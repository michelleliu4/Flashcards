import {useState} from "react";
import './Answer.css'

const Answer = ({actualAnswer}) => {
    const [correct, setCorrect] = useState(false);
    const [answer, setAnswer] = useState({value: "", correct: "none"});
    const handleChange = (e) => {
        e.preventDefault();
        setAnswer({value: e.target.value});
      }
    
      const handleOnSubmit = () => {
        if (answer.value === actualAnswer) {
          setCorrect("correct");
        }
        else {
          setCorrect("wrong");
        }
      }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
            <input id={correct} type="text" className="a" onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" className="action-button" />
        </form>
    )
}

export default Answer;