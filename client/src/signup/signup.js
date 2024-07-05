import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './signup.css';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
      navigate('/admin');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-image overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3 login-title">
            Willow Tree
            <br />
            <span className="text-accent">for your Home</span>
          </h1>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5 text-black'>
              <MDBInput wrapperClass='mb-4' onChange={e => setEmail(e.target.value)} label='Email' id='emailSignUp' type='email' />
              <MDBInput wrapperClass='mb-4' onChange={e => setPassword(e.target.value)} label='Password' id='passwordSignUp' type='password' />
              <MDBBtn className='w-100 mb-4' onClick={handleSignUp}>SIGN UP</MDBBtn>
              <div className="text-center">
                <p>Already have an account? <Link to="/login">Login now</Link></p>
                <p>or sign up with:</p>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={handleSignInWithGoogle}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUpPage;
