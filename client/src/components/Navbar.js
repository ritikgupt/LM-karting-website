import React, {Component} from 'react'
import { Link} from 'react-router-dom';
import logo from '../img/logo.jpg'
class Navbar extends Component{
render(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light  ">
  <Link class="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link"  to="/">HOME </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">ABOUT</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/sponsor">SPONSORS</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/download">DOWNLOADS</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/reglogin">REGISTER/LOGIN</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">CONTACT</Link>
      </li>
    </ul>
  </div>
</nav>
<hr />
</div>
        )
}
}

export default Navbar;