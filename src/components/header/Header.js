import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,

    MDBCollapse,
} from 'mdb-react-ui-kit';

function Header() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>

            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Willow Tree</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNav}>
                        <MDBNavbarNav>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Cataloug</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                            </MDBNavbarItem>                            
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/contact'>Contact Us</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/signin'>Sign in</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/signup'>Sign up</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    Comming soon
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


        </>
    );
}

export default Header;
