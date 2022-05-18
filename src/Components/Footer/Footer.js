import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container  className=''>
             <Row>
               <Col sm>
                   <h4>About us</h4>
                    <p>Home</p>
                    <p>About Walton</p>
                    <p>Message from Chairman</p>
                    <p>Global Operation</p>
                    <p>Certificates</p>
               </Col>
               <Col sm>
               <h4>Achieved Awards</h4>
                    <p>International Awards</p>
                    <p>Local Awards</p>
                    <p>Special Awards and Souvenir</p>
               </Col>
               <Col sm>
               <h4>Our Products</h4>
               <p>Refrigerator & Freezer</p>
               <p>Television & Home Video</p>
               <p>Mobile</p>
               <p>Computer</p>
               <p>Air Conditioner</p>
               </Col>
               <Col sm>
               <h4>Customer Care</h4>
                   <p>Contact Us</p>
                   <p>Sales Outlet</p>
                   <p>WSMS</p>
                   <p>FAQ</p>
               </Col>
              </Row>
             </Container>
        </div>
    );
};

export default Footer;