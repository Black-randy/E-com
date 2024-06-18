import React from 'react';

import { MDBContainer } from 'mdb-react-ui-kit';

function Home() {
    return (
        <>
        <MDBContainer fluid className=' py-5 p-4 background-image overflow-hidden'>
        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://source.unsplash.com/7PdkAgRP69Y')", height: 400 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Heading</h1>
                            <h4 className='mb-3'>Subheading</h4>
                            <a className='btn btn-outline-light btn-lg' href='/Login' role='button'>
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </header>
            
        </MDBContainer>
        </>

    );
}

export default Home;