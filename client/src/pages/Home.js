import React from "react";
import logo from "../assets/willow-tree-logo.png";
import "../App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css';


function Home() {
  const [ setFeaturedProducts] = React.useState(null);
  const [aboutInfo, setAboutInfo] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/featured-products")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data));

    fetch("/api/about")
      .then((res) => res.json())
      .then((info) => setAboutInfo(info));
  }, []);

  

  return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Willow Tree Interiors" />
        <p>Welcome to Willow Tree Interiors</p>
        {/* {aboutInfo ? <p>{aboutInfo.description}</p> : <p>Loading company info...</p>} */}
      </header>
    </div>
  );
}

export default Home;
