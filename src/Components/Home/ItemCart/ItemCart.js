import React from 'react';

const ItemCart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const item of cart) {
        total = total + item.price
    }
    return (
        <div>
            <h2 className='order-cart'>OrderCart</h2>
            <hr />
            <h4>Item Ordered: {props.cart.length}</h4>
            <h3>Total Price: {total}:</h3>
            <button className='btn btn-warning p-2'>Buy Now</button>
        </div>
    );
};

export default ItemCart;