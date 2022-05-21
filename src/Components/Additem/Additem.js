import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Additem.css'


const Additem = () => {
    const { register, reset, handleSubmit } = useForm();
    const [message, setMessage]=useState()

    const onSubmit = data => {  
        //data create and send server
        const url=`http://localhost:5000/fridge`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data=> {
            if(data){
                const success = 'Data added success !'
                setMessage(success)
            }      
        })  
    
    }

  


    return (
        <div >
            <div className='w-50 mx-auto form-container'>
               <h2 className='additem-title'>Please add item</h2>
            <form className='d-flex flex-column mb' onSubmit={handleSubmit(onSubmit)}>
             <strong>Product name</strong>   
            <input className='mb-3 p-1' placeholder='Product Name' {...register("name")} />
            <strong>Supplier name</strong>  
            <input className='mb-3 p-1' placeholder='Supplier Name' {...register("supplier")} />
            <strong>Description</strong> 
            <textarea className='mb-3 p-1' placeholder='description' {...register("discription")} />
            <strong>Price</strong> 
            <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price")} />
            <strong>Quantity</strong>
            <input className='mb-3 p-1' placeholder='Quantity' type="number" {...register("quantity")} />
            <strong>Image URL</strong> 
            <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("picture")} />
            <h4 style={{color:"green" }}>{message}</h4>
            <input onClick={reset} className='product-sub-btn' type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Additem;