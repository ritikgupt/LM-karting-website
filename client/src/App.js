import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';
import Sponsor from './components/Sponsor.js';
import Register from './components/auth/Register';
import SimpleSlider from './components/SimpleSlider'
import Contact from './components/Contact.js';
import Download from './components/Download';
import Admin from './components/admin';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={SimpleSlider} width='100%' />
  				<Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/about" component={About} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/reglogin" component={Register} />
          <Route exact path="/download" component={Download} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin}/>
  			</div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
