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
        
          
        return this.props.notifications.map((key, index)=>{
          
       
          
        return  <li  style={{listStyle:"none"}}  >
        <Card id="rideHistoryCard" >
                <div>
        <div className="historytopdiv">
        
            <text style={{color:"blue"}} >{key.type}</text>
            <br></br>
            <text >{key.body}</text>
            
            <br></br>

            {key.type=="Ride Invitation"? <button
           onClick={()=>{
           this.props.acceptRideInvitation(key)
            
          }}
             className="NotiBtn">Accept</button>:""}
            
        
         </div>
     </div>
        
               </Card>
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
        
        <Modal.Body >
       <div>


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
