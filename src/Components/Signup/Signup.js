import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import './Signup.css';

const Signup = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [createUserWithEmailAndPassword, 
    user,
    error
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, vryError] = useSendEmailVerification(auth);

  const navigate = useNavigate();

    if(user){
      navigate('/')
    }

  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }
  const userCreate= async (event)=>{
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
          alert('Sent email for varify');
    event.preventDefault();

  }

    return (
        <div>
            <div className='signup-form'>
                <h5>Register </h5>
            <Form onSubmit={userCreate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
            <p style={{color:'red'}}>{error?.message}</p>
            <Button className='submit-btn' variant="primary" type="submit">
              Register
            </Button>
          </Form>
            </div>
            <h6>al rerady registered?  <Link to='/login'>log in</Link> </h6>
        </div>
    );
};

export default Signup;