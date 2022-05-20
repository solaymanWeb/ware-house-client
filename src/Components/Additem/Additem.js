import React from 'react';
import { useForm } from "react-hook-form";
import './Additem.css'

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto form-container'>
            <h2>Please add item</h2>
            <form className='d-flex flex-column mb' onSubmit={handleSubmit(onSubmit)}>
             <h5>Product Name</h5>   
            <input className='mb-3' placeholder='Product Name' {...register("Name")} />
            <h5>Supplier Name</h5>   
            <input className='mb-3' placeholder='Supplier Name' {...register("Supplier name")} />
            <textarea className='mb-3' placeholder='Description' {...register("Description")} />
            <input className='mb-3' placeholder='Product quantity' type="number" {...register("Quantity")} />
            <input className='mb-3' placeholder='Price' type="number" {...register("Price")} />
            <input className='mb-3' placeholder='Photo URL' type="text" {...register("photo")} />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Additem;