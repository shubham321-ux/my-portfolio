import React from "react";
import "./App.css"
import Home from "./Components/Home.js"
import About from "./Components/About.js"
import Project from "./Components/Project"
import Contact from "./Components/Contact.js"
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
const page=()=>{
 
  
  // const change=window.open("https://www.linkedin.com/in/shubham-shubham-18162428b","_parent")
  // const git=window.open("https://github.com/shubham321-ux","_parent")
 
  return <>
 

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/About" element={<About/>}/>
  <Route path="/Project" element={<Project/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes>



  </>
  

}
export default page