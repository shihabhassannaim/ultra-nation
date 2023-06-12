import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart); 
    const totalPopulation = cart.reduce((sum , country) => sum + country.population , 0 );
    return (
        <div>
            <h3>Population of all this country : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;