import React from 'react';
import logo from './logo.svg';
import './App.css';
import animals from './animals';  

const a = Number(prompt( 'Podaj liczbe a'));
const b = Number(prompt( 'Podaj liczbe b'));
const char = prompt('Podaj znak +,-,/,*');
const result = a + b;
const age = Number(prompt('Podaj rok urodzenia'));
const actuallYear = (new Date()).getFullYear();

function cacl(char,a,b){
  const result = {
   '+': <h1>{a + b}</h1>,
   '/': <h2>{a / b}</h2>,
   '-': <h3>{a - b}</h3>,
   '*': <h4>{a * b}</h4>,
  }[char]
  return result;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test</h1>
        <div>{result}</div>
        <h1>Aktualny wiek: {actuallYear - age}</h1>
        <div>{cacl(char,a,b)}</div>
        <div>{animals.length} zwierzat: {animals.join(', ')}</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
