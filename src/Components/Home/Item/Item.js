import React from 'react';
import './Item.css'

const Item = (props) => {
    const { name, img, description, price } = props.item;

    return (
        <div className='container'>
            <div className="card-group ">
                <div className="card border border-warning">
                    <img src={img} className=" img-fluid" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{description}</p>
                        <h4 className="card-text">Price: {price}</h4>
                        <button onClick={() => props.handleItemsCard(props.item)} className='btn btn-warning border-warning m-2 p-2'><span className='purchase'>Purchase Now</span></button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Item;