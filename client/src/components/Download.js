import React, {Component} from 'react'
import { Link} from 'react-router-dom';
import elec from '../img/rule-elec.docx'
import petr from '../img/rule-gasoline.docx'
import tyre1 from '../img/tyre1.jpg'
import tyre2 from '../img/tyre2.jpg'
class Download extends Component{
    render(){
        return(<div>
                <div class="row">
                <div class="col"><img src={tyre2} alt="" width="500px" height="500px"/></div>
                <div class="col"><img src={tyre1} alt="" width="500px" height="500px"/></div>
                </div>
                <div class="row">
                <div class="col"><a href={elec} download>Rule book for elctric category</a></div>
                <div class="col"><a href={petr} download={petr}>Rule book for gasoline category</a></div>
                </div>
                </div>
        );
    }
}
export default Download;