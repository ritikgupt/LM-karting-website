import React, { Component } from "react";
import Slider from "react-slick";
import sp1 from '../img/sponsor/sp1.jpg'
import sp2 from '../img/sponsor/sp2.jpg'
import sp3 from '../img/sponsor/sp3.jpg'
import sp4 from '../img/sponsor/sp4.jpg'
import sp5 from '../img/sponsor/sp5.jpg'
import sp6 from '../img/sponsor/sp6.jpg'
import sp7 from '../img/sponsor/sp7.jpg'
import sp8 from '../img/sponsor/sp8.jpg'
import b1 from '../img/banner-1.jpg'
import b2 from '../img/banner-2.jpg'
import b3 from '../img/banner-3.jpg'
import tyre1 from '../img/tyre1.jpg'
import tyre2 from '../img/tyre2.jpg'
import eng from '../img/ENGINE.jpg'
import susp from '../img/SUSPENSION.jpg'
import tyre from '../img/TYRE.jpg'
export default class SimpleSlider extends Component {
  
  render() {
    var settingsp;
    if(window.innerWidth<1000)
    settingsp = {
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    else settingsp = {
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const settingbn = {
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides'
    };
    const settingtier={
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides'
    };
    if(this.props.disp=="sponsor")
    return (
      <div class="m-5">
         <center> 
           <h1 class="m-4"> Sponsors </h1>
        <Slider {...settingsp}>
          <div>
            <img src={sp1} alt=""/>
          </div>
          <div>
          <img src={sp2} alt=""/>
          </div>
          <div>
          <img src={sp3} alt=""/>
          </div>
          <div>
          <img src={sp4} alt=""/>
          </div>
          <div>
          <img src={sp5} alt=""/>
          </div>
          <div>
          <img src={sp6} alt=""/>
          </div>
          <div>
          <img src={sp7} alt=""/>
          </div>
          <div>
          <img src={sp8} alt=""/>
          </div>
        </Slider>
        </center>
      </div>
    );
    else if(this.props.disp=="tier")
    return(
        <div class="bg-light p-5">
        <Slider {...settingtier}>
        <div className="row m-5">
        <div className="col-sm-4" style={{width:'50%', float:'left'}}>
          <img src={tyre1} alt="" />
        </div>
        <div className="col-sm-6" style={{float:'right', marginRight:'40px'}}>
        <h4>Tier 1<button style={{float:'right', borderRadius:'16px', padding:'10px 20px', backgroundColor:'red', color:'white', fontWeight:600}}>PETROL</button></h4>
        <p class="text-justify" style={{color:'black', fontFamily:'serif'}}><br/>The Gasoline category comprises single seater off road go kart designed according to the Le mans gasoline category rule book. The track for the le mans gasoline category will be the longest and the toughest high speed endurance test. This is to test vehicle to the extreme capability on the rough terrain. The track will be designed like the driver can see it in naked eye. The endurance race will be held in the 4*4 patten.</p>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-4" style={{width:'50%', float:'left'}}>
          <img src={tyre2} alt="" />
        </div>
        <div className="col-sm-6" style={{float:'right'}}>
        <br/><br/><h4>Tier 2<button style={{float:'right', borderRadius:'16px', padding:'10px 20px', color:'white', backgroundColor:'red', fontWeight:600}}>ELECTRIC</button></h4>
        <p class="text-justify" style={{color:'black', fontFamily:'serif'}}><br />The Electric category comprises single seater off road go kart designed according to the Le mans electric category rule book. The track for the le mans electric category will be the longest and the toughest high speed endurance test. This is to test vehicle to the extreme capability on the rough terrain. The track will be designed like the driver can see it in naked eye. The endurance race will be held in the 4*4 patten. The event is designed like the same battery backup can be swapped ones during the race.</p>
        </div>
        </div>
        </Slider>
        </div>
    );
    else if(this.props.disp=="engine"){
      return(
        <Slider  {...settingtier}>
          <div>
          <img src={eng} alt="" width="100%" height="500px"/>
          </div>
          <div>
          <img src={susp} alt="" width="100%" height="500px"/>
          </div>
          <div>
          <img src={tyre} alt="" width="100%" height="500px"/>
          </div>
        </Slider>
      );
    }
    else return(
      <div>
        <center>
        <Slider {...settingbn}>
          <div>
            <img width='100%' src={b1} alt=""/>
          </div>
          <div>
          <img width='100%' src={b2} alt=""/>
          </div>
          <div>
          <img width='100%' src={b3} alt=""/>
          </div>
          </Slider>
        </center>
      </div>
    );
  }
}