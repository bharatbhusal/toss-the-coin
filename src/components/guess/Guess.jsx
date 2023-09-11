import React from 'react';
import './Guess.css';

const Guess = ({ isDisabled, makeGuess }) => {
    const handleGuessClick = (event) => {
        const buttonClassName = event.target.className;
        makeGuess(buttonClassName);
    };
    return (
        <div className='guess-input'>
            <button disabled={isDisabled} className="head-guess" onClick={handleGuessClick}>
                Heads
            </button>
            <div className="guide">
                <div className="finger">👈🏻</div>
                <div className="text">
                    <h3>Your</h3>
                    <h3>Guess</h3>
                </div>
                <div className="finger">👉🏻</div>
            </div>
            <button disabled={isDisabled} className="tail-guess" onClick={handleGuessClick}>
                Tails
            </button>

        </div >
    );
};

export default Guess;

