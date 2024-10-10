import React from "react";
import './Userlogin.css';
import eventimg from './userback.jpg';
import userdabba from './userbox.png';
import eye from './eye2.png';
import signimg from './signin.png';

function Userlogin() {
    return (
        <div className="userlogin-container">
               <div className="background">
                <img src={eventimg} className="eventimg" alt="userback"/>
            </div>
            <div className="head10">
                <h6 className="headmain">USER LOGIN</h6>
                <p className="unad">User Name</p>
                <p className="passad">Password</p>
                <img src={userdabba} className="adminbox" alt='userbox'/>
                <img src={userdabba} className="adminbox2" alt='userbox'/>
                <img src={eye} className="eyeimgad" alt='eye2'/>
                <p className="fpad">Forgot Password?</p>
                <img src={signimg} className="signimgad" alt="signin"/>
            </div>
         
        </div>
    );
}

export default Userlogin;

