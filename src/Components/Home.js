import "./Home.css"
import Header from "./Header.js"
import img2 from "C:/Users/HP/Desktop/react project/my/src/images/img2.png"
import logo from "C:/Users/HP/Desktop/react project/my/src/images/logo.png"
import { Link } from "react-router-dom"

const Home=()=>{
    return <>
    
      <Header/>
<div className="mainContant">
  <div className="detail">
    <div className="textdetails">
      <h1>Front-End </h1>
    <h2>Developer <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvECWFRSPW-AekkSg8XkR82nL4h20rYxQvz3cMc7EZEg&s"/></h2><br/>
    <p>Hi,I'm Shubham. A Front-End Developer based in Himachal Pradesh, India 📍</p><br/>
    <span><Link to="https://www.linkedin.com/in/shubham-shubham-18162428b" ><img id="linkedin"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBsY6gZgwFEgUlqVHft52Jwf0-K6VdM4P5O2VTds&s"/>
</Link> 
      <Link to="https://github.com/shubham321-ux"><img id="github"  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></Link>
    </span>
    </div>
    <div className="picture">
      <img src={img2}/>
    </div>
    
  </div>
  <div className="languages">
    <p>Teck Stack</p>
    <img src={logo}/>
    <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"/>
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
  </div>
</div>
    </>
}
export default Home