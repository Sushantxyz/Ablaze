import React from 'react';
import vg from "../assets/jump.webp";
import {AiFillAmazonCircle,AiFillGithub,AiFillGoogleCircle,AiFillLinkedin,AiFillYoutube,AiFillYoutubeCircle} from "react-icons/ai";

export const Home = () => {
  return (
<>
    <div id='home'>
        <main>
            <h1>
                Ablaze solutions
            </h1>
            <p>
               Tech solutions to all your problems.
            </p>
        </main>
    </div>

    <div id="home2">
        <img src={vg} alt="img" />
        <p>"Our tech solution company excels in delivering innovative and cutting-edge solutions, driving transformative outcomes for our clients through our exceptional expertise and dedication to excellence."</p>
    </div>

    <div id="third">
        <div id="home3">
            <h1>Who are we ?</h1>
            <p>Our tech solution company stands out as a leader in the industry, leveraging state-of-the-art technologies to provide comprehensive and tailored solutions to our clients. With a highly skilled and experienced team, we consistently deliver high-quality results, exceeding expectations and driving business growth. Our customer-centric approach ensures that we deeply understand our clients' needs and deliver solutions that address their unique challenges. We have a proven track record of successful projects and satisfied clients, earning us a reputation for reliability and excellence. Our commitment to continuous innovation allows us to stay ahead of the curve and provide forward-thinking solutions. We prioritize strong communication and collaboration, fostering long-term partnerships with our clients based on trust and mutual success. We pride ourselves on our ability to adapt to evolving market trends and embrace emerging technologies, enabling us to remain at the forefront of the industry. Our dedication to exceptional customer service and support ensures that our clients receive prompt assistance and guidance throughout their journey with us. Overall, our company's success is driven by our passion for technology, commitment to excellence, and unwavering focus on delivering exceptional value to our clients.
            </p>
        </div>
    </div>

    <div id="fourth">
        <div id="home4">

            <h1>BRANDS</h1>
            
            <div id="f1">
                <div
                    style={
                        {
                            animationDelay:"0.5s",
                        }
                    }
                    >
                    <article>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </article>
                </div>
                <div
                style={
                    {
                        animationDelay:"0.7s",
                    }
                }>
                    <article>
                        <AiFillLinkedin/>
                        <p>Linkedin</p>
                    </article>
                </div>
                <div
                style={
                    {
                        animationDelay:"0.9s",
                    }
                }>
                    <article>
                        <AiFillGithub/>
                        <p>Github</p>
                    </article>
                </div>

                <div
                style={
                    {
                        animationDelay:"1.2s",
                    }
                }>
                    <article>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </article>
                </div>
            </div>
        </div>
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



