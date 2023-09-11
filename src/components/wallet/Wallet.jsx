import React from 'react'
import './Wallet.css'

const Wallet = ({ status }) => {
    return (
        <div className="wallet-details">
            {status}
        </div>
    )
}

export default Wallet