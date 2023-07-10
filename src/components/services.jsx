import React from "react";
import {Carousel} from "react-responsive-carousel";
import c1 from "../assets/carosal1-min.jpg";
import c2 from "../assets/carosal-2-min.jpg";
import c3 from "../assets/carasol3-min.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Services=()=>{
    return(
    <>
        <div className="serv">
            <Carousel
            infiniteLoop 
            autoPlay 
            showStatus={false} 
            showArrows={false} 
            showThumbs={false} 
            showIndicators={false} 
            interval={2000}
            >
                <div>
                    <img src={c1} alt="c1" />
                    <h2>Tech solutions</h2>
                </div>
                <div>
                    <img src={c2} alt="c2" />
                    <h2>Full stake Solutions</h2>
                </div>
                <div>
                    <img src={c3} alt="c3" />
                    <h2>Analytics Solutions</h2>
                </div>
            </Carousel>
        </div>
        <div id="fifth">
    <div>
        <h1>Ablaze</h1>
        <p>@All rights Reserved</p>
        </div>
        <div>
            <h3>Follow us</h3>
            <a href="">Linkedin</a>
            <a href="">Instagram</a>
            <a href="">Github</a>
        </div>
    </div>

    </>
    )
}

export default Services;