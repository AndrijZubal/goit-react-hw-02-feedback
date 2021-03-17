import React from 'react'

import './App.css';
import Feedback from './Components/Feedback/Feedback';
import Statistics from './Components/Statistics/Statistics';
import style from './Components/Feedback/Feedback.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  }
  handleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1
      
      };
    });
  };

  getTotal = () => this.state.good + this.state.neutral + this.state.bad;
  
  getPositive = () => {
    if (this.getTotal()) {
      return (
        (this.state.good / this.getTotal() * 100).toFixed())
    } else return 0
  };

render() {
  const { good, neutral, bad } = this.state;

  return (
    <div className={style.section}>
      <Feedback handleClick={this.handleClick}/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.getTotal()}
      positive={this.getPositive()}
      />
    </div>
  );
  
  };
};
export default App;