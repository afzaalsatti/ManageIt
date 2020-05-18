import React, { Component } from 'react'
import Details from './personalDetails'
import BookSeat from './BookSeat'



var count=0;
var data={};
var booked,total_booked,total_free;
export default class BooBusTicket extends Component {
  
  constructor(){
    super();
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
        let acity=document.getElementById("acity").value;
        let dcity=document.getElementById("dcity").value;
        let date=document.getElementById("date").value;
       

        let time=document.getElementById("time").value;
        

        
        
        
        if(acity && cnic && time  && date && dcity  )
        {
        let  data={};
        data["cnic"]=cnic;
        data["acity"]=acity;
        data["time"]=time; 
        data["date"]=date;
       
        data["dcity"]=dcity;
       
       
       
        
       
console.log(data)

        return true;

        }
        else{
         // alert("All Fields are Mandatory!");
          return true;
        }
        
             
        
        
       
      }
      else if(count==1)
      {
        
          
          
        console.log(booked);
        console.log(total_booked);
        console.log(total_free);


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
            <div  style={{width:'60%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Traveler`s Digital CNIC Number</text>
              <input type="text" id="cnic" className="form-control" />
            </div>
            
          
            
            <div style={{width:'60%',float:"left"}}  className="form-group">
            <text>Departure City</text>
               <input type="text" id="dcity" className="form-control"></input>
            </div>
            <div style={{width:'60%',paddingLeft:'10px'}}  className="form-group">
            <text>Arrival City</text>
               <input type="text" id="acity" className="form-control"></input>
            </div>



            <div style={{width:'40%',float:"left"}}  className="form-group">
            <text>Travel Time</text>
               <input type="time" id="time" className="form-control"></input>
            </div>
            <div style={{width:'55%',paddingLeft:'10px'}}  className="form-group">
            <text>Travel Date</text>
               <input type="date" id="date" className="form-control"></input>
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
           <BookSeat BookSeatListener={this.BookSeatListener}></BookSeat>
            
            
            
            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
     
      <div id="step3" className="col-md-8" style={{display:'none'}}>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Professional Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
            <div className="form-group">
              <text htmlFor="inputName"> Position</text>
              <input type="text" id="postition" className="form-control" />
            </div>
            <div className="form-group">
              <text htmlFor="inputName">Company</text>
              <input type="text" id="company" className="form-control" />
            </div>
            <div className="form-group">
              <text htmlFor="inputName">Duration</text>
              <input type="text" id="duration" className="form-control" />
            </div>
            
            
            
            
            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
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
