import React from "react";
import './Getstarted.css';
import goldrec from './goldrec1.jpg';
import user from './user.png';
import admin from './admin.png';



function getstarted(){
   return(
    <div className="getstarted">
       
        <img src={goldrec} className="gold-dabba" alt='dabba'/>
        <p className="gold-mela">Get Started</p>
        <div className="ua">
        <img src={user} className="user-right" alt='ui'/>
        <img src={admin} className="admin-right" alt='ai'/>
        </div>
    </div>
   )
}
export default getstarted;