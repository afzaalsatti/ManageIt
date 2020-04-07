import React, { Component } from 'react'
import './AddNewVahicle.css'

import {
    Card,  Button as CardButton
  } from 'react-bootstrap'
export default class OtherExpense extends Component {
    componentDidMount()
    {
        document.getElementById('datePicker').valueAsDate = new Date();
        document.getElementById('timePicker').valueAsDate = new Date();
    }
    
    render() {
        return (
            <div>
                <div className="main">
  <section className="sign-in">
    <div className="container">
      <div className="signin-content">
       
        <div className="signin-form" style={{width:'100%',textAlign:"center"}}>
            
      


          <Card style={{  display:'inline-block',marginLeft:'10px',width:'100%'}}>
  
 
  <Card.Body >
    <Card.Title>Other Expense</Card.Title>
    
  

  
           <div className="NVDataEntry2">
           <h5>Expense Details</h5>
            <text >Amount</text>
            <input></input>
            <br></br>
            <text for="paid">Status</text>

<select id="status">
<option value="paid">Paid</option>
<option value="pending">Pending</option>

</select>
<br></br>
               <h5>Employee Information</h5>
               <text >Employee Name</text>
               <input></input>  <br></br>
               <text >Employee ID</text>
               <input></input>  <br></br>
               <tr></tr>
               <text >Branch</text>
               <input></input>  <br></br>
               <h5>Other Info</h5>
               <text>Date</text>
               <input type="date" id="datePicker"></input>
               <br></br>
               <text>Time</text>
               <input type="time" id="timePicker"></input> <br></br>
               <h5>Additional  Info</h5>
               <textarea>

               </textarea>
           </div>

    <Card.Text>
    New Vahicle refers to buying new vahicle.
    
    </Card.Text>
    <CardButton variant="primary">Add Expense</CardButton>
  </Card.Body>
</Card>
         





         
        </div>
      </div>
    </div>
  </section>
</div>


            </div>
        )
    }
}
