import React, {Component} from 'react'
import director from '../img/director.jpg'
import rahul from '../img/rahul.jpg'
import arvind from '../img/arvind.jpg'
import kushal from '../img/kushal.jpg'
import cardDeck from '../img/card-deck.jpg'
import engine from '../img/equipment.jpg'
import Count from './Count'
import SimpleSlider from './SimpleSlider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
class Landing extends Component{
  
   func(item,e){
    var directorText=`<h4>Prof Surya Chandra Rao</h4><h5>Director of RGUKT Nuzvid(AP IIIT)</h5><br/>
  <p class="text-justify">Prof. D. Suryachandra Rao obtained his masters degree in Management Studies from Acharya Nagarjuna University and completed his Ph.D. in Andhra University.
  He has 27 years of experience in teaching and research. He guided 9 candidates for their Ph.D., one candidate for M.Phil. so far and 7 more students are pursuing their Ph.D. He has published thirteen books and 44 research papers/articles of repute in popular International/National Journals/Magazines.
  Prof. Rao is a former Professor in the Department of Business Management, University Campus College, Krishna University, Machilipatnam, Andhra Pradesh, and also served as Dean, Faculty of Commerce and Management Studies, Krishna University. 
  He has received ‘Best Teacher Award’ for his munificent contribution as an efficient teacher and able researcher from the Government of Andhra Pradesh during year 2011.</p>`
  var rahulText=`<h4>Rahul Ranjan</h4><h5>Mentor/Technical Committee</h5>
  <br/>
  <p class="card-text text-justify">Rahul is not only responsible for looking after the product development and the vehicle design department at AMK Industry but he is also known as the most energetic person in the team. 
  He has worked as Captain and chief design engineer for BAJA-TEXAS (USA) and he has a wide grasp over the topic of vehicle design and development. Rahul is extremely passionate about driving and adventure sports and he was also a driver in BAJA-Texas(USA). 
  Rahul have in-depth knowledge of vehicle design and development and not only he is the main brain behind the product development of our company but he have also appeared as a guest lecturer for various topics on vehicle design and development and his knowledge is received by thousands of students in more than 100 colleges.</p>`
  var arvindText=`<h4>Arvind Balan</h4><h5>Mentor/Technical Committee</h5>
  <br/>
  <p class="card-text text-justify">Arvind is founder of Dune Adventure Sports Club, and the mind behind multiple motorsports events. Being an engineer and manager, along with his extensive career with Indian Oil has given him the panache for leadership.
   He is known for his creative mindset to go with his vast experience in motorsports, in all the roles starting from a rally driver till an organizer. 
   He has been in motorsport industry for over a number of years now and has been a member of organizing committee of India Baja – Dakar Challenge for both the years. His association with Team Polaris as Rally Team Manager has given him an in depth knowledge of the dynamics of a purpose built rally car. 
   He is a keen observer and a hard task master, but at the same time he knows how to identify and nurture talent by giving them opportunities. 
  This has made his club grow fast to become one of the best motorsports club of country with some stupendous events at hand.</p>`
  var kushalText=`<h4>Khushal Singh</h4><h5>Mentor/Technical Committee</h5><p class="text-justify">Khushal is the perfect example of experience and knowledge.
  His leadership skills have earned him the badge of team lead at AMZ Automotive. 
  He currently crowns the position of Research associate at elite techno groups in vehicle dynamics department. 
  He not only looks after the technical aspects of the team but he also keeps them motivated for their work. His zealous nature is the source of energy for the team and he makes sure that the spirit of his team is always high.
 Khushal is an avid adventure enthusiast and he also played the role of an ex- race marshal at Buddh international circuit. 
 His belief in exchange of knowledge and hence he appeared as Keynote speaker at the international conference on future trends and challenges in mechanical engineering and also Delivered guest lectures on vehicle dynamics in more than 100 colleges in India and UAE to more than 20,000 students.</p>`

		if(item==1)
      {document.getElementById("tabContent").innerHTML=directorText;
      document.getElementById("1").firstChild.classList.add("border");
      document.getElementById("2").firstChild.classList.remove("border");
      document.getElementById("3").firstChild.classList.remove("border");
      document.getElementById("4").firstChild.classList.remove("border");}
    if(item==2)
      {document.getElementById("tabContent").innerHTML=rahulText;
      document.getElementById(""+item).firstChild.classList.add("border");
      document.getElementById("1").firstChild.classList.remove("border");
      document.getElementById("3").firstChild.classList.remove("border");
      document.getElementById("4").firstChild.classList.remove("border");}
    if(item==3)
      {document.getElementById("tabContent").innerHTML=arvindText;
      document.getElementById(""+item).firstChild.classList.add("border");
      document.getElementById("1").firstChild.classList.remove("border");
      document.getElementById("2").firstChild.classList.remove("border");
      document.getElementById("4").firstChild.classList.remove("border");}
    if(item==4)
      {document.getElementById("tabContent").innerHTML=kushalText;
      document.getElementById(""+item).firstChild.classList.add("border");
      document.getElementById("2").firstChild.classList.remove("border");
      document.getElementById("3").firstChild.classList.remove("border");
      document.getElementById("1").firstChild.classList.remove("border");}
  }
  render(){
    return(
        <div>
          <section class="about container mb-4">
	<div class="heading row">
  <div class="col-sm-2 col-lg-2"></div>
	<div class="col-sm-4 col-lg-4" style={{fontWeight: 600,  fontSize:'2rem', width: '50%', float:'left', textAlign: 'right'}} >ABOUT</div>
	<div class="vl " style={{width: '0%', float: 'left'}}></div>
    <div class="col-sm-4 col-lg-4" style={{color:'red', width: '40%', float: 'left', textAlign: 'left', margin:'auto 0'}}>LMKARTING</div>
	<div class="col-sm-2 col-lg-2"></div>
  </div>
    <p >Le Mans Karting Racing aim to produce some of the innovative and edge cutting Engineers in India. 
      Organization is dedicated to motivate Engineering students across nation by organizing different real time engineering challenges .
       To provide practical exposure to theoretical knowledge is key to develop and innovate some of edge cutting technologies.</p>
    <p>The LM Karting competition is an initiative taken by AMZ Automotive in collaboration with RGUKTN (AP) and MES International in order to provide hands on practice and exposure to Future automotive professionals.</p>

</section>
<SimpleSlider disp="tier" width="100%"/>
<div class="row rkugt mb-4" style={{ alignItems: 'center'}}>
  <div class="column50">
  	<h4 style={{color: 'red'}}>ABOUT US</h4>
  	<h4 style={{color:'white'}}> RGUKT Nuzvid</h4>
  	<h4 style={{color:'white'}}>AP (IIIT)</h4>
  </div>
  <div class="column50 text-justify">
  	<p class="m-4" style={{color:'white'}}>RGUKT has emerged from the desire of Dr.Raj Reddy to cater the educational needs of the meritorious rural youth in each and every corner of state. 
      It was esatablished in the year 2008 by an act of AP state legislature offering six years integrated B.Tech program in various disciplines like CHEM, CE, CSE, ECE, ME and MME departments with well equipped laboratories and highly competent faculty. 
      It is educating more than 6,000 students not only in the academics but also in many exrtacurricular activities like Fine Arts, NCC, NSS, Sports, Yoga etc.</p>
  </div>
</div>
<div height="100px">
<SimpleSlider disp="engine" width="100%"/>
</div>
<Count />
<section className="container mt-5">
<h1 class="text-center m-4"> Steering Committee </h1>
<div class="row mb-5">
<div class="col-sm-7">
<div class="row">
    <a id="1" onClick={this.func.bind(this,1)} href="#committee"><img src={director} width="200px" height="200px" class="m-5" id="8" /></a>
    <a id="2" onClick={this.func.bind(this,2)} href="#committee"><img src={rahul} width="200px" height="200px" class="m-5" /></a>
</div>
<div class="row">
    <a id="3" onClick={this.func.bind(this,3)} href="#committee"><img src={arvind} width="200px" height="200px" class="m-5" /></a>
    <a id="4" onClick={this.func.bind(this,4)} href="#committee"><img src={kushal} width="200px" height="200px" class="m-5" /></a>
</div>
</div>
<div class="col-sm-5" id="tabContent">
<h4>Prof Surya Chandra Rao</h4><h5>Director of RGUKT Nuzvid(AP IIIT)</h5>
<br/>
    <p class="card-text text-justify">Prof. D. Suryachandra Rao obtained his masters degree in Management Studies from Acharya Nagarjuna University and completed his Ph.D. in Andhra University. 
    He has 27 years of experience in teaching and research. He guided 9 candidates for their Ph.D., one candidate for M.Phil. so far and 7 more students are pursuing their Ph.D. He has published thirteen books and 44 research papers/articles of repute in popular International/National Journals/Magazines.
     Prof. Rao is a former Professor in the Department of Business Management, University Campus College, Krishna University, Machilipatnam, Andhra Pradesh, and also served as Dean, Faculty of Commerce and Management Studies, Krishna University. 
    He has received ‘Best Teacher Award’ for his munificent contribution as an efficient teacher and able researcher from the Government of Andhra Pradesh during year 2011.</p>
  
</div>
</div>
</section>
{/* <section className="container">
<h2 class="text-center m-4"> Steering committee </h2>
<div class="row mb-5" >
<div class="card col-md-6 col-lg-6 mx-auto shadow p-3 bg-white" style={{border:'1px solid #ccc'}}>
  <img src={director} style={{width:'150px', height:'200px', margin:'5px auto'}} class="card-img-top" alt="..." />
  <div class="card-body">
    <div class="card-title text-center"><h4>Prof Surya Chandra Rao</h4><h5>Director of RGUKT Nuzvid(AP IIIT)</h5></div>
    <br/>
    <p class="card-text text-justify">Prof. D. Suryachandra Rao obtained his masters degree in Management Studies from Acharya Nagarjuna University and completed his Ph.D. in Andhra University. 
    He has 27 years of experience in teaching and research. He guided 9 candidates for their Ph.D., one candidate for M.Phil. so far and 7 more students are pursuing their Ph.D. He has published thirteen books and 44 research papers/articles of repute in popular International/National Journals/Magazines.
     Prof. Rao is a former Professor in the Department of Business Management, University Campus College, Krishna University, Machilipatnam, Andhra Pradesh, and also served as Dean, Faculty of Commerce and Management Studies, Krishna University. 
    He has received ‘Best Teacher Award’ for his munificent contribution as an efficient teacher and able researcher from the Government of Andhra Pradesh during year 2011.</p>
  </div>
</div>
<div class="card col-md-6 col-lg-6 mx-auto shadow p-3 bg-white rounded" style={{border:'1px solid #ccc'}}>
  <img src={rahul} style={{width:'150px', height:'200px', margin:'5px auto'}} class="card-img-top" alt="..." />
  <div class="card-body">
    <div class="card-title text-center"><h4>Rahul Ranjan</h4><h5>Mentor/Technical Committee</h5></div>
    <br/>
    <p class="card-text text-justify">Rahul is not only responsible for looking after the product development and the vehicle design department at AMK Industry but he is also known as the most energetic person in the team. 
    He has worked as Captain and chief design engineer for BAJA-TEXAS (USA) and he has a wide grasp over the topic of vehicle design and development. Rahul is extremely passionate about driving and adventure sports and he was also a driver in BAJA-Texas(USA). 
    Rahul have in-depth knowledge of vehicle design and development and not only he is the main brain behind the product development of our company but he have also appeared as a guest lecturer for various topics on vehicle design and development and his knowledge is received by thousands of students in more than 100 colleges.</p>
  </div>
</div>
<div class="card col-md-6 col-lg-6 mx-auto shadow p-3 bg-white" style={{border:'1px solid #ccc'}}>
  <img src={arvind} style={{width:'150px', height:'200px', margin:'5px auto'}} class="card-img-top" alt="..." />
  <div class="card-body">
    <div class="card-title text-center"><h4>Arvind Balan</h4><h5>Mentor/Technical Committee</h5></div>
    <br/>
    <p class="card-text text-justify">Arvind is founder of Dune Adventure Sports Club, and the mind behind multiple motorsports events. Being an engineer and manager, along with his extensive career with Indian Oil has given him the panache for leadership.
     He is known for his creative mindset to go with his vast experience in motorsports, in all the roles starting from a rally driver till an organizer. 
     He has been in motorsport industry for over a number of years now and has been a member of organizing committee of India Baja – Dakar Challenge for both the years. His association with Team Polaris as Rally Team Manager has given him an in depth knowledge of the dynamics of a purpose built rally car. 
     He is a keen observer and a hard task master, but at the same time he knows how to identify and nurture talent by giving them opportunities. 
    This has made his club grow fast to become one of the best motorsports club of country with some stupendous events at hand.</p>
  </div>
</div>
<div class="card col-md-6 col-lg-6 mx-auto shadow p-3 bg-white" style={{border:'1px solid #ccc'}}>
  <img src={kushal} style={{width:'150px', height:'200px', margin:'5px auto'}} class="card-img-top" alt="..." />
  <div class="card-body">
    <div class="card-title text-center"><h4>Khushal Singh</h4><h5>Mentor/Technical Committee</h5></div>
    <br/>
    <p class="card-text text-justify">Khushal is the perfect example of experience and knowledge.
     His leadership skills have earned him the badge of team lead at AMZ Automotive. 
     He currently crowns the position of Research associate at elite techno groups in vehicle dynamics department. 
     He not only looks after the technical aspects of the team but he also keeps them motivated for their work. His zealous nature is the source of energy for the team and he makes sure that the spirit of his team is always high.
    Khushal is an avid adventure enthusiast and he also played the role of an ex- race marshal at Buddh international circuit. 
    His belief in exchange of knowledge and hence he appeared as Keynote speaker at the international conference on future trends and challenges in mechanical engineering and also Delivered guest lectures on vehicle dynamics in more than 100 colleges in India and UAE to more than 20,000 students. 
    Having such a vast experience in both theoretical and practical aspects of vehicle dynamics has enabled him to help the race teams in vehicle dynamics related problems.</p>
  </div>
</div>
</div>
</section> */}
<img src={cardDeck} style={{width:'100%'}} alt="" />
<SimpleSlider disp="sponsor"/>
        </div>
    );
}
}

export default Landing;