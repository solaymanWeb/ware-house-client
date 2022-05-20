import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Additem.css'

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const [fridges, setFridges]=useState([]);

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
        .then(data=> console.log(data))
    }

    //data load from server
   
    useEffect(()=>{
        fetch('http://localhost:5000/fridge')
        .then(res =>res.json())
        .then(data => setFridges(data));
    },[])

    //delete function
    const handleDelete =id=>{
        const proced = window.confirm("are you sure for DELETE")
        if(proced){
            const url =`http://localhost:5000/fridge/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                // console.log(data)
                const remainder = fridges.filter(fridge=> fridge._id !== id)
                setFridges(remainder)
            })
            
        }

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
            <strong>price</strong> 
            <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price")} />
            <strong>Image URL</strong> 
            <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("picture")} />
            <input className='product-sub-btn' type="submit" />
            </form>
            </div>

            {/* all item load hare */}


            <Container className='services-container' >
                <h3 className='inventory-title'>Inventory all product</h3>
            <Row className="g-5">
                {
                    fridges.map(fridge => 
                    <Col lg={4}>
                        <div  className='single-fridge'>
                            <img src={fridge.picture} alt="" />
                            <h6>Name : {fridge.name}</h6>
                            <p>Price : {fridge.price}</p>
                            <p>Quantity : {fridge.quantity}</p>
                            <p>Suplier : {fridge.supplier}</p>
                            <p>Discription : {fridge.discription}</p>
                            <Button onClick={()=>handleDelete(fridge._id)}>Delete</Button> 
                        </div>
                    </Col> )
                }  
            </Row>
            </Container>
        </div>
    );
};

export default Additem;