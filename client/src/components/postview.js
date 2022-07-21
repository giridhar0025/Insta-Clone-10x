import React, { useEffect } from "react"
import './postview.css';
import { useNavigate } from "react-router-dom";


const Postview = () => {
    const [posts, setPosts] = React.useState([]);

    const navigate = useNavigate()


    useEffect(() => {
        fetch('http://localhost:4000/form')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPosts(data);
            })
    }, [])

    const handleForm = () => {
          navigate('/form')
          return
    }





    return (
        <div className="container-postview">
            <div className="nav-bar">
                <div className="logo-div">
               <img className="logo" src=".\Assets\instalogo.png" alt=""></img>
                </div>
                <div className="camera-div">
                    <span onClick={handleForm} class="material-symbols-outlined camera">
                        photo_camera
                    </span>
                </div>
            </div>
            <div className="post-container">
                {
                    posts.map((post, index) => {
                        return (
                            <div className="post-cards">
                                <div className="main-details">
                                    <div className="user-details-div1">
                                        <li className="bolder-text" key={index}>{post.name}</li>
                                        <li className="lighter-text" key={index}>{post.location}</li>
                                    </div>
                                    <div className="user-details-div2">
                                    <span class="material-symbols-outlined">more_horiz</span>
                                    </div>
                                </div>
                                <div className="post-img">
                                    <img className="img" src={post.PostImage} alt=""></img>
                                </div>
                                <div className="activity">
                                    <div className="left-icons">
                                        <span class="material-symbols-outlined icon">
                                            favorite
                                        </span>
                                        <span class="material-symbols-outlined icon">
                                            send
                                        </span>

                                    </div>

                                    <div className="right-date">
                                        <p className="date">{post.date}</p>
                                    </div>
                                    </div>
                                    <div className="likes">
                                        <p className="likes-count">{post.likes} likes</p>
                                    </div>
                                  <div className="description">
                                      <p  className="bolder-text">{post.description}</p>
                                  </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Postview