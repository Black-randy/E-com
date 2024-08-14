import React from "react";
import logo from "../assets/willow-tree-logo.png";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';


function Home() {
  return (
    <div className=" App relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
      <div className="container">

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">

              <header className="App-header">
                <img src={logo} alt="Willow Tree Interiors" />
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Welcome to Willow Tree Interiors
                </h1>
              </header>

            </div >
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;
