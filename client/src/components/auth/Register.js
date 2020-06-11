import React, {Component} from 'react'
import axios from 'axios';
class Register extends Component{
    constructor(){
		super();
		this.state={
            msg:'',
            teamname:'',
            captainname:'',
            college:'',
            city:'',
            state:'',
            category:'',
            phone: '',
            email:'',
            emaillog:'',
		};
		this.onChange = this.onChange.bind(this);
        this.onSubmitReg =this.onSubmitReg.bind(this);
		this.onSubmitLog =this.onSubmitLog.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });	
    }
    onSubmitReg(e){
            e.preventDefault();
            if(this.state.phone.length!=10){
                this.setState({msg:'Phone number should be of 10 digits'});
            }
            else if(this.state.category ==''){
                this.setState({msg:'Please choose a category'});
            }
            else{
            const newTeam = {
                teamname:this.state.teamname,
                captainname:this.state.captainname,
                college:this.state.college,
                city:this.state.city,
                state:this.state.state,
                category:this.state.category,
                phone:this.state.phone,
                email:this.state.email,
    };
        this.setState({
            teamname:'',
            captainname:'',
            college:'',
            city:'',
            state:'',
            category:'',
            phone:'',
            email:'',
        });
        axios.post('/register', newTeam)
        .then(response => this.setState({msg:response.data.msg}))
        .catch()
    }
        }
        onSubmitLog(e){
            e.preventDefault();
            const userData = {
                emaillog: this.state.emaillog,
                passwordlog: this.state.passwordlog
              };
        this.setState({
            email:'',
            desc:'',
            post:''
        });
        //axios.post('/register', newPost);
        this.props.history.push('/')
        }
render(){
    return(
        <div>
        <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-reg" role="tab" aria-controls="nav-reg" aria-selected="true" style={{color: 'red'}}>Register</a>
  </div>
        </nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active container" id="nav-reg" role="tabpanel" aria-labelledby="nav-home-tab">
  <form class="m-4" onSubmit={this.onSubmitReg}>
  <center><div style={{color:'red', fontSize:'2rem'}}>{this.state.msg}</div></center>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="teamName">Team Name</label>
      <input type="text" class="form-control" name="teamname" required value={this.state.teamname}
                  onChange={this.onChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="captainName">Captain Name</label>
      <input type="text" class="form-control" name="captainname" required value={this.state.captainname}
                  onChange={this.onChange}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="college">College</label>
      <input type="text" class="form-control" name="college" required value={this.state.college}
                  onChange={this.onChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="city">City</label>
      <input type="text" class="form-control" name="city" required value={this.state.city}
                  onChange={this.onChange}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="state">State</label>
      <input type="text" class="form-control" name="state" required value={this.state.state}
                  onChange={this.onChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="category">Category</label>
      <select name="category" class="form-control" value={this.state.category} onChange={this.onChange}>
        <option hidden disaled selected> -- select an option -- </option>
        <option>ELECTRIC</option>
        <option>PETROL</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="phone">Phone</label>
      <input type="number" class="form-control" name="phone" required value={this.state.phone}
                  onChange={this.onChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="email">E-mail</label>
      <input type="email" class="form-control" name="email" required value={this.state.email}
                  onChange={this.onChange}/>
    </div>
  </div>
  <button type="submit" class="btn btn-danger" name="reg">Register Now</button>
</form>
</div>

 
</div>

        </div>
    );
}}

export default Register;