import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Additems.css';

const Additems = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/items', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className='add-item'>
            <h2>Add items</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <textarea {...register("description")} placeholder='description' />
                <input {...register("img")} placeholder='image' />
                <input type="number" {...register("price")} placeholder='price' />
                <button className='btn-warning'>Submit</button>
            </form>
        </div>
    );
};

export default Additems;