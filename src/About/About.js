import React from 'react';
import './About.css';

const About = () => {

    return (
        <div>
            <img className='img-fluid mt-5' src="https://demo.hasthemes.com/aahar-preview/aahar/images/bg/20.jpg" alt="" />
            <div className='about'>
                <div className="aboutus">
                    <h2>Watch Videos to Know more About <span className='name'>Food Lagbe?</span></h2>
                </div>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/unoXt5tujr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default About;