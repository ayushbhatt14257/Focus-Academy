import React from 'react'
import IMG from '../../assests/register.svg'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {AiFillUnlock} from 'react-icons/ai'
import {AiFillLock} from 'react-icons/ai'
import './register.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email:"", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value

  const handleInput = (e) => {
    name = e.target.name
    value = e.target.value;

    setUser({...user, [name]:value})
  }
 

  const postData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name, email, phone, work, password, cpassword
      })
      
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert('Invalid Registration');
      console.log("Invalid Registration")

    } else {
      window.alert("Registration Successfull");
      console.log("SuccessFul Registraion");
      navigate('/');
    }
  }

  return (
    <section className='register'>
      <div className="container register_container">
        <div className="image_side">
          <h3>Register</h3>
        <img src={IMG} alt="" />
        <a href="/login">Already Register</a>
        </div>

        <div className="form_side">
          <form method='POST'>
            <div className='input_fild'> 
              <input type="text" name='name' id='name' value = {user.name} onChange = {handleInput} placeholder='Your Name' />
              <i className='register_icon'><AiOutlineUser/></i>
            </div>

            <div className='input_fild'> 
              <input type="text" name='email' autoCapitalize= "off" id='email' value = {user.email} onChange = {handleInput} placeholder='Your Email'  />
              <i className='register_icon'><AiOutlineMail/></i>
            </div>

            <div className='input_fild'> 
              <input type="text" name='phone' id='phone' value = {user.phone} onChange = {handleInput} placeholder='Your Phone' />
              <i className='register_icon'><AiOutlinePhone/></i>
            </div>

            <div className='input_fild'> 
              <input type="text" name='work' id='work' value = {user.work} onChange = {handleInput} placeholder='Profession' />
              <i className='register_icon'><MdOutlineWorkOutline/></i>
            </div>

            <div className='input_fild'> 
              <input type="text" name='password' id='password' autoCapitalize= "off" value = {user.pasword} onChange = {handleInput} placeholder='Your Password' />
              <i className='register_icon'><AiFillUnlock/></i>
            </div>

            <div className='input_fild'> 
              <input type="text" name='cpassword' id='cpassword' autoCapitalize= "off" value = {user.cpassword} onChange = {handleInput} placeholder='Confirm Password' />
              <i className='register_icon'><AiFillLock/></i>
            </div>

            <button type='submit' className='btn btn-primary' onClick={postData}>Register</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register