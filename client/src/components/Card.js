import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTheme, useMediaQuery } from '@mui/material';

function Item(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Adjust the style dynamically based on screen size
  const cardStyle = {
    width: isMobile ? '100%' : '18rem', // Full width on mobile devices
    marginBottom: '1rem' // Adds space between cards on smaller devices
  };

  const imageStyle = {
    width: '100%', // Ensures the image takes up the full width of the card
    height: '18rem', // Fixed height to maintain a 1x1 ratio
    objectFit: 'cover' // Ensures the image covers the area without distorting aspect ratio
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={props.item.url} style={imageStyle} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          {props.item.description}
        </Card.Text>
        <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }}>Price: {props.item.price}</h2>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
