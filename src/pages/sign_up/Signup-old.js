import './Signup.css';
import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Container from "../../components/Container.js";
import Meta from '../../components/Meta';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

  MDBIcon
}
  from 'mdb-react-ui-kit';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

function Signup() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function signupwithemail() {
    console.log("Create New user with Email And Password")

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  return (
    <>
      <Meta title={"Signup"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
            </h1>
            <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
              We are Awsomeee
            </p>
          </MDBCol>
          <MDBCol md='6' className='position-relative'>
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={e => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={e => setPassword(e.target.value)} />
                <MDBBtn className='w-100 mb-4' size='md' onClick={signupwithemail}>Login</MDBBtn>
                <div className="text-center">
                  <p>or Signup :</p>
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </Container>
      <BreadCrumb title="Signup" />
    </>
  );
}

export default Signup;
