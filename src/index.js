import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AttributeExercises from './AttributeExercises';
// import LikeBox from './KomponentExercises';
import Menu from './KomponentExercises';
// import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <KomponentExercises name="Jan" surname={'Kowalski'}/> */}
    {/* <KomponentExercises numbers={[1,2,3]}/> */}
    {/* <LikeBox likes={3}/> */}
    <Menu/>

    {/* <div>Jsx a JS</div> */}
    {/* <AttributeExercises/> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
