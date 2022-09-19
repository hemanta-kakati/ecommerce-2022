import React from "react";
import { Link } from "react-router-dom";
import catWatchImg from "../assets/images/cat-watches.png";
import catSpeakersImg from "../assets/images/cat-speakers.png";
import catHeadsetsImg from "../assets/images/cat-headsets.png";
import catSmartphonesImg from "../assets/images/cat-smartphones.png";
import catTelevisionImg from "../assets/images/cat-television.png";
import catLaptopsImg from "../assets/images/cat-laptops.png";
import catCamerasImg from "../assets/images/cat-cameras.png";
import catVideogamesImg from "../assets/images/cat-videogames.png";

const ProductsCategory = () => {
  return (
    <section id="product-category">
      <div className="container">
        <h4 className="text-center heading">Shop By Categories</h4>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catWatchImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Watches</h5>
                <Link to="#">Smart Watches</Link>
                <Link to="#">Men's Watches</Link>
                <Link to="#">Leather</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catSpeakersImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Speakers</h5>
                <Link to="#">Smart Home</Link>
                <Link to="#">Sound bar</Link>
                <Link to="#">Home theater</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catHeadsetsImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Headsets</h5>
                <Link to="#">Over-ear</Link>
                <Link to="#">Ear buds</Link>
                <Link to="#">Wireless</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catSmartphonesImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Smartphones</h5>
                <Link to="#">All phones</Link>
                <Link to="#">Accessories</Link>
                <Link to="#">Case & Cover</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catTelevisionImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Televisions</h5>
                <Link to="#">OLEDs</Link>
                <Link to="#">Smart TVs</Link>
                <Link to="#">Accessories</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catLaptopsImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Computers</h5>
                <Link to="#">Laptops</Link>
                <Link to="#">Components</Link>
                <Link to="#">Monitors</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catCamerasImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Cameras</h5>
                <Link to="#">DSLR</Link>
                <Link to="#">Lens</Link>
                <Link to="#">Drones</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cat-card">
              <div className="img-wrapper">
                <img src={catVideogamesImg} alt="" srcset="" />
              </div>
              <div className="cat-content">
                <h5 className="title">Video Games</h5>
                <Link to="#">PS & Xbox</Link>
                <Link to="#">Virtual Reality</Link>
                <Link to="#">Game gears</Link>
                <Link to="#">View all</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCategory;
