import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import banner from '../Images/banner.jpg';
import './Home.css';

const Home = () => {
    const [fridges, setFridges]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setFridges(data));
    },[])


    return (
        <div >
            {/* BANNER AREA  */}

            <Container className='home-container'>
            <Row>
                <Col><img src={banner} alt="" /></Col>
            </Row>
            </Container>

            {/* PRODUCT AREA */}

            <Container className='services-container' >
            <Row className="g-5">
                {
                    fridges.map(fridge => <Col lg={4}>
                        <div className='single-fridge'>
                            <img src={fridge.picture} alt="" />
                            <h6>Name : {fridge.name}</h6>
                            <p>Price : {fridge.price}</p>
                            <p>Quantity : {fridge.quantity}</p>
                            <p>Suplier : {fridge.supplier}</p>
                            <p>Discription : {fridge.discription}</p>
                            <Button variant="success">Update Quantity</Button>
                        </div>
                    </Col> )
                }  
            </Row>
            </Container>

        </div>
    );
};

export default Home;