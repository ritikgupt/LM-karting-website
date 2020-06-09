import React, {Component} from 'react'
import sp1 from '../img/sponsor/sp1.jpg'
import sp2 from '../img/sponsor/sp2.jpg'
import sp3 from '../img/sponsor/sp3.jpg'
import sp4 from '../img/sponsor/sp4.jpg'
import sp5 from '../img/sponsor/sp5.jpg'
import sp6 from '../img/sponsor/sp6.jpg'
import sp7 from '../img/sponsor/sp7.jpg'
import sp8 from '../img/sponsor/sp8.jpg'
import spcss from './Spabt.css';
class Sponsor extends Component{
render(){
    return(
        <div>
            <center><h1>SPONSORS</h1><br/></center>
		<div class="row align-items-center spn">
		    
			<div class="col-lg-4 col-md-6 col-sm-12">
			    <img src={sp1} style={{width: '100%'}} alt='sp' />
			    <center><a href="http://www.maxperience.in/">http://www.maxperience.in/</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp2} style={{width: '100%'}} alt='sp'/>
			    <center><a href="http://ultimatedesertchallenge.com/">http://ultimatedesertchallenge.com/</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp3} style={{width: '100%'}} alt='sp'/>
			    <center><a href="#">Dune Adventure Sports Club</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp4} style={{width: '100%'}} alt='sp'/>
			    <center><a href="http://amkindustry.com/">http://amkindustry.com/</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp5} style={{width: '100%'}} alt='sp'/>
			    <center><a href="http://www.amzautomotive.com">http://www.amzautomotive.com</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp6} style={{width: '100%'}} alt='sp'/>
			    <center><a href="http://www.rcdcindia.com">http://www.rcdcindia.com</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp7} style={{width: '100%'}} alt='sp'/>
			    <center><a href="http://www.edmrcgroup.com" >http://www.edmrcgroup.com</a></center>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12">
                <img src={sp8} style={{width: '100%'}} alt='sp'/>
			    <center><a href="https://rguktn.ac.in/" >https://rguktn.ac.in/</a></center>
			</div>
				
		</div>
	</div>
    );
}
}
export default Sponsor;