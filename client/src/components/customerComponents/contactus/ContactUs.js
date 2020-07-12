import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
var cust_email;
var userInfo;
export default class ContactUs extends Component {
    constructor(props)
    {
super(props);
userInfo=JSON.parse(localStorage.getItem("userInfo"));
if(this.props.showModal)
{
    cust_email=userInfo.userData["email"];
}

    }
    render() {
        return (
            <div>
                       <Modal style={{backdropFilter: "blur(5px)",fontFamily:"poppins"}} show={this.props.showModal} >
        
        <Modal.Header style={{fontWeight:"500",padding:"0px"}}>
            <text>New Email</text>
            </Modal.Header>
        <Modal.Body >
       <div style={{display:"grid"}}>
       <input style={{height:"40px",background:"lightgray",color:"black",borderRadius: "10px",
    marginBottom: "5px"}} id="name" placeholder="Your Name"></input>

        <input style={{height:"40px",background:"lightgray",color:"black",borderRadius: "10px",
    marginBottom: "5px"}} id="from" placeholder="Your Email">{cust_email}</input>

       <input style={{height:"40px",background:"lightgray",color:"black",borderRadius: "10px",
    marginBottom: "5px"}} id="to" placeholder="To"></input>

<input style={{height:"40px",background:"lightgray",color:"black",borderRadius: "10px",
    marginBottom: "5px"}} id="subject" placeholder="Subject"></input>
<textarea style={{width:"100%",background:"lightgray",color:"black"}} id="body" placeholder="Compose Email"></textarea>
       </div>
      
    </Modal.Body  >


       <Modal.Footer  >
       <button
      id="cancelRequest"
       style={{
        background: "gray",
        color: "white",
        width: "30%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
        this.props.getContactModalBtnClick(2)
        
      }}>Cancel</button>
     
       <button
       id="retryRequest"
       style={{
        background: "#196EDE",
        color: "white",
        width: "30%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{

 
        let address="sendEmail";
        let req_data={
      
           
           
            
      
      
      
            "company":"decideLater",
       "to":"decideLater",
       "from":userInfo.userData["email"],
       "name":document.getElementById("name").value,
       "subject":document.getElementById("subject").value,
       "body":document.getElementById("body").value,
      
      // "vahicleId":data["vh_num"],
      // "status":"active",
      // "position":"longi latti",
      // "vahicleType":data["type"]
      
      
      
          }
        const options={
          method:"POST",
          headers:{
              'Content-type':"application/json"
              
          },
          body:JSON.stringify(req_data)
      }
      
      fetch("/"+address,options).then(response=>{
          return response.json();
      }).then(data=>{
        let status=data.status;
      
      
        if(status==='Success')
        {
          
          
            this.props.getContactModalBtnClick(1)
       
       
         
        }else{
      
         
         
         
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      }).catch((error) => {
      
      
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
    
      });
      




       
        
      }}>Send</button>
      
    
       </Modal.Footer>
      </Modal>
       




            </div>
        )
    }
}
