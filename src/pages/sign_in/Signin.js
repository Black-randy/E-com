import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import './login.css';

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

} from "firebase/auth";
import { useState } from 'react';

function Login() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function loginwithemail(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  
  return (
    <>
      <Meta title={"Login"} />
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

                <MDBCardBody className='text-Black p-1 w-100 d-flex flex-column' >

                  <MDBInput wrapperClass='mb-4' onChange={e=>setEmail(e.target.value)} label='Email' id='form1' type='email' />

                  <MDBInput wrapperClass='mb-4' onChange={e=> setPassword(e.target.value)} label='Password' id='form1' type='password' />


                  <MDBBtn className='w-100 mb-4 ' onClick={loginwithemail} size='md'>Login</MDBBtn>

                  <div className="text-center">

                    <MDBBtn tag='a' color='none' className='mx-3' >
                      <MDBIcon fab icon='facebook-f' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' >
                      <MDBIcon fab icon='google' size="sm" />
                    </MDBBtn>

                  </div>

                </MDBCardBody>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
      <BreadCrumb title="Login" />
    </>
  );
}

export default Login;

