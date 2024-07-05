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
        image: "https://files.oaiusercontent.com/file-u7RVcE9pUcdRv4fbKSz3HQmg?se=2024-07-05T12%3A09%3A49Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2c148361-1bb4-4cd0-96c9-4f40e5529380.webp&sig=ldTqLnjBO5FX1PwToq8J87vDESTOg8WRR7sIKvEncNs%3D",
        link: "#"
    },
    {
        title: "Project 2",
        description: "An exploration of commercial space design, enhancing functionality while maintaining aesthetic appeal through modern architectural techniques.",
        image: "https://files.oaiusercontent.com/file-OFWPcPP77wJlQL30T8kEEkfy?se=2024-07-05T12%3A07%3A56Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfa609dc6-4c49-430e-8a2f-84baf51d7c3b.webp&sig=faaTx84FYHrNxPwgDGAddluHLKBSrEDOnGhkKwWvEM8%3D",
        link: "#"
    },
    {
        title: "Project 3",
        description: "A detailed case study of landscape architecture that merges traditional and contemporary design elements to create harmonious outdoor spaces.",
        image: "https://files.oaiusercontent.com/file-R27ppLkQcvRKj6fA0zvxeqn1?se=2024-07-05T12%3A04%3A07Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db1a66346-4fcc-47ef-b6dc-1385110e9e98.webp&sig=CMS%2Bo07F34sY%2BRHFSfJhj25pVot3a9LMvf9BVu4ZWq0%3D",
        link: "#"
    }
];

export default Portfolio;
