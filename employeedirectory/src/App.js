import React from 'react';
import './App.css';
import Jumbo from "./components/Jumbo/Jumbo";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbo />
      </header>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;