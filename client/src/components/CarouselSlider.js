import React, { useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Item from './Item'; // Assuming Item component is exported correctly

export default function CarouselSlider() {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    fetch("/api/getproducts") // Adjust this URL based on your actual API endpoint
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <MDBCarousel showIndicators showControls fade>
      {products.map((product, index) => (
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={index + 1}
          key={product.id}
        >
          <Item item={product} />
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
  );
}
