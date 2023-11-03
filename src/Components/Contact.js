import React from "react";
import "./Contact.css"
import Header from "./Header";
import { Link } from "react-router-dom";
const Contact=()=>{
   return<>
   <Header/>
   <div className="infu">
    <div className="maininfu">
        <h3>Phone Number</h3>
        <h4>8894381093</h4><br/><br/>
        <h3>Gmail</h3>
        <h4>rhul4322gmail.com</h4><br/><br/>
        <h3>LinkedIn</h3>
        <Link to="https://www.linkedin.com/in/shubham-shubham-18162428b">Click Here</Link><br/><br/>
        <h3>GitHub</h3>
        <Link to="https://github.com/shubham321-ux">Click Here</Link>
    </div>
   </div>
   </>
}
export default Contact