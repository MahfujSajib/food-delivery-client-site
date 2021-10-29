import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Item from '../Item/Item';
import ItemCart from '../ItemCart/ItemCart';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    const handleItemsCard = item => {
        const newCart = [...cart, item];
        setCart(newCart);

    }
    return (
        <div>
            <h1 className='items mt-5 mb-5'>Our Items</h1>
            <div className="d-flex">
                <div className="container">
                    <div className="row">
                        <div className="item">
                            {
                                items.map(item => <Item
                                    key={item.id}
                                    item={item}
                                    handleItemsCard={handleItemsCard}
                                >

                                </Item>)
                            }
                        </div>
                    </div>
                </div>
                <div className='cart-container'>
                    <ItemCart cart={cart}></ItemCart>
                </div>
            </div>

        </div>
    );
};

export default Items;


