import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "./loader";
import axios from 'axios';
import './home.css'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState("");

  const callAboutPage = async () => {
    try {
      const res = await fetch('/user', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(`token nahi hai`);
      navigate('/login');
    }
  }


  useEffect(() => {
    callAboutPage();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const [images, setImage] = useState([]);

  useEffect(() => {
    setTimeout(fetchImages(), 2000)
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then(res => setImage([...images, ...res.data]))
    // .then(res => console.log(res.data)) 
  } 

  return (
    <>
    <InfiniteScroll 
      dataLength = {images.length}
      next={fetchImages}
      hasMore ={true}
      loader= {<Loader/>}
      >
{/* <Loader/> */}
    <div className="container courses_container">
            <div className="course_image">
              {images.map(image => (
                <img src={image.urls.thumb} key={image.id} alt="" />
              ))}
            </div>
        </div>
    </InfiniteScroll>

    </>
  )
}

export default Home