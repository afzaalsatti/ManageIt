import React, { Component } from 'react'
import rideHistory from './rideHistory'
import './TransHistory.css'
import BookinHistory from './BookingHistory'
const RideHistory=rideHistory;
var userInfo;
export default class TransHistory extends Component {
    constructor(props)
    {
        super(props);
        userInfo=JSON.parse(localStorage.getItem("userInfo"));
        this.changeHeadingToggleHover=this.changeHeadingToggleHover.bind(this);
        this.toggleComponent=this.toggleComponent.bind(this);
      
        this.state={component:<BookinHistory userData={userInfo.userData}></BookinHistory>}
    }


    toggleComponent=function (e) {
const id=e.target.id;
const element=document.getElementById(id);
        if(id=="ride" && this.state.component!=<RideHistory></RideHistory>)
        {
            element.style.textDecoration="underline";
this.setState({
    component:<RideHistory userData={userInfo.userData}></RideHistory>
});

        }else if(id=="booking" )
        {
            element.style.textDecoration="underline";
this.setState({

    component:<BookinHistory userData={userInfo.userData}></BookinHistory>
});
        }
       
        
        

        
    }

    changeHeadingToggleHover=function (e) {
        const comp=document.getElementById(e.target.id);
        
comp.style.cursor="pointer";
        if(comp.style.color=="white")
        {
            comp.style.color="black";   
            comp.style.textDecoration="none";  
        }
        else{
            comp.style.color="white";
        }
    }
    render() {
        return (
            <div>
             
<div id="trans_hist_nav_div"> 

<text onClick={this.toggleComponent}  style={{color:'white'}} onMouseEnter={this.changeHeadingToggleHover} onMouseLeave={this.changeHeadingToggleHover} className="trans_hist_nav_heading" id ="booking">
    Bookings
</text>

<text onClick={this.toggleComponent} style={{color:'white'}} onMouseEnter={this.changeHeadingToggleHover} onMouseLeave={this.changeHeadingToggleHover} className="trans_hist_nav_heading"  id ="ride">
   Ticket Purchases
</text>

</div>
{this.state.component}

            </div>
        )
    }
}
