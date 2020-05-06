import React, { Fragment } from 'react';
import './App.css';

const DAY = "firday";

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
// łatwiej sie testuje
function isMonday(DAY){
  if(DAY === "monday"){
    return (
      <Hello firstName="Krzysiek" lastName="Nowak"/>
    )
  } else {
    // jak jest zwracanych wicej niz jeden argument musi byc "opakowanie"
    return (
      <Fragment>
        test
            <h1>Test</h1>
            <Hello firstName="Krzysiek" />
            <Hello>Tresc dziecka</Hello>
            <Hello/>
      </Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
    {isMonday(DAY)}
      {/* operator trójargumentowy, traci na czytelności i trzeba opakowywac w kolejnego diva */}
      {/* {DAY === "monday"?
        <div>
          <Hello firstName="Krzysiek" lastName="Nowak"/>
        </div> :
        <div>
          test
          <h1>Test</h1>
          <Hello firstName="Krzysiek" />
          <Hello>Tresc dziecka</Hello>
          <Hello/>
        </div>
      } */}
    </div>
  );
}

export default App;
