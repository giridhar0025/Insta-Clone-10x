import React, { useState } from 'react'
import './form.css'
import FileBase64 from "react-file-base64";
import { createItem } from '../functions'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [input, setInput] = useState({ 
        name : "",
        location : "",
        description : "",
        PostImage : ""
     })


     const navigate = useNavigate()

    const handleFormInput = async (e) => {
        e.preventDefault()
       const result = await createItem(input)
        navigate('/postview')
       console.log(result)
    
    }

  
    
  

  
  return (
    <>
     <div className="nav-bar">
                <div className="logo-div">
                    <img className="logo" src=".\Assets\instalogo.png" alt=""></img>
                </div>
                <div className="camera-div">
                    <span class="material-symbols-outlined camera">
                        photo_camera
                    </span>
                </div>
            </div>
       <div className="form-container">
        <div className="form-card">
              <form enctype="multipart/form-data">
                <div className="form-detail">
                <input placeholder="   No file Chosen" className="sub-input"></input>    
                <label style={{ marginLeft : "0.5em", zIndex: "1", marginRight: "-6.5em"}} for="image" class="btn btn-secondary form-btn">Browse</label>
                <FileBase64 multiple={false} name="image" onDone={({ base64 }) => setInput({...input, PostImage : base64}) }  type="file" id="img" style={{ display: "none"}}/>
                </div>
                <div className="form-detail">
                    <div className="form-sub">
                    <input onChange={(e) => {setInput({...input, name : e.target.value})}}  className="sub-input" type="text" placeholder='   Author'></input>
                    </div>
                   <div className="form-sub">
                   <input onChange={(e) => {setInput({...input, location : e.target.value})}}  className="sub-input" type="text" placeholder='    Location'></input>
                   </div>
                </div>
                <div className="form-detail"> 
                    <input onChange={(e) => {setInput({...input, description : e.target.value})}}  className="des-input"  type="text" placeholder='   Description'></input>
                </div>
                <div className="form-detail post">
                    <button className="btn btn-secondary form-btn" type='submit' onClick={handleFormInput}>Post</button>
                </div>
              </form>
        </div>
       </div>
    </>
  )
}

export default Form