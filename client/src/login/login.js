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
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginWithEmail = () => {
    if (!email || !password) {
        setError('Email and password are required');
        return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Login successful'); // Log success message to console
        navigate('/admin');
      })
      .catch((error) => {
        setError(error.code === 'auth/wrong-password' ? 'Invalid password' : 'Login failed');
      });
};

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      console.log('Login successful'); // Log success message to console
      navigate('/admin');
    }).catch((error) => {
        setError('Google sign-in failed');
      });
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
              {error && (
                <div className={`alert alert-danger`} role="alert">
                  {error}
                </div>
              )}
              <MDBInput wrapperClass='mb-4' onChange={e => setEmail(e.target.value)} label='Email' id='emailSignUp' type='email' />
              <MDBInput wrapperClass='mb-4' onChange={e => setPassword(e.target.value)} label='Password' id='passwordSignUp' type='password' />
              <MDBBtn className='w-100 mb-4' onClick={loginWithEmail}>Login</MDBBtn>
              <div className="text-center">
                <div>
                  <p>Not a member? <Link to="/signup">Sign up now</Link></p>
                </div>
                <p>or sign up with:</p>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={signupWithGoogle}>
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

export default Login;
