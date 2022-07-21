import React from 'react'
import "./landingpage.css" // import the css file
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className='main-container'>
        <div className='container'>
        <div className='img-div'>
           <img src="./Assets/10x-img.jpeg" alt="10x-img" className="img-10x"/>
        </div>
        <div className='description-div'>
            <h1>10x Team 04</h1>
            <Link to="./postview" className='enter-btn' type='button'>Enter</Link>
        </div>
        </div>
    </div>
  )
}

export default LandingPage