import React from 'react';
import Button from './components/Button'
import LikeButton from './components/LikeButton'
import styles from './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  selectChange(value) {
    console.log("Selected " + value);
  }

  buttonClick(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Clicked " + value);
  }

  render() {

    return (
        <div className={styles.app}>
          <Button value={'Click me.'} onClick={this.buttonClick}/>
          <LikeButton />
        </div>
    );
  }
}