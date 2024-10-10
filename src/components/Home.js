import React from "react";
import './Home.css';
import image1 from './Image.jpg';
import Image2 from './image2.jpg';
import getimg from './getstarted.jpg';



function Home()
{
  return(
    <div className="home">
      <h2> Event Pulse</h2>
      <p className="pulse-keela">Your Ultimate Event Companion</p>
      <div className="image">
      <img src={image1} className="image-pic" alt="Image1" />
      <img src={Image2} className="image-pic2" alt="image2" />
      </div>
      <img src={getimg} className="ulti-keela" alt="startimg"/>
   
    </div>
  )
}
export default Home;