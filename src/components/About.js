import React from 'react';
import './About.css';
import image3 from './image3.jpg';

function About() {
  return (
    <div className="about">
     <h1 className='head'>About</h1>
      <p className='head-keela'>Event Pulse simplifies event planning with intuitive registration, real-time analytics, and robust communication tools. Whether organizing corporate conferences or community events, our platform ensures seamless coordination and insightful data-driven decisions, maximizing event success and participant satisfaction. Join us in transforming your events with ease and efficiency.</p> 
      <img src={image3} className='para-right' alt='image3'/>
      
    </div>  
     
  );
}

export default About;
