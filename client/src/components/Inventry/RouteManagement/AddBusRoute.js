import React, { Component } from 'react'

export default class AddBusRoute extends Component {

    constructor()
    {
        super();
        this.goForward=this.goForward.bind(this);
    }

    goForward(){
        let title=document.getElementById("title").value;
        let email=document.getElementById("email").value;
        let time=document.getElementById("timePicker").value;
        let date=document.getElementById("datePicker").value;
       

        let seats=document.getElementById("seats").value;
        let vtype=document.getElementById("vtype").value;
        let vnumber=document.getElementById("vnumber").value;
        
        let from=document.getElementById("from").value;
        let to=document.getElementById("to").value;
        let dtime=document.getElementById("dtime").value;
        let ddate=document.getElementById("ddate").value;

        
        
        
        if(title && email && time  && date && seats && vtype && vnumber && from && to && dtime && ddate )
        {
            let  data={};
          data["title"]=title;
        data["email"]=email;
        data["time"]=time; 
        data["date"]=date;
       
        data["seats"]=seats;
       
        data["from"]=from;
        data["to"]=to;
        data["dtime"]=dtime;
        data["ddate"]=ddate;
        data["vtype"]=seats;
        data["vnumber"]=seats;
        
       
console.log(data)

        return true;

        }
        else{
          alert("All Fields are Mandatory!");
          return false;
        }
    }

    render() {
        return (
            <div>
                


                <section className="content">
    <div className="row" style={{justifyContent:'center'}}>
      <div id="step1"className="col-md-8" >
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Bus Route Management</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
          <div  style={{width:'40%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Route Fare</text>
              <input type="text" id="fare" className="form-control" />
            </div>
            <div  style={{width:'40%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Route Title</text>
              <input type="text" id="title" className="form-control" />
            </div>
            <div  style={{width:'55%',paddingLeft:'10px'}} className="form-group">
              <text htmlFor="inputName"> Contact Email</text>
              <input type="text" id="email" className="form-control" />
            </div>
          
            
            <div style={{width:'40%',float:"left"}}  className="form-group">
            <text>Vahicle Type</text>
               <input type="text" id="vtype" className="form-control"></input>
            </div>
            <div style={{width:'55%',paddingLeft:'10px'}}  className="form-group">
            <text>Vahicle Number</text>
               <input type="text" id="vnumber" className="form-control"></input>
            </div>



            <div style={{width:'40%',float:"left"}}  className="form-group">
            <text>From</text>
               <input type="date" id="from" className="form-control"></input>
            </div>
            <div style={{width:'55%',paddingLeft:'10px'}}  className="form-group">
            <text>To</text>
               <input type="date" id="to" className="form-control"></input>
            </div>

            <div style={{width:'40%',float:"left"}} className="form-group">
            <text>Departure Time</text>
               <input type="time" id="dtime" className="form-control"></input>
              

            </div>
            <div style={{width:'55%',paddingLeft:'10px'}}  className="form-group">
            <text>Departure Date</text>
               <input type="date" id="ddate" className="form-control"></input>
            </div>

            <div style={{width:'40%',float:"left"}} className="form-group">
            <text>Destination(Reached) Time</text>
               <input type="time" id="timePicker" className="form-control"></input>
              

            </div>
            <div style={{width:'55%',paddingLeft:'10px'}}  className="form-group">
            <text>Destination(Reached) Date</text>
               <input type="date" id="datePicker" className="form-control"></input>
            </div>

            <div style={{width:'40%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Availble Seats</text>
              <input type="text" id="seats" className="form-control" />
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

   </section>
  {/* /.content */}


















            </div>
        )
    }
}
