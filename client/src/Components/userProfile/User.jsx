import React, { useEffect, useState } from 'react'
import IMG from '../../assests/user.png'
import './user.css'
import { useNavigate } from 'react-router-dom'

const User = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState("");

  const callAboutPage =  async () => {
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

      if(!res.status === 200) {
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
  


  return (
    <section className='user_profile'>
      <form method='GET'>
      <div className="container user_profile-container">
        <div className="user_image">
          <h3>Profile</h3>
          <img src={IMG} alt="img" />
        </div>

        <div className="user_profile-header">
          <h2>{userData.name}</h2>
          <h3>{userData.work}</h3>

          <div className="user_info">
            <div className='user_info-left'>
            <p>UserId</p>
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Proffesion</p>
            </div>
            <div className="user_info-right">
              <p>{userData._id}</p>
              <p>{userData.name}</p>
              <p>{userData.email}</p>
              <p>{userData.phone}</p>
              <p>{userData.work}</p>
            </div>

          </div>
        </div>
      </div>
    </form>
    </section>
  )
}

export default User;