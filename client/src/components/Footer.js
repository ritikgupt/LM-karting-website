import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Footer extends Component{
    render(){
return(
<footer >
  <div class="row" styles={{width:'60%', align:'center',maxHeight:'10vh'}}>
  <div class="col-sm-1"></div>
    <div class="col-sm-4">
      <h5><strong>About LM Karting</strong></h5>
      <p>Le Mans Karting Racing aim to produce some of the innovative and edge cutting Engineers in India. 
        Organization is dedicated to motivate Engineering students across nation by organizing different real time engineering challenges . </p>
    </div>
    <div class="col-sm-2 ml-4">
      <h5><strong>Quick Links</strong></h5>
      <ul >
        <li ><Link style={{color:'white'}} to="/">Home</Link></li>
        <li ><Link style={{color:'white'}} to="/about">About</Link></li>
        <li ><Link style={{color:'white'}} to="/sponsor">Sponsors</Link></li>
        <li ><Link style={{color:'white'}} to="/download">Downloads</Link></li>
      </ul>
    </div>
    <div class="col-sm-4">
      <h5><strong>Get In Touch With Us</strong></h5>
      <p>Campus Rd, IIIT Nuzvid Campus,<br/>Nuzividu, Andhra Pradesh 521201</p>
      <p>lmkarting@amzindia.com</p>
      <p>+91-9307464179</p>
    </div>
  </div>
</footer>
);

}}

export default Footer;