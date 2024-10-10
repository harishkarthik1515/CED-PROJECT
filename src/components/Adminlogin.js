import React from "react";
import './Adminlogin.css';
import userdabba from'./userbox.png';
import eye from './eye2.png';
import signimg from './signin.png';



function Adminlogin(){
    return(
        <div className="adminlogin-container">
            <div className="head11">
                <h6 className="headadmin">ADMIN LOGIN</h6>
                <p className="un">User Name</p>
                <p className="pass">Password</p>
                <img src={userdabba} className="userbox" alt='userbox'/>
                <img src={userdabba} className="userbox2" alt='userbox'/>
                <img src={eye} className="eyeimg" alt='eye2'/>
                <p className="fp">Forgot Password?</p>
                <img src={signimg} className="signimg" alt="signin"/>
            </div>
        </div>
    )
}
export default Adminlogin;