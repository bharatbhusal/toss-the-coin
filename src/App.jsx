import React, { useState } from 'react'
import './App.css'
import Coin from './components/coin/Coin'
import Stats from './components/stats/Stats'
import Guess from './components/guess/Guess'
import Result from './components/result/Result'

const App = () => {
  const [animation, setAnimation] = useState(null)
  const [face, setFace] = useState("Please choose your guess....")
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  //player's balance
  const [topUpBalance, setTopUpBalance] = useState(0.0)
  //balance in game's pool
  const [pool, setPool] = useState(0)

  const generateRandomNumber = () => {
    const randomBytes = new Uint8Array(1);
    crypto.getRandomValues(randomBytes);
    const randomValue = (randomBytes[0] * Math.floor(Math.random() * 2)) % 2;
    return randomValue;
  };

  const headAnimation = {
    animation: "spin-heads 3s forwards",
  }
  const tailAnimation = {
    animation: "spin-tails 3s forwards",
  }

  const handleAnimation = (buttonClassName) => {
    const i = generateRandomNumber()
    setIsButtonDisabled(true)

    setTimeout(() => {
      if (i)
      {
        setAnimation(headAnimation)
        setTimeout(() => {
          if (buttonClassName === "head-guess")
          {
            setFace("It's a Head. Congratulations!")
            setTopUpBalance(preBalance => 2 * preBalance)
          } else
          {
            setFace("It's a Head. Better luck next time!")
            setTopUpBalance(0)
          }
          setIsButtonDisabled(false)
        }, 3000)
      } else
      {
        setAnimation(tailAnimation)
        setTimeout(() => {
          if (buttonClassName === "tail-guess")
          {
            setFace("It's a Tail. Congratulations!")
            setTopUpBalance(preBalance => 2 * preBalance)
          } else
          {
            setFace("It's a Tail. Better luck next time!")
            setTopUpBalance(0)
          }
          setIsButtonDisabled(false)
        }, 3000)
      }
    }, 1)
    setAnimation(null)
  }

  const handleTopUp = () => {
    setTopUpBalance(preBalance => preBalance + 100)
    setPool(preBalance => preBalance + 100)
  }

  const handleWithdraw = () => {
    setPool(preBalance => preBalance + (0.05 * topUpBalance))
    setTopUpBalance(0)
  }

  return (
    <div className="App">
      <div className="container">
        <Coin makeAnimation={animation}></Coin>
        <Result result={face}></Result>
        <Stats isDisabled={isButtonDisabled} balance={topUpBalance} topUp={handleTopUp} withdraw={handleWithdraw}></Stats>
        <Guess isDisabled={isButtonDisabled} makeGuess={handleAnimation}></Guess>
      </div>
    </div>
  )
}

export default App 
