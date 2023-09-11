import React from 'react';
import './Stats.css';

const Stats = ({ topUp, withdraw, isDisabled, balance }) => {
    return (
        <div className="stats">

            <div className="your-bid" >${balance}</div>
            <div className="withdraw-deposit">
                <button disabled={isDisabled} className='top-up' onClick={topUp}>Top Up</button>
                <button disabled={isDisabled} className="withdraw" onClick={withdraw} >Withdraw</button>
            </div>

        </div>
    );
};

export default Stats;
