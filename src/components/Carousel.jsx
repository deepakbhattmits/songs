import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../assets/stylesheets/main.css";   

import img1 from "../assets/images/slide1.png";
import img2 from "../assets/images/slide2.png";
import img3 from "../assets/images/slide3.png";
import img4 from "../assets/images/slide4.png"; 
import img5 from "../assets/images/slide5.png";
import img6 from "../assets/images/slide6.png";
import img7 from "../assets/images/slide7.png";
import img8 from "../assets/images/slide8.png";
import img9 from "../assets/images/slide9.png";
import img10 from "../assets/images/slide10.png";
class DemoCarousel extends Component {
    
    render() {
       
        return (
            <Carousel>
                <div className="post">
                    <img key='1' alt="demo" src={img1} />
                    <a href="#/one" ><span className="legend">Legend 1</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img2} />
                    <a href="#/two"><span className="legend">Legend 2</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img3} />
                    <a href="#/three"><span className="legend">Legend 3</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img4} />
                    <a href="#/four"><span className="legend">Legend 4</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img5} />
                    <a href="#/five"><span className="legend">Legend 5</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img6} />
                    <a href="#/six"><span className="legend">Legend 6</span></a>
                </div>
                <div className="post">
                    <img skey='1' alt="demo" src={img7} />
                    <a href="#/seventh"><span className="legend">Legend 7</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img8} />
                    <a href="#/eighth"><span className="legend">Legend 8</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img9} />
                    <a href="#/ninth"><span className="legend">Legend 9</span></a>
                </div>
                <div className="post">
                    <img key='1' alt="demo" src={img10} />
                    <a href="#/tenth"><span className="legend">Legend 10</span></a>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel;