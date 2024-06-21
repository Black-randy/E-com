import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import './Signup.css';
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useState } from 'react';

function Login() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [LastName, setLastName] = useState("");

  
  function registerWithEmail(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: UserName,
          name: Name
        });
      })
      .then(() => {
        console.log('User profile updated');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <>
      <Meta title={"Signup"} />
      
      <MDBContainer fluid className='p-4 background-image overflow-hidden'>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Willow Tree <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your Home</span>
            </h1>
            <p className='px-3 text-justify' style={{ color: 'hsl(218, 81%, 85%)' }}>
              Explore our diverse portfolio, shop our latest collections, and enjoy tailored design services from the comfort of your home. Whether you’re looking to revamp a single room or your entire house, our expert team is here to help you create a space that truly reflects your style.
            </p>
          </MDBCol>
          <MDBCol md='6' className='position-relative'>
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
            <MDBCard className='my-5 bg-glass-card-2'>
              <MDBCardBody className='p-3'>
                <MDBCardBody className='p-1'>
                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='First name' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol col='6'>
                      <MDBInput onChange={(e) => setLastName(e.target.value)} wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form1' type='email' />
                  <MDBInput onChange={(e) => setUserName(e.target.value)} wrapperClass='mb-4' label='Username' id='form1' type='text' />
                  <MDBInput onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form1' type='password' />

                  <MDBBtn onClick={registerWithEmail} className='w-100 mb-4' size='md'>sign up</MDBBtn>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='google' size="sm" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;

