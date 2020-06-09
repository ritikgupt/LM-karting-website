import React, {Component} from 'react'
import abt1 from '../img/abt1.jpg'
import abt2 from '../img/abt2.jpg'
import abt3 from '../img/abt3.jpg'
import spcss from './Spabt.css';

class About extends Component{
    render(){
        return(
            <div>
    <div style={{margin:'32px'}}>
<div class="row" style={{marginBottom: '50px'}}>
		<div >
			<h1>ABOUT EVENT</h1>
			<br />
			
			<p style={{color: '#666'}}>
				<img src={abt1} alt='abt 1' class="img-fluid" style={{ float: 'right', width: '400px', paddingLeft: '20px'}} />
				Le Mans Karting Racing aim to produce some of the innovative and edge cutting Engineers in India. Organization is dedicated to motivate Engineering students across nation by organizing different real time engineering challenges . To provide an practical exposure to theoretical knowledge is an key to develop and innovate some of edge cutting technologies.
				<br />
				
				The LM Karting competition is an initiative taken by AMZ Automotive in collaboration with RGUKTN (AP) and MES International in order to provide on hand practice and exposure to Future automotive professional’s.
			</p>
			
		</div>
		<br />
	</div>
	<div class="row">
		
		<br/>
		<br/>
		<br/>
		<div class="col-lg-5">
		    <img src={abt2} width="100%" alt='abt2'/>
		</div>
		<div class="col-lg-7">
		    <h2>Objective</h2>
			<p style={{color: '#666'}}>
			    LM Karting is an intercollegiate engineering design competition for undergraduate and graduate engineering students. The objective of the competition is to simulate real-world engineering design projects and their related challenges. Each team is competing to have its design accepted for manufacture by a fictitious firm.
 The students must function as a team to design, engineer, build, test, promote and compete with a vehicle within the limits of the rules. They must also generate financial support for their project and manage their educational priorities 

			    
		    </p>
		</div>
	</div>
	<br/>
	<div class="row">	
	
		<br/>
		<div class="col-md-5">
		    <img src={abt3} class="img-fluid" width= "100%" alt='abt3'/>
		</div>
		<div class="col-md-7">
		    <h2>Design subject</h2>
			<p style={{color: "#666"}}>
			    Each team's goal is to design and build a single-seat, dirt road orting vehicle whose structure contains the driver. The vehicle is to be a prototype for a reliable, maintainable, ergonomic, and economic production vehicle which serves a recreational user market, sized at approximately 1000 units per year. 

			    
			</p>
		</div>
		<br/>
	</div>
</div>


<div class="shedule" style={{border: '1.5px solid #d00', borderRadius: "3px"}}>
				<h5 style={{backgroundColor: '#d00', color: 'white',padding: '15px'}}>Schedule</h5>
				<div class="table-responsive">
					<table class="table " style={{marginBottom: "5px"}}>
						<tr>
							<td>Team Registration starts</td>
							<td>25th March 2020</td>
						</tr>
						<tr>
							<td>Pre-Virtual Workshop</td>
							<td>Online for registered team</td>
						</tr>
						<tr>
							<td>Virtual Presentation</td>
							<td>1st August 2020</td>
						</tr>
						<tr>
							<td>Result of Virtual Presentation</td>
							<td>5th August 2020</td>
						</tr>
 
						<tr>
							<td>Cost and Business Plan Presentaion Submission </td>
							<td>10th August 2020</td>
						</tr>
						<tr>
							<td>Final Design & other Report Submission</td>
							<td>20th August 2020</td>
						</tr>
						<tr>
							<td>Testing and Promotional Video Submission</td>
							<td>20th August 2020</td>
						</tr>
						<tr>
							<td>Final Round(Race Day)</td>
							<td>3rd-4th September 2020</td>
						</tr>
					</table>
				</div>
			</div>
<div class="m-5">
<h2>EVENTS EXECUTES IN 5 STAGES</h2>
<nav class="container m-4">
<div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-learn" role="tab" aria-controls="nav-home" aria-selected="true">LEARN</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-design" role="tab" aria-controls="nav-profile" aria-selected="false">DESIGN</a>
    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-fabricate" role="tab" aria-controls="nav-home" aria-selected="true">FABRICATE</a>
    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-opt" role="tab" aria-controls="nav-home" aria-selected="true">OPTIMIZATION</a>
    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-race" role="tab" aria-controls="nav-home" aria-selected="true">RACE</a>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active container m-4" id="nav-learn" role="tabpanel" aria-labelledby="nav-home-tab">
  	<h3> LEARN </h3>
  	<p>This is the introductory step where the teams are given the pre- requiste training for designing their own Go Kart. For this purpose we will conduct a pre virtual workshop in which we will teach every team about vehicle dynamics and designing and balancing of professional Go Kart.</p>
  </div>
  <div class="tab-pane fade container m-4" id="nav-design" role="tabpanel" aria-labelledby="nav-home-tab">
  	<h3> DESIGN </h3>
  	<p>Each team's goal is to design and build a single-seat, on road kart, sporting vehicle whose structure contains the driver. In this process participants will learn various aspects of vehicle like Static and Dynamic analysis with different load Conditions applied on Vehicle.</p>
  </div>
  <div class="tab-pane fade container m-4" id="nav-fabricate" role="tabpanel" aria-labelledby="nav-home-tab">
  	<h3> FABRICATE </h3>
  	<p>All the teams which will clear the design round will proceed to fabrication round in which they will be asked to manufacture the vehicle on their own that they have designed. Vehicles entered into LM Karting-2020 competitions are expected to be designed and fabricated in accordance with sound engineering practices.</p>
  </div>
  <div class="tab-pane fade container m-4" id="nav-opt" role="tabpanel" aria-labelledby="nav-home-tab">
  	<h3> OPTIMIZATION </h3>
  	<p>Designed it –built it – now its time to test it. In this round teams will test their cars and make the required changes and optimize the cars performance before brining it to the final race.</p>
  </div>
  <div class="tab-pane fade container m-4" id="nav-race" role="tabpanel" aria-labelledby="nav-home-tab">
  	<h3> RACE </h3>
  	<p>You build the car with all your hard work and now its time to show everyone what you are capable of.
“ Its race time”……</p>
  </div>
</div>
</div>
</div>


        );
    }
}
export default About;