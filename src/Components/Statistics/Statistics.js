import React from 'react'
import Notification from '../Notification/Notification';
import style from '../Feedback/Feedback.module.css';

const Statistics = ({good, neutral, bad, total, positive }) => {
    
    if (total) {
        return (
        <div>
            <h2>Statiatics</h2>
                <ul className={style.list}>
                <li>Good {good}</li>
                <li>Neutral {neutral}</li>
                <li>Bad {bad}</li>
                <li>Total {total}</li>
                <li>Positive feedback {positive}%</li>
               
            </ul>
        </div>)
    } else return <Notification  message="No feedback given"/>;
   
};
export default Statistics