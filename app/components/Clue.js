import React from 'react'
import styles from './Clue.css';


export default class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clue: props.clue, correct: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  answerChange(value) {
    const isCorrect = this.fuzzyMatch(value);

    // this does not seem to be causing a re-render,
    // so i have to use the refs to force updtae. why?
    this.setState({correct: isCorrect});

    this.refs.results.innerHTML = isCorrect;
  }

  fuzzyMatch(guess){
    const answer = this.state.clue.answer;

    if (guess === "") return false;
    if (answer === guess) return true;

    const guess_re = new RegExp(guess, "gi");

    if (guess.length > 3 && guess_re.test(answer)) {
      return true;
    } else {
      return false;
    }
  }

  showAnswer() {
    this.refs.answer.value = this.state.clue.answer;
  }

  render() {
    // const clue = this.state.clue;
    const {clue, correct} = this.state;
    return (
        <div className={styles.clue}>
          <div>
            <span>{clue.category}</span>
          </div>
          <div>
            <label>Q:</label>
            <span>{clue.question}</span>
          </div>
          <div>
            <label>A:</label>
            <input type="text" ref="answer" onChange={e => this.answerChange(e.target.value)} />
          </div>
          <button type="button" onClick={this.showAnswer}>Tell me</button>
          <span ref="results">
            {correct}
          </span>
        </div>
    );
  }
}
