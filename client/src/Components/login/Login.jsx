import { useState, useContext } from 'react'
import IMG from '../../assests/login.png'
import './login.css'
import {useNavigate} from 'react-router-dom'

import {UserContext} from "../../App"

const Login = () => {

  const {mystate, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async(e) => {
    e.preventDefault();

    const res = await fetch('/login', {
      method: "POST",
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,password
      })

    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid  Details");

    }else {
      dispatch({type:'USER', payload:true})
      window.alert("Login Successfull");
      navigate('/')
    }
  }

  return (
    <section className='login'>
      <div className="container login_container">
        <div className="login_left">
          <h3>Login</h3>
          <img src={IMG} alt="img" />
          <a href='/register'>Create an Account</a>
        </div>

        <div className="login_right">
          <form method='POST'> 
            <input type="text" name='email' id='email' value={email} onChange = {(e) => setEmail(e.target.value)} autoCapitalize= "off"  placeholder='Your Email' required/>
            <input type="text" name='password' id='password' autoCapitalize= "off" value={password} onChange =
             {(e) => setPassword(e.target.value)} placeholder='Password' required/>
            <button type='submit' onClick={loginUser} className='btn btn-primary'>Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login