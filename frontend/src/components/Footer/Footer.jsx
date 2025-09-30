
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Home Cooked Express is more than just a meal delivery service—it's a bridge between kitchens and hearts. We strive to connect food enthusiasts with the warmth of homemade meals crafted by passionate home cooks. Every dish tells a story, every ingredient carries care, and every bite brings you closer to the comfort of home. Join us as we celebrate the art of cooking, the joy of sharing, and the beauty of togetherness. Whether you're craving traditional flavors or exploring new culinary delights, we've got something special for you. Your journey with Home Cooked Express doesn't end with food; it begins with memories, culture, and love. Thank you for letting us bring a slice of home to your table, one meal at a time. Stay connected and be part of our family—because home is where the heart is.</p>
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
    <li>Privacy policy</li>
</ul>
        </div>
        <div className="footer-content-right">

<h2>GET IN TOUCH</h2>
<ul>
    <li>+880 1234567899</li>
    <li>contact@homecookedexpress.com</li>
</ul>
        </div>
      
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 pciu © HomeCookedExpress.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
