import React, {Component} from 'react'

class Count extends Component{
    constructor(props) {
        super(props);
   this.state = {
     seconds: '', 
     minutes: '',
     hours:'',
     days:''
   }
}
componentDidMount() {
    this.myInterval = setInterval(() => {
    var now = new Date();
    var eventDate = new Date(2020,7,21);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;
    var s=Math.floor(remTime/1000);
    var m=Math.floor(s/60);
    var h=Math.floor(m/60);
    var d=Math.floor(h/24);
    h %= 24;
    m %= 60;
    s %= 60;
    if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    if(s<10) s="0"+s;
     this.setState ({
            seconds:s,
            minutes:m,
            hours:h,
            days:d
        });
    }, 1000)
}

    render(){
        const { minutes, seconds } = this.state
        return(
            <div >
  <h1 align="center" style={{padding: '50px'}}> GET READY</h1>
  <div >
  <table class="table table-borderless able-responsive text-center" style={{width:'auto', margin:'0 auto', alignItems:'center'}}>
    <tr>
      <td id ="days" class="box">{this.state.days}</td>
      <td></td>
      <td id ="hours" class="box">{this.state.hours}</td>
      <td></td>
      <td id ="minutes" class="box">{minutes}</td>
      <td></td>
      <td id ="seconds" class="box">{seconds}</td>
    </tr>
    <tr>
      <td>days</td>
      <td></td>
      <td>hours</td>
      <td></td>
      <td>minutes</td>
      <td></td>
      <td>seconds</td>
    </tr>
  </table>
</div>
</div>
        );
    }
}

export default Count;