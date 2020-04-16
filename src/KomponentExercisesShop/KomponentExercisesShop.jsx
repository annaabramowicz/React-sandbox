import React, { Component } from 'react';

const item = {
    title: 'rower',
    image: 'https://static.canyon.com/_img/bikes/2019/grail-cf-sl-7_c1281.png',
    description: 'super rower',
    price: 1000000,
  };
  
  const item2 = {
    title: 'czajnik',
    image: 'https://e.allegroimg.com/s512/0335d2/4e09defd418fbeb68d5e646907ce',
    description: 'super czajnik',
    price: 20,
  };

const ShopItemHeader = ({item}) => {
    return <div>
        <h1>{item.title}</h1>
        <img src={item.image} style={{width:'100px'}}/>
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
        <ShopItemHeader item = {item}/>
        <ShopItemDescription description = {item.description}/>
        <ShopItemPricing price = {item.price}/>
    </div>
}

export default Shop;