import React from 'react';
import './App.css'; 

// function KomponentExercises({name, surname}) {
//     return <h1>Hello, {name} {surname}</h1>
// }

// class KomponentExercises extends React.Component{
//     render(){
//         return <h1>{this.props.numbers.reduce(function (prev, curr) {
//             return prev + curr; 
//         })}</h1>
//     }
// }

//destrukturyzacja {}
// function KomponentExercises({numbers}) {
//     return  <h1>{numbers.reduce(function (prev, curr) {
//         return prev + curr; 
//     })}</h1>
// }

// const Sum = ({ numbers }) =>  (
//     <h1>
//         {numbers.reduce((prev, curr) => prev + curr, 0)}
//     </h1>
// );

// function LikeBox(props) {
//     return <div>
//         <p>Ilosc polubien: {props.likes}</p>
//         <button>Like</button>
//     </div>
    
// }

function Menu() {
    return <div>
        <ul>
            <li><a href="#">Strona główna</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href='/pricing'>Cennik</a></li>
            <li><a href='/contact'>Kontakt</a></li>
        </ul>
    </div>
    
}
// export default LikeBox;
export default Menu;