import "./project.css"
import Header from "./Header.js"
import { Link } from "react-router-dom"
const Project=()=>{
    return<>
    <Header/>
    <div className="seeproject">
        <div className="detailofproject">
    <h3>To see my projects go to my GitHub Repository</h3><br/>
 <h2>  <Link to="https://github.com/shubham321-ux">Click here</Link></h2><br/>
 <img className="git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
  
    </div>
    </div>
    </>
}
export default Project