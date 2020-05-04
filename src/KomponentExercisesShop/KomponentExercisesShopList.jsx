import React, { Component } from 'react';
import '../App.css';

const menu = [
    {
        title   :   'Mysz komputerowa',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
];

const ShopList = (menu) => {
    return (
        <div className="shoplist">
            {menu.map(curr => <ShopItemHeader key={curr.title} title={curr.title} image={curr.image}/>)}
        </div>
    )
}
const ShopItemHeader = (item) => {
    return <div>
        <h1>{item.title}</h1>
        {/* <img src={item.image} style={{width:'100px'}}/> */}
    </div>
}


class ShopItemDescription extends Component{
    render(){
        const { description } = this.props;
       return <article>
            <p>{description}</p>
        </article>
    }
}

const ShopItemPricing = ({price}) => {
    return <div>
        Cena: {price}
        <button>Kup!</button>
    </div>
}

function Shop() {
    return <div>
        <ShopList menu={menu}/>
        {/* <ShopItemHeader item = {item}/>
        <ShopItemDescription description = {item.description}/>
        <ShopItemPricing price = {item.price}/> */}
    </div>
}

export default Shop;