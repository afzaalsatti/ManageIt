import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import MapLocationPicker from '../../Utils/MapLocationPicker'
var from_cord="Select from map",to_cord="Select from map";
var click;
var userInfo;
export default class AddBusRoute extends Component {

    constructor()
    {
        super();
        userInfo=JSON.parse(localStorage.getItem("userInfo"));
        this.state = {
         
       
          showModal:false
        };
        this.goForward=this.goForward.bind(this);
        this.setCords = this.setCords.bind(this);
    }
    setCords(a){
      if(click==="from")
      {
        from_cord=a.lng+","+a.lat;
        window.alert("from   "+from_cord)
      }
      else{
        to_cord=a.lng+","+a.lat;
        window.alert("to   "+to_cord)
      }
         
      
      
        }

    goForward(){
      let fare=document.getElementById("fare").value;
        let title=document.getElementById("title").value;
        let email=document.getElementById("email").value;
        let time=document.getElementById("timePicker").value;
        let date=document.getElementById("datePicker").value;
       

        let seats=document.getElementById("seats").value;
        let vh_id=document.getElementById("vh_id").value;
        let driver_id=document.getElementById("driver_id").value;
        
        let from=document.getElementById("from").value;
        let to=document.getElementById("to").value;
        let dtime=document.getElementById("dtime").value;
        let ddate=document.getElementById("ddate").value;

        
        
        
        if(title &&fare && email && time  && date && seats && vh_id && driver_id && from && to && dtime && ddate )
        {
            let  data={};
            data["company"]=userInfo["userData"].company;
            data["fare"]=fare;
          data["title"]=title;
        data["email"]=email;
        data["time"]=time; 
        data["date"]=date;
       
        data["seats"]=seats;
       
        
        data["from"]=from;
        data["to"]=to;
        data["dtime"]=dtime;
        data["ddate"]=ddate;
        data["vh_id"]=vh_id;
        data["driver_id"]=driver_id;
        
       
        window.alert("Contecting")
        
        const req_data={
        
         
          
         
          "data":data



        }
         
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(req_data)
          }
          fetch("/addRoute",options).then(response=>{
              return response.json();
        }).then(data=>{
            let status=data.status;
            console.log(status)
       
            if(status==='Success')
            {
            
              window.alert("Operation Sucessful")
              //history.push('/home');
            
             // history.push("");
            }else{
             
              window.alert("Operation Failed!")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
          console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
         window.alert("Unexpected error Try again...  "+error);
       });

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
                
                <Modal style={{backdropFilter: "blur(5px)"}} show={this.state.showModal} >
        
        <Modal.Body style={{background:"#3d3d3e"}}>
        <MapLocationPicker setCords={this.setCords}>

</MapLocationPicker >
    </Modal.Body  >
       <Modal.Footer style={{background:"#3d3d3e"}}>
       <button
       style={{
        background: "#196EDE",
        color: "white",
        width: "40%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
         document.getElementById("from").value=from_cord;
         document.getElementById("to").value=to_cord;
         this.setState({
          showModal:false
      });
      }}>Confirm Location</button>
       </Modal.Footer>
      </Modal>

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
          <div  style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Route Fare</text>
              <input type="text" id="fare" className="form-control" />
            </div>
            <div  style={{width:'48%',float:"right"}} className="form-group">
              <text htmlFor="inputName"> Route Title</text>
              <input type="text" id="title" className="form-control" />
            </div>
            <div  style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Contact Email</text>
              <input type="text" id="email" className="form-control" />
            </div>
          
            <div style={{width:'48%',float:"right"}} className="form-group">
              <text htmlFor="inputName">Availble Seats</text>
              <input type="text" id="seats" className="form-control" />
            </div>
            <div style={{width:'48%',float:"left"}}  className="form-group">
            <text>Vahicle ID</text>
               <input type="text" id="vh_id" className="form-control"></input>
            </div>
            <div style={{width:'48%',float:"right"}}  className="form-group">
            <text>Driver ID</text>
               <input type="text" id="driver_id" className="form-control"></input>
            </div>



            <div style={{width:'48%',float:"left"}}  className="form-group">
            <text>From</text>
               <input placeholder="Your Location" id="from" className="form-control"
               
               onClick={ ()=>{
                click="from";
               (this.state.showModal==false)?
                
                  this.setState({
                    showModal:true
                  }) 
                  :
                  console.log("")
                  
              }
                }
               ></input>
            </div>
            <div style={{width:'48%',float:"right"}}  className="form-group">
            <text>To</text>
               <input placeholder="Destination" id="to" className="form-control"
                onClick={ ()=>{
                  click="to";
                 (this.state.showModal==false)?
                  
                    this.setState({
                      showModal:true
                    }) 
                    :
                    console.log("")
                    
                   
                }
                  }
               ></input>
            </div>

            <div style={{width:'48%',float:"left"}} className="form-group">
            <text>Departure Time</text>
               <input type="time" id="dtime" className="form-control"></input>
              

            </div>
            <div style={{width:'48%',float:"right"}}  className="form-group">
            <text>Departure Date</text>
               <input type="date" id="ddate" className="form-control"></input>
            </div>

            <div style={{width:'48%',float:"left"}} className="form-group">
            <text>Destination(Reached) Time</text>
               <input type="time" id="timePicker" className="form-control"></input>
              

            </div>
            <div style={{width:'48%',float:"right"}}  className="form-group">
            <text>Destination(Reached) Date</text>
               <input type="date" id="datePicker" className="form-control"></input>
            </div>

            
            
           
            
           
            

             </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
       
     
     </div>
       <div>

       </div>
       <div style={{justifyContent:'center',width:"67%",margin:"auto"}} className="row">
      <div id="nextprev" className="col-12">
      
        <button id="next" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Confirm</button>
       
      </div>
    </div>

   </section>
  {/* /.content */}


















            </div>
        )
    }
}
