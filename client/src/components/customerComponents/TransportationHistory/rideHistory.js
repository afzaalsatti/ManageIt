import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './rideHistory.css'

export default class rideHistory extends Component {

    constructor()
    {
        super();
this.getListItemCards=this.getListItemCards.bind(this);
    }
    getListItemCards=function(){
        var menu = [
            {
              "_id": "order ID",
              "date": "11/2/2020",
              "time": "11;20pm",
              "charges": "PKR 250",
              "vahicleMake": "Toyota",
              "model": "Corolla 2018",
              "pickup": "G8 Islamabad",
              "dropoff": "I9 Islamabad",
              "pickupCords": "73.084488,33.738045",
              "dropoffCords": "73.071442,33.626057"
            },
            {
              "_id": "order ID",
              "date": "11/2/2020",
              "time": "11;20pm",
              "charges": "PKR 250",
              "vahicleMake": "Toyota",
              "model": "Corolla 2018",
              "pickup": "G8 Islamabad",
              "dropoff": "I9 Islamabad",
              "pickupCords": "73.084488,33.738045",
              "dropoffCords": "73.071442,33.626057"
            },
            {
              "_id": "order ID",
              "date": "11/2/2020",
              "time": "11;20pm",
              "charges": "PKR 250",
              "vahicleMake": "Toyota",
              "model": "Corolla 2018",
              "pickup": "G8 Islamabad",
              "dropoff": "I9 Islamabad",
              "pickupCords": "73.084488,33.738045",
              "dropoffCords": "73.071442,33.626057"
            },
            {
              "_id": "order ID",
              "date": "11/2/2020",
              "time": "11;20pm",
              "charges": "PKR 250",
              "vahicleMake": "Toyota",
              "model": "Corolla 2018",
              "pickup": "G8 Islamabad",
              "dropoff": "I9 Islamabad",
              "pickupCords": "73.084488,33.738045",
              "dropoffCords": "73.071442,33.626057"
            },
            {
              "_id": "order ID",
              "date": "11/2/2020",
              "time": "11;20pm",
              "charges": "PKR 250",
              "vahicleMake": "Toyota",
              "model": "Corolla 2018",
              "pickup": "G8 Islamabad",
              "dropoff": "I9 Islamabad",
              "pickupCords": "73.084488,33.738045",
              "dropoffCords": "73.071442,33.626057"
            }
          ];
        
        return menu.map((key, index)=>{
            
         
            
          return  <li>
          <Card id="rideHistoryCard" >
                  <div>
          <div className="historytopdiv">
          
              <text className="date" >{key.date}</text>
              <text className="time">{key.time}</text>
              <text className="charges">{key.charges}</text>
              <br></br>
          
           </div>
           <div className="historymiddlediv">
           <img
                                      className="rideHistoryAddIcon"
                                      style={{marginLeft: '5px'}}
                                      src="/assets/svg/tickets.svg"
                                      alt
                                    />
               <text className="rideHistoryAddress">{key.pickup}</text>
          
          
               <br></br>
              <svg id ="rideHistoryLineSperator"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={50} height={50} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M82.56,6.88v158.24h6.88v-158.24z" /></g></g></svg>
          
                                    <img
                                     className="rideHistoryAddIcon"
                                     
                                      src="/assets/svg/boarding-dropping.svg"
                                      alt
                                    />
               <text className="rideHistoryAddress">{key.dropoff}</text>
          
           </div>
                 </div>
          
                 </Card>
                  </li>
         } )

       };
    render() {
        return (
            <div>
                <div id="rideHistoryHeading">
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#3498db" /><path d="M121.77734,75.85469c-15.31875,0 -30.60391,0 -45.92266,0c3.89688,-3.89687 7.79375,-7.79375 11.69063,-11.69062c9.00312,-9.00313 -5.00547,-22.91094 -14.04219,-13.87422c-9.50703,9.50703 -19.01406,19.01406 -28.52109,28.52109c-3.82969,3.82969 -3.72891,10.17891 0.06719,13.94141c9.50703,9.50703 19.01406,19.01406 28.52109,28.52109c9.00312,9.00313 22.91094,-5.00547 13.87422,-14.04219c-3.86328,-3.86328 -7.76016,-7.76016 -11.62344,-11.62344c15.25156,0 30.50312,0 45.75469,0c12.79922,0 12.9,-19.75312 0.20156,-19.75312z" fill="#ffffff" /></g></g></svg>
     <h5 >Your Rides History</h5>
                </div>


              

<ul id="rideHistoryList" >

    {this.getListItemCards()}
</ul>
                



                
            </div>
        )
    }
}
