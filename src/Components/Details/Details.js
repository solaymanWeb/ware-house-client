import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Details.css'

const Details = () => {
    const {id}=useParams();
    const [fridge, setFridges]=useState([]);
    const [count, setCount]=useState();

    useEffect(()=>{
       const  url = `http://localhost:5000/fridge/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFridges(data))
    },[])

    const handleQuantity=event=>{
        event.preventDefault();
        const quantity =event.target.number.value;
        console.log(quantity)

// update quantity
        const url=`http://localhost:5000/fridge/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(quantity)
        })
        .then(res =>res.json())
        .then(data=> {
            alert('Quantity added successfully');
            event.target.reset();
            console.log(data)

            // if(data){
            //     const success = 'Data added success !'
            //      setMessage(success)
            // }      
        }) 

    }

    console.log(fridge)

    //  data create and send server


    return (
        <div>
        <Container className='services-container'>
            <Row>
            <Col lg={6}>
             <div  className='fridge-details single-fridge'>
              <img src={fridge.picture} alt="" />
              <h6>Name : {fridge.name}</h6>
              <p>Price : {fridge.price}</p>
              <p>Quantity : {fridge.quantity}</p>
              <p>Suplier : {fridge.supplier}</p>
              <p>Discription : {fridge.discription}</p> 
             </div>
             </Col> 
            <Col lg={6}>
              <div  className='single-fridge '>
                <div>
                    <form onSubmit={handleQuantity} >
                    <input placeholder='add number' name='number' type="number" />
                    <br/>
                    <input  type="submit"  />
                    </form>
                </div>
            </div>
             </Col> 
            </Row>
        </Container>
            
        </div>
    );
};

export default Details;