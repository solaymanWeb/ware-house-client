import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Details.css'


const Details = () => {
    const {id}=useParams();
    const [fridge, setFridges]=useState([]);
    const [control, setControl]=useState(true)


  

    useEffect(()=>{
       const  url = `https://vast-castle-65427.herokuapp.com/fridge/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFridges(data))
    },[control])

    const handleQuantity=event=>{
        event.preventDefault();
        const quantity =event.target.number.value;
        let totalCount= parseInt(quantity )+ parseInt(fridge.quantity);
        console.log(totalCount)    

// update quantity
        const url=`https://vast-castle-65427.herokuapp.com/fridge/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({totalCount})
        })
        .then(res =>res.json())
        .then(data=> {
            setControl(!control)
              alert('Quantity added successfully');
        }) 

    }
            //Delivert button 
    const handleDeliverd=()=>{
        let preQuantity =  fridge.quantity;
        let totalCount = preQuantity - 1;

        const url=`https://vast-castle-65427.herokuapp.com/fridge/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({totalCount})
        })
        .then(res =>res.json())
        .then(data=> {
            setControl(!control)
              
        }) 

     
    }

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
                    <input placeholder='add number' name='number' type="number" required />
                    <br/>
                    <br/>
                    <input  type="submit"  />
                    </form>
                    <Button onClick={()=>handleDeliverd(fridge._id)}>Delivered</Button>
                </div>
            </div>
             </Col> 
            </Row>
        </Container>
            
        </div>
    );
};

export default Details;