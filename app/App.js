import React from 'react';
import Button from './components/Button'
import Header from './components/Header'
import LikeButton from './components/LikeButton'
import styles from './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      numCatsToShow: 10,
      catsToShowOptions: ["10", "20", "50"]
    };
    // this.selectChange = this.selectChange.bind(this);
    // this.buttonClick = this.buttonClick.bind(this);
    this.changeNumCatsToShow = this.changeNumCatsToShow.bind(this);

  }

  changeNumCatsToShow(value) {
    this.setState({numCatsToShow: parseInt(value)});
    console.log("Change!");
    // this.getCats(parseInt(value));
  }


  render() {
    const {cats, catsToShowOptions, numCatsToShow} = this.state;
    return (
        <div className={styles.app}>
          <Header />
          {this.props.children  && React.cloneElement(this.props.children, {
            cats: cats,
            catsToShowOptions: catsToShowOptions,
            numCatsToShow: numCatsToShow,
            changeNumCatsToShow: this.changeNumCatsToShow
          })}
        </div>
    );
  }
}