import React from "react";
import "./about.css"
import aboutImage from "../../images/about.jpg"

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">
                            <img src={aboutImage} alt="about.jpg" className="main-img" />
                        </div>
                        <div className="text-side">
                            <h3>About me</h3>
                            <h4>Web Developer with a Passion for Crafting Digital Experiences
                            </h4>
                            <p>Hello! I'm eepak Kumar Saini, a web developer in Mathura, UP, India, 
                                specializing in HTML, CSS, JavaScript, and React. I love turning
                                 ideas into seamless digital experiences. With a problem-solving
                                  mindset, attention to detail, and expertise in React, I create
                                   dynamic and responsive interfaces.
                                    Passionate about staying updated in the ever-evolving tech landscape,
                                    I'm currently seeking opportunities to launch my web development career.
                                    Explore my portfolio, and let's connect to discuss how I can contribute
                                    to your projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;