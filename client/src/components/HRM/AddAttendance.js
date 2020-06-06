import React, {useState, Component } from 'react'

// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {

//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';

export default class AddAttendance extends Component {
    constructor(){
        super();
        
        this.submit=this.submit.bind(this);
      
        
    }
    submit(){
      let d=new Date();
        
      let date=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();

      let time=d.getHours()+":"+d.getMinutes();

      let attendance=document.getElementById("attendance").value;
      let id=document.getElementById("id").value;
      let company="WillDoItLater";

      if(id && attendance)
      {
        


        window.alert("Contecting")
        
        const req_data={
        
         
          
         
          
          "company":"decideLater",
        
          "attendance":{"id":id,"attendance":attendance},
          "date":date,
          "time":time,
         



        }
         
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(req_data)
          }
          fetch("/addAttendence",options).then(response=>{
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
         
          console.log(data.status);  
        }).catch((error) => {
         
         window.alert("Unexpected error Try again...  "+error);
       });
  
      }
      else
      {
        window.alert("All Fields needs to be filled")
      }
    



    }

    
    render() {

        
        return (
            
            <div className="row" style={{justifyContent:'center'}}>
            <div id="step1"className="col-md-8" >
              <div className="card card-primary">
                <div className="card-body">
                <div  style={{width:'49%',float:'left'}} className="form-group">
              <text htmlFor="inputName">Employee ID*</text>
              <input style={{background:"#F1F1F1"}} type="email" id="id" className="form-control" />
            </div>
            <div style={{width:'49%',float:'right' }} className="form-group">
              <text htmlFor="inputStatus">Attendence*</text>
              <select style={{background:"#F1F1F1"}} id="attendance" className="form-control custom-select">
                <option selected disabled>Select</option>
                <option>Present</option>
                <option>Absent</option>
                <option>On Leave</option>
                
              </select>
              </div>

          <div style={{width:'49%',float:'left'}}>
              <text htmlFor="inputName">Day</text>
              <input style={{background:"#F1F1F1"}} type="date" id="date" className="form-control" />
              </div>
              <div style={{width:'49%',float:'right'}}>
              <text htmlFor="inputName">Time</text>
              <input  style={{background:"#F1F1F1"}} type="time" id="time" className="form-control" />
              </div>
          
              
            
                
              <button id="submit" onClick={this.submit} style={{width:'120px',marginTop:"50px"}}className="btn btn-success float-right"> Submit</button>
               
              
               
                 </div>
           
           
           
           
           
            </div>
           
            </div>
           
            
            </div>
        )
    }
}
