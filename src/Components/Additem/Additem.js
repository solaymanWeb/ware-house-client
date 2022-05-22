import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm,reset } from "react-hook-form";
import './Additem.css'


const Additem = () => {
    const { register, reset, handleSubmit } = useForm();


    const onSubmit = (data) => {  
        //data create and send server
        const url=`https://vast-castle-65427.herokuapp.com/fridge`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data=> {
            toast.success('Successfully! item added')

    
        }) 
        reset()
    }


    return (
        <div >
            <div className='w-50 mx-auto form-container'>
               <h2 className='additem-title'>Please add item</h2>
            <form className='d-flex flex-column mb' onSubmit={handleSubmit(onSubmit)}>
             <strong>Product name</strong>   
            <input className='mb-3 p-1' placeholder='Product Name' {...register("name")} required />
            <strong>Supplier name</strong>  
            <input className='mb-3 p-1' placeholder='Supplier Name' {...register("supplier")} required />
            <strong>Description</strong> 
            <textarea className='mb-3 p-1' placeholder='description' {...register("discription")}required  />
            <strong>Price</strong> 
            <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price")} required />
            <strong>Quantity</strong>
            <input className='mb-3 p-1' placeholder='Quantity' type="number" {...register("quantity")}required  />
            <strong>Image URL</strong> 
            <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("picture")} required />
            <input className='product-sub-btn' type="submit" />
            </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Additem;