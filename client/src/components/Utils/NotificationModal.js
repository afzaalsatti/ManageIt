import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import { Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './css/notification_modal.css'


export default class NotificationModal extends Component {
    constructor(props)
    {
        super(props);
        this.getListItemCards=this.getListItemCards.bind(this);
      
    }

    getListItemCards=function(){
        
          
        let notifications=this.props.notifications;
        if(notifications.length<=0)
        {
            return <text>No Notifications yet</text>
        }
        
        
        
        return notifications.map((key, index)=>{
        
        if(key.type==="Ride Invitation")
        {
        let body=key.body.split("-");
        
        let to=body[0].split(",");
        let from=body[1].split(",")
           return <li style={{borderRadius:"8px",fontFamily:"poppins"}}>
               <div style={{display:"table",paddingTop:"20px",borderBottomColor: "black",
        borderBottomWidth: "thin",
        borderBottomStyle: "groove"}}>
        <img
        style={{height:"30px",float:"left"}}
        src="/assets/images/book-car.png"
        alt="User Avatar"
        className=" img-circle"
        />
        <p style={{float: "left",
        marginTop: "6px",
        marginLeft: "10px",color:"green",fontSize:"large"}}>Ride Invitation</p>
        <p id={"show_noti_details"+index}  data-toggle="collapse" data-target={"#notification"+index} style={{cursor:"pointer",fontSize:"smaller",  marginTop: "6px",color:"blue",float:"right"}} 
        onClick={()=>{
        // if(document.getElementById("show_noti_details"+index).innerHTML==="Show Details")
        // {
        //     document.getElementById("show_noti_details"+index).innerHTML="Hide Details" 
        // }else
        // {
        //     document.getElementById("show_noti_details"+index).innerHTML="Show Details"
        // }
        }}
        >Show Details</p>
        <div style={{
        float: "left",
        width: "100%",
        margin: "10px",fontSize:"smaller",textAlign:"initial"}} id={"notification"+index} className="collapse">
        <hr></hr>
        <div>
        <text>To</text>
        <text className="notifi-details">{to[0].slice(0,9)+","+to[1].slice(0,9)}</text>
        </div>
        <div>
        <text>From</text>
        <text className="notifi-details">{from[0].slice(0,9)+","+from[1].slice(0,9)}</text>
        </div>
        <div>
        <text>Fare</text>
        <text className="notifi-details">{body[4]}</text>
        </div>
        <div>
        <text>date</text>
        <text className="notifi-details">{body[2]}</text>
        </div>
        <div>
        <text>Time</text>
        <text className="notifi-details">{body[3]}</text>
        </div>
        </div>
        
        
        <button
           onClick={()=>{
           this.props.acceptRideInvitation(key)
            
          }}
             className="NotiBtn">Accept</button>
        </div>
           </li>
        }
        else if(key.type==="Ride cancel Notification") 
        {
        return <li>
        <div style={{display:"table",paddingTop:"20px",borderBottomColor: "black",
        borderBottomWidth: "thin",
        borderBottomStyle: "groove"}}>
        < img
         style={{height:"30px",float:"left"}}
        src="/assets/images/cancel-ride.png"
        alt="User Avatar"
        className=" img-circle"
        />
        <p style={{float: "left",
        marginTop: "6px",
        marginLeft: "10px",color:"red"}}>{key.type}</p>
        
        
        <p style={{float: "left",
        marginTop: "6px",textAlign:"initial",marginLeft:"6px",color:"black"}}>{key.body}</p>
        
        
        </div>
        </li>
        
        }else return <li>
        <div style={{display:"table",paddingTop:"20px",borderBottomColor: "black",
        borderBottomWidth: "thin",
        borderBottomStyle: "groove"}}>
        < img
        style={{height:"30px",float:"left"}}
        src="/assets/images/cancel-ride.png"
        alt="User Avatar"
        className=" img-circle"
        />
        <p style={{float: "left",
        marginTop: "6px",
        marginLeft: "10px"}}>{key.type}</p>
        
        
        <p style={{float: "left",
        marginTop: "6px",textAlign:"initial",marginLeft:"6px",color:"black"}}>{key.body}</p>
        
        
        </div>
        </li>
        
        
        
        
        
        } )

     };
    componentDidMount()
    {







    }
    render() {
        return (
            <div >
                       <Modal style={{backdropFilter: "blur(5px)"}} show={this.props.showModal} >
                           <Modal.Header>
                               <text style={{textAlign: "center",width: "100%",margin: "0px",fontSize:"larger",fontFamily:"poppins"}}>
                               Notifications
                               </text>
                              
                           </Modal.Header>
        
        <Modal.Body style={{maxHeight:"470px",overflow:"scroll"}} >
       <div className="all-notification-modal">


{this.getListItemCards()}


     </div>
      
    </Modal.Body  >


       <Modal.Footer  >

      
      
      <button
      id="cancelRequest"
       style={{
        background: "#196EDE",
        color: "white",
        width: "30%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
        this.props.getModalBtnClick(2)
        
      }}>Cancel</button>
     
       </Modal.Footer>
      </Modal>
       

            </div>
        )
    }
}



