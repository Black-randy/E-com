import React from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,
  MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn
} from 'mdb-react-ui-kit';

const Portfolio = () => {
    return (
        <MDBContainer className="my-5">
            <header className="text-center mb-5">
                <h1>Willow Tree Portfolio</h1>
                <p className="lead">Explore our projects to see the innovative solutions we've delivered.</p>
            </header>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {projects.map((project, index) => (
                    <MDBCol key={index}>
                        <MDBCard>
                            <MDBCardImage src={project.image} alt={project.title} position='top' />
                            <MDBCardBody>
                                <MDBCardTitle>{project.title}</MDBCardTitle>
                                <MDBCardText>{project.description}</MDBCardText>
                                <MDBBtn href={project.link}>Read more</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>

            <footer className="text-center mt-4">
                <p>© 2024 Willow Tree Interiors. All Rights Reserved.</p>
            </footer>
        </MDBContainer>
    );
};

const projects = [
    {
        title: "Project 1",
        description: "This project focuses on innovative design solutions for residential interiors, incorporating sustainable materials and smart technology.",
        image: "https://github.com/Black-randy/E-com/blob/main/Assetes/Product%20Images/1.jpg?raw=true",
        link: "#"
    },
    {
        title: "Project 2",
        description: "An exploration of commercial space design, enhancing functionality while maintaining aesthetic appeal through modern architectural techniques.",
        image: "https://github.com/Black-randy/E-com/blob/main/Assetes/Product%20Images/2.jpg?raw=true",
        link: "#"
    },
    {
        title: "Project 3",
        description: "A detailed case study of landscape architecture that merges traditional and contemporary design elements to create harmonious outdoor spaces.",
        image: "https://github.com/Black-randy/E-com/blob/main/Assetes/Product%20Images/4.jpg?raw=true",
        link: "#"
    }

];

export default Portfolio;
