import React, { Component } from 'react'
import './AddNewVahicle.css'
import Maintinace from './oldVahicleExpense/maintinace'
import Parts from './oldVahicleExpense/Parts'
import Fuel from './oldVahicleExpense/Fuel'
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'
import {
    Card,  Button as CardButton
  } from 'react-bootstrap'
export default class AddOldVahicleExpense extends Component {
    constructor()
    {
        super();
        this.state={
            expense:<Maintinace></Maintinace> }
    }
    componentDidMount()
    {
        document.getElementById('datePicker').valueAsDate = new Date();
        document.getElementById('timePicker').valueAsDate = new Date();
        
    }
    
    clickListener (e){
        
  
        document.getElementById('ddButton').textContent=e;
      }
      handleSelectListener(e) {
          let val=document.getElementById('expense').value;
          if(val==='fuel')
          {
            this.setState({
                expense: <Fuel></Fuel>
              });
          }else if(val==='parts')
          {
            this.setState({
                expense: <Parts></Parts>
              });
          }
          else  if(val==='maintinance'){
            this.setState({
                expense: <Maintinace></Maintinace>
              });
          }
          else{
            this.setState({
                expense: <h1></h1>
              });
          }
            
          
      }
    render() {
        return (
            <div>
                <div className="main">
  <section className="sign-in">
    <div className="container">
      <div className="signin-content">
       
        <div className="signin-form" style={{width:'100%',textAlign:"center"}}>
           
          <h2  className="form-title">Add Expense on Old Vahicle</h2>
      


          <Card style={{  display:'inline-block',marginLeft:'10px',width:'100%'}}>
  
 
  <Card.Body >
    <Card.Title>Expense Details</Card.Title>
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
               <h5>Info About Vahicle</h5>
               <text >Vahicle Number</text>
               <input></input>
               
               <h5>Employee Information</h5>
              
               <text >Employee ID</text>
               <input></input>
               <h5>Expense Information</h5>
               <text for="expense">Choose Expense Type:</text>

<select id="expense"  onChange={ () => this.handleSelectListener(this)}>
  <option value="maintinance">Maintinance</option>
  <option value="fuel">Fuel</option>
  <option value="parts">Parts</option>
  <option value="other">Other</option>
</select>
<br></br>
<text>Time</text>
               <input type="time" id="timePicker"></input>
               <text>Date</text>
               <input type="date" id="datePicker"></input>
{this.state.expense}

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
