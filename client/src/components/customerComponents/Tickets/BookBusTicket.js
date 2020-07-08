import React, { Component } from 'react'
import Details from './personalDetails'
import BookSeat from './BookSeat'

import StripePayment from '../payment/stripe_payment'

var count=0;
var data={};
var booked,total_booked,total_free;
var userID,userType,userEmail;
var userInfo;
export default class BooBusTicket extends Component {
  
  constructor(props){
    super(props);
   
    userInfo=JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo)
    userID=userInfo.userData["id"]
    userType=userInfo["sender"]
    userEmail=userInfo.userData["email"]
    this.goForward = this.goForward.bind(this);
    this.goBack= this.goBack.bind(this);
    this.getDataFromFields= this.getDataFromFields.bind(this);
    this.BookSeatListener= this.BookSeatListener.bind(this);
   
  
  
  }

 
  
       
    
  BookSeatListener(book,tfree,tbooked)
  {
      booked=book;
      total_booked=tbooked;
      total_free=tfree;
     
      
  }
    getDataFromFields (count){


      if(count==0)
      {
        let cnic=document.getElementById("cnic").value;
        // let acity=document.getElementById("acity").value;
        // let dcity=document.getElementById("dcity").value;
        // let date=document.getElementById("date").value;
       

        // let time=document.getElementById("time").value;
        

        
        
        
        if(cnic)
        {
        let  data={};
        data["cnic"]=cnic;
        // data["acity"]=acity;
        // data["time"]=time; 
        // data["date"]=date;
       
        // data["dcity"]=dcity;
       
       
       
        
       


        return true;

        }
        else{
          alert("All Fields are Mandatory!");
          return false;
        }
        
             
        
        
       
      }
      else if(count==1)
      {
        
          
          
     
        window.alert("Contecting")
        var d = new Date();
        
      
        const req_data={
        
         
          
         
          "booked_seats":total_booked.toString(),
          "id":this.props.details["id"],
"cust_id":userID,


          "cust_cnic":document.getElementById("cnic").value,
          "cust_contact":userEmail,
          "to":this.props.details["to"],
          "from":this.props.details["from"],
          "date":d.getMonth()+1+"/"+ d.getDate()+":"+d.getFullYear(),
          "time":d.getHours()+":"+ d.getMinutes()+":"+d.getSeconds(),
          "price":booked.length*this.props.details["fare"],
          "tickets":booked.length
    //       "company":this.props.details["company"],
    // "title":this.props.details["tittle"],
    // "vh_id":this.props.details["vahicle_Id"],
    // "driver_id": this.props.details["driver_Id"]
    




        }
         
        console.log("Request Data", req_data)
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(req_data)
          }
          fetch("/updateRouteSeats",options).then(response=>{
              return response.json();
        }).then(data=>{
            let status=data.status;
            
       
            if(status==='Success')
            {
            
              window.alert("Operation Sucessful")
              














            }else{
             
              window.alert("Operation Failed!")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
         // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
         window.alert("Unexpected error Try again...  "+error);
       });

        return true;
        
             
        
        
       
      }
      else if(count==2)
      {
        
          
        return true;
        
        
    //     let postition=document.getElementById("postition").value;
    //     let company=document.getElementById("company").value;
    //     let duration=document.getElementById("duration").value;
    //     if(postition && company && duration )
    //     {
    //       data["postition"]=postition;
    //     data["company"]=company;
    //     data["duration"]=duration; 
    //    console.log(data);
    //     return true;

    //     }  
    //     else{
    //       alert("All Fields are Mandatory!");
    //       return false;
    //     }
        
             
        
        
       
      }
      else {
        return false;
      }
     
    }

     goForward () {
      
      let valid=this.getDataFromFields(count);
     if(valid){
      if(count<2)
      {count++;}
      if(count==0)
      {
        document.getElementById("step1").style.display="block";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="none";
      }
      else if(count==1)
      {
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="block";
        document.getElementById("step3").style.display="none";

      }else{
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="block";
        document.getElementById("next").innerHTML ="Submit";
      }
    }
    }
    goBack() {
      document.getElementById("next").innerHTML ="Next";
      if(count>0){
        count--;
      }
      if(count==0)
      {
        document.getElementById("step1").style.display="block";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="none";
      }
      else if(count==1)
      {
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="block";
        document.getElementById("step3").style.display="none";

      }else{
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="block";
      }
    }
    render() {
        return (
            <div >
        
  {/* Content Header (Page header) */}
  
  {/* Main content */}
  <section className="content">
    <div className="row" style={{justifyContent:'center'}}>
    <div id="step1"className="col-md-8" >
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Bus Tickets</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
            <div   style={{width:'50%',margin:"auto"}} className="form-group">
              <text htmlFor="inputName"> Traveler`s Digital CNIC Number</text>
              <input type="text" id="cnic" className="form-control" />
            </div>
            
          
            
      

     
            
            
           
            
           
            

             </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
       
        
      <div id="step2" className="col-md-8" style={{display:'none'}}>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Select Your Desired Seat</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
          
          <div className="card-body">
           <BookSeat booked_seats={this.props.details["booked_seats"]}  BookSeatListener={this.BookSeatListener}></BookSeat>
            
            
            
            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
     
      <div id="step3" className="col-md-8" style={{display:'none'}}>
   <StripePayment></StripePayment>
      </div>
     
       </div>
       <div>

       </div>
       <div style={{justifyContent:'center'}} className="row">
      <div id="nextprev" className="col-6">
      <button   onClick={this.goBack} style={{width:'120px'}} href="" className="btn btn-secondary">Previous</button>
        <button id="next" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Next</button>
       
      </div>
    </div>

    <div style={{justifyContent:'center'}} className="row" style={{display:'none'}}>
      <div id="btns" className="col-8">
        <a href="#" className="btn btn-secondary">Cancel</a>
        <input  defaultValue="Create new Porject" className="btn btn-success float-right" />
      </div>
    </div>
  </section>
  {/* /.content */}
</div>

        )
    }
}
