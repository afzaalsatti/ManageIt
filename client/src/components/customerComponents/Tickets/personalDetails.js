import React, { Component } from 'react'

export default class PersonalDetails extends Component {

    constructor()
    {
        super();
        this.goForward=this.goForward.bind(this);
    }

    goForward(){
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
          alert("All Fields are Mandatory!");
          return false;
        }
    }

    render() {
        return (
          <div className="wrapper" >
 
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>ChartJS</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">ChartJS</li>
                    </ol>
                  </div>
                </div>
              </div>{/* /.container-fluid */}
            </section>


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
       
     
     </div>
       <div>

       </div>
       <div style={{justifyContent:'center'}} className="row">
      <div id="nextprev" className="col-6">
        <button id="next" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Next</button>
       
      </div>
    </div>

   </section>
  {/* /.content */}


















            </div>
       </div>
        )
    }
}
