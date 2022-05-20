import React from 'react';
import { useForm } from "react-hook-form";
import './Additem.css'

const Additem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        
        const url=`http://localhost:5000/fridge`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data=> console.log(data))

    }


    return (
        <div className='w-50 mx-auto form-container'>
            <h2 className='additem-title'>Please add item</h2>
            <form className='d-flex flex-column mb' onSubmit={handleSubmit(onSubmit)}>
             <strong>Product name</strong>   
            <input className='mb-3 p-2' placeholder='Product Name' {...register("name")} />
            <strong>Supplier name</strong>  
            <input className='mb-3 p-2' placeholder='Supplier Name' {...register("supplier")} />
            <strong>Description</strong> 
            <textarea className='mb-3 p-2' placeholder='description' {...register("discription")} />
            <strong>price</strong> 
            <input className='mb-3 p-2' placeholder='Price' type="number" {...register("price")} />
            <strong>Image URL</strong> 
            <input className='mb-3 p-2' placeholder='Photo URL' type="text" {...register("picture")} />
            <input className='product-sub-btn' type="submit" />
            </form>
        </div>
    );
};

export default Additem;