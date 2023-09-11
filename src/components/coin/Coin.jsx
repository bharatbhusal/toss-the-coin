import React from 'react';
import './Coin.css';
import Head from '../../assets/head.png';
import Tail from '../../assets/tail.png';

const Coin = ({ makeAnimation, clicker }) => {
    return (
        <div className="coin" style={makeAnimation}>
            <div className="heads">
                <img src={Head} alt="heads" />
            </div>
            <div className="tails">
                <img src={Tail} alt="tails" />
            </div>
        </div >
    );
};

export default Coin;
