import React from 'react'
import "./footer.css"
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <div className="footer_1">
                <a href="/" className='foooter_logo'><h4>AYUSH</h4></a>
                <p>Web Developer</p>
            </div>

            <div className="footer_2">
                <h4>Permalinks</h4>
                <ul className="permalinks">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer_3">
                <h4>Primacy</h4>
                <ul className="privacy">
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>Terms and Conditions</a></li>
                    <li><a href='/'>Refund Policy</a></li>
                </ul>
            </div>

            <div className="footer_4">
                <h4>Contact Us</h4>
                <div>
                    <p>+91 919 191 1978</p>
                    <p>ayushbhatt1425@gmail.com</p>
                </div>

                <ul className="footer_socials">
                    <li>
                        <a href="www.facebook.com"><AiFillFacebook/></a>
                    </li>
                    <li>
                        <a href="www.facebook.com"><AiFillInstagram/></a>
                    </li>
                    <li>
                        <a href="www.facebook.com"><AiFillGithub/></a>
                    </li>
                    <li>
                        <a href="www.facebook.com"><AiFillLinkedin/></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer_copyright">
                <small>Copyright &copy; AYUSH_BHATT</small>
            </div>
    </footer>
  )
}

export default Footer