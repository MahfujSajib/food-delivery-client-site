import React from 'react';
import './OurGoal.css'

const OurGoal = () => {
    return (
        <div>
            <h2 className='mt-5 ourgoal'>Our Goal</h2>
            <hr />
            <div className='d-flex conatiner mt-5'>
                <div className='goal'>
                    Our Goal
                    Our goal is to provide sustainable and effective food delivery service by follwing these 3 targets are like appropriate access in the site for necessary food delivery services , assurance of quality workforce, services and acceptable cost to public
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sMgClSiODYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default OurGoal;