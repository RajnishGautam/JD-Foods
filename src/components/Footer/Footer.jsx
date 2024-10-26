import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
               
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
            <li>
            <a href="tel:+94765489545" style={{ color: '#d9d9d9', textDecoration: 'none' }}>+91 9905955461</a>
             </li>
            <li>
            <a href="mailto:dulanjalisenarathna93@gmail.com" style={{ color: '#d9d9d9', textDecoration: 'none' }}>rajnish09032003@gmail.com</a>
            </li>
            </ul>
            </div>

           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Rajnish - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer