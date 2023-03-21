import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Form.css";
const Home = () => {
    const navigate = useNavigate();
    const remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        navigate("/") 
     };
  return (
    <>
    <div style={{textAlign:"center",marginTop:"10px"}}>Home</div>


<button onClick={remove} class="glow-on-hover" type="button" style={{textAlign:"center" ,marginTop:"50px"}}>Logout</button>


      
    
   
    </>
  )
}

export default Home;