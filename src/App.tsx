import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-layout">
          <div className="text-card">
            <img src="/logo2spidy.png" className="App-logo" alt="logo" />
            <h2>Free Spider - Anatoly's Vision</h2>
            <h1>Solana Swap Aggregator for All</h1>
            <a href="https://birdeye.so/token/AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY?chain=solana" className="button">Buy Here</a>
            <a href="https://github.com/itsmodsiw/spidy" className="button">Documentation</a>
            <div className="social-links">
              <a href="https://twitter.com/tolyspider">Twitter</a>
              <a href="https://t.me/Tolysspider">Telegram</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
