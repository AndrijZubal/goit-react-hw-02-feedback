import React from 'react';
import style from './Feedback.module.css'


const Feedback = ({handleClick}) => {
    return (
    <div >
        <h2>Please leave feedback</h2>
        <div>
            <button name="good"
                    type="button"
                    className={style.button}
                    onClick={handleClick}
                >
                Good{" "}
            </button>
            <button
                name="neutral"
                type="button"
                className={style.button}
                    onClick={handleClick}
            >
                Neutral
            </button>
            <button
                name="bad"
                type="button"
                className={style.button}
                    onClick={handleClick}
            >
                Bad
            </button>
        </div>
    </div>
    )
};

export default Feedback;
