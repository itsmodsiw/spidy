import React from 'react';
import './App.css';
import logo from './logo2spidy.png'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="main-title">Free Spider, Anatoly's Vision</h1>
        <h2 className="sub-title">Solana Aggregator Swap by SPDR for ALL</h2>
        <div className="button-group">
          <a
            href="https://birdeye.so/token/AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY?chain=solana"
            className="buy-now-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            buy
          </a>
          <a
            href="https://github.com/itsmodsiw/spidy"
            className="documentation-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
        </div>
        <footer>
          <a
            href="https://twitter.com/tolyspider"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-link"
          >
            Twitter
          </a>
          <a
            href="https://t.me/Tolysspider"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            Telegram
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
