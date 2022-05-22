import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageItem.css'


const ManageItem = () => {
    const [fridges, setFridges]=useState([]);

    useEffect(()=>{
        fetch('https://vast-castle-65427.herokuapp.com/fridge')
        .then(res =>res.json())
        .then(data => setFridges(data));
    },[])
//delete function and api method
    const handleDelete =id=>{
        const proced = window.confirm("are you sure for DELETE")
        if(proced){
            const url =`https://vast-castle-65427.herokuapp.com/fridge/${id}`
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
        <div>    
            <Container className='services-container' >
                    <Row>
                    <Col sm></Col>
                    <Col sm><h3 className='inventory-title'>Inventory all product</h3></Col>
                    <Col sm><div className=' add-item-btn'><Link to='/additem'>Add  new items</Link></div></Col>
                     </Row>

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

export default ManageItem;