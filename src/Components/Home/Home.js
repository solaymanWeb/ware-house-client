import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../Images/banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <div >
            {/* BANNER AREA  */}
            <Container className='home-container'>
            <Row>
                <Col><img src={banner} alt="" /></Col>
            </Row>
            </Container>
        </div>
    );
};

export default Home;