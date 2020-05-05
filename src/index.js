import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import KomponentExercises from './KomponentExercises';
// import Shop from './KomponentExercisesShop/KomponentExercisesShop';
// import Shop from './KomponentExercisesShop/KomponentExercisesShopList';
import Chat from './Chat';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Chat/>
    {/* <KomponentExercises name="Jan" surname={'Kowalski'}/> */}
    {/* <KomponentExercises numbers={[1,2,3]}/> */}
    <KomponentExercises likes={3}/>
    {/* <Shop/> */}
    {/* <List/> */}
    {/* <div>Jsx a JS</div> */}
    {/* <AttributeExercises/> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);