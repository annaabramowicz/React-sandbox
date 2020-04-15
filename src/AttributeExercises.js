import React from 'react';
import './App.css'; 
import people from './people.js';

const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
const color = prompt('Border color');
const colorBorder = ['red', 'green', 'blue'].indexOf(color) 

function drawBorder(colorBorder){
  
  if (colorBorder >= 0) {
    return <div style = {{
      height:'100px',
      width: '100px',
      border: `5px solid ${color}`
    }}></div>
  } else {
    return 'Unpropiet color';
  }
}

const elements = people.map(person => (
  <div className="person">
    <img src={ person.avatar }/>
    <div class="info">
        <h1>{person.title} {person.name} {person.surname}</h1>
        <p>{ person.bio }</p>
    </div>
</div>
));

function AttributeExercises() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
        <img src={imageUrl} alt="" />
        <div>{drawBorder(colorBorder)}</div>
        <div>{elements}</div>
      </header>
    </div>
  );
}

export default AttributeExercises;
