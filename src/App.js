import React, { Children } from 'react';
import './App.css';


function Hello({firstName, lastName, children}) {
  return(
    <div className="App">
      <p>Hello {firstName} {lastName}!!! !!!</p>
      <p>{children}</p>
    </div>
  );
}

Hello.defaultProps = {
  firstName: "Szkola",
  // lastName : "Reacta"
}

function App() {
  return (
    <div className="App">
      test
        <h1>Test</h1>
        <Hello firstName="Krzysiek" lastName="Nowak"/>
        <Hello firstName="Krzysiek" />
        <Hello>Tresc dziecka</Hello>
        <Hello/>
    </div>
  );
}

export default App;
