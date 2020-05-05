import React from 'react';
import './App.css';

import animals from './animals';  

// const a = Number(prompt( 'Podaj liczbe a'));
// const b = Number(prompt( 'Podaj liczbe b'));
// const char = prompt('Podaj znak +,-,/,*');
// const age = Number(prompt('Podaj rok urodzenia'));
const a = 4;
const b = 5;
const char = '+';
const age = 23;
const result = a + b;
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
      test
      <header className="App-header">
        <h1>Test</h1>
        <div>{result}</div>
        <h1>Aktualny wiek: {actuallYear - age}</h1>
        <div>{cacl(char,a,b)}</div>
        <div>{animals.length} zwierzat: {animals.join(', ')}</div>
      </header>
    </div>
  );
}

export default App;
