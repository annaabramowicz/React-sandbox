import React, { Fragment } from 'react';
import './App.css';

const DAY = "firday";
const people = [{firstName: "Krzysiek"}, {firstName: "Tomek"}];

// people.map((element, index) => {
//   console.log(element, index);
// })

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
          {people.map((element,index) => {
           return <Hello key={index} firstName={element.firstName}/>
          })}
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
    </div>
  );
}

export default App;
