import React, { Component } from 'react'
import './AddNewVahicle.css'
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'
import {
    Card,  Button as CardButton
  } from 'react-bootstrap'
export default class AddNewVahicle extends Component {
    componentDidMount()
    {
        document.getElementById('datePicker').valueAsDate = new Date();
        document.getElementById('timePicker').valueAsDate = new Date();
    }
    clickListener (e){
        
  
      document.getElementById('ddButton').textContent=e;
    }
    render() {
        return (
            <div>
                <div className="main">
  <section className="sign-in">
    <div className="container">
      <div className="signin-content">
       
        <div className="signin-form" style={{width:'100%',textAlign:"center"}}>
            <h1>Congrats on Buying New Vahicle</h1>
          <h2  className="form-title">Add New Vahicle`s Details</h2>
      


          <Card style={{  display:'inline-block',marginLeft:'10px',width:'100%'}}>
  
 
  <Card.Body >
    <Card.Title>New Vehicle Data</Card.Title>
    <br></br>
    <div className="NVDataEntry1">
    <text id="VType" >Type</text>
    <Dropdown as={ButtonGroup} >
  <Button  id="ddButton" >Select Type</Button>
  <Dropdown.Toggle  id="dropdown-split-basic">
    
  </Dropdown.Toggle>

  <Dropdown.Menu >
  <Dropdown.Item  onClick={ () => this.clickListener('Bus')}>Bus</Dropdown.Item>
  <Dropdown.Item  onClick={ () => this.clickListener('Car')}>Car</Dropdown.Item>
  <Dropdown.Item  onClick={ () => this.clickListener('Truck')}>Truck</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
   </div>
  
           <div className="NVDataEntry2">
           <h5>Expense Details</h5>
            <text >Amount</text>
            <input></input>
            
            <text for="paid">Status</text>

<select id="status">
<option value="paid">Paid</option>
<option value="pending">Pending</option>

</select>
<br></br>
               <h5>Info About Vahicle</h5>
               <text >Vahicle Number</text>
               <input></input>
               <text >Vahicle Model</text>
               <input></input>
               <tr></tr>
               <text >Vahicle Color</text>
               <input></input>
               <text >Vahicle Brand</text>
               <input></input>
               <h5>Employee Information</h5>
               <text >Employee Name</text>
               <input></input>
               <text >Employee ID</text>
               <input></input>
               <tr></tr>
               <text >Branch</text>
               <input></input>
               <h5>Other Info</h5>
               <text>Date</text>
               <input type="date" id="datePicker"></input>
               
               <text>Time</text>
               <input type="time" id="timePicker"></input>
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
