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
        this.state={startDate:new Date()};
        this.setStartDate=this.setStartDate.bind(this);
    }
    setStartDate(date){

this.setState({startDate:date});
    }
    render() {

        
        return (
            
            <div className="row" style={{justifyContent:'center'}}>
            <div id="step1"className="col-md-8" >
              <div className="card card-primary">
                <div className="card-body">
                <div className="form-group">
              <text htmlFor="inputName">Employee ID</text>
              <input type="email" id="id" className="form-control" />
            </div>
           
          <div style={{width:'49%',float:'left'}}>
              <text htmlFor="inputName">Day</text>
              <input type="date" id="date" className="form-control" />
              </div>
              <div style={{width:'49%',float:'right'}}>
              <text htmlFor="inputName">Time</text>
              <input type="time" id="time" className="form-control" />
              </div>
          
              <div style={{width:'50%'}} className="form-group">
              <text htmlFor="inputStatus">Attendence</text>
              <select id="attendance" className="form-control custom-select">
                <option selected disabled>Select</option>
                <option>Present</option>
                <option>Absent</option>
                <option>On Leave</option>
                
              </select>
              </div>

            
                
              <button id="submit" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Submit</button>
               
              
               
                 </div>
           
           
           
           
           
            </div>
           
            </div>
           
            
            </div>
        )
    }
}
