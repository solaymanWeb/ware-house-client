import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner from '../Images/banner.jpg';
import './Home.css';

const Home = () => {
    const [fridges, setFridges]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5000/fridge')
        .then(res =>res.json())
        .then(data => setFridges(data));
    },[])

    const updateQuantity=id=>{   
        if(id){
            navigate(`/details/${id}`);
        }
    }


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
                <h3 className='inventory-title'>Inventory</h3>
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
                            <Button onClick={()=>updateQuantity(fridge._id)} variant="success">Update Quantity</Button>
                        </div>
                    </Col> )
                }  
            </Row>
            </Container>
            {/* FRIDGE DISPLAY SECTION */}

             <Container>
                 <h3 className='inventory-title'>Display Fridge</h3>
                <Row >
                    <Col lg={6}>
                        <div className='cool-fridge-img'>
                            <img src="https://waltonbd.com/image/catalog/category-banner/refrigerator/direct-cool-landing-page.jpg" alt="" />
                        </div>
                    </Col>
                    <Col className='direct-coll-area' lg={6}>
                     <div className='direct-cool-refrigeration'>
                            <div className='coll-fridge-detail'> 
                             <h3>Direct Cool Refrigerator</h3>
                            <p>Welcome to an experience of freshness. WALTON Direct Cool Refrigerators are equipped with 100% copper condensers and Nano technology to take care of your evolving needs and at the same time, maintain the quality of the food that you preserve. Our simple and contemporary designs will surely complement your lifestyle.</p></div>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} className="direct-coll-area" >
                        <div className='direct-cool-refrigeration'>
                            <div className='coll-fridge-detail'> 
                             <h3>Beverage Cooler</h3>
                            <p>Whether the purpose is for commercial use or personal use, WALTON Beverage Cooler allows you to keep a variety of drinks ready and cool constantly. You can use them either indoors or outdoors. Designed to operate at peak performance, yet maintaining its energy efficiency so you can store the beverages without any worries.</p></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='cool-fridge-img'>
                            <img src="https://waltonbd.com/image/catalog/new_website/landing-banner/ref-landing-page/2021/vebarage-block-img.jpg" alt="" />
                        </div>
                    </Col>
                </Row>

                </Container>
            

        </div>
    );
};

export default Home;