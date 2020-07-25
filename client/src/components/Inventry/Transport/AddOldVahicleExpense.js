import React, { Component } from 'react'
import './AddNewVahicle.css'
import Maintinace from './oldVahicleExpense/maintinace'
import Parts from './oldVahicleExpense/Parts'
import Fuel from './oldVahicleExpense/Fuel'
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'
import {
    Card,  Button as CardButton
  } from 'react-bootstrap'


  var userInfo;
export default class AddOldVahicleExpense extends Component {
    constructor()
    {
        super();
        userInfo=JSON.parse(localStorage.getItem("userInfo"));
        this.state={
            expense:<Maintinace></Maintinace> }
    }
    componentDidMount()
    {
        document.getElementById('datePicker').valueAsDate = new Date();
        document.getElementById('timePicker').valueAsDate = new Date();
        
    }
    sendDataToServer=()=>{
      let req_data;
      let type=document.getElementById("expense").value;
     

        req_data={
      
             
             
              
        
       
        "company":userInfo["userData"].company,
        "type":type,
          "details":document.getElementById("details").value,
      "amount":document.getElementById("amount").value,
       
        "emp_id": document.getElementById("emp_id").value,
        "date": document.getElementById("datePicker").value,
        "time":document.getElementById("timePicker").value,
        "status":document.getElementById("status").value,

        
         
  
      }
      if(type==="maintinance")
      {
        req_data["vh_num"]=document.getElementById("vh_num").value;
        req_data["expense_info"]="Workshp Name;"+document.getElementById("ws_name").value+"-"+"Workshop Address;"+document.getElementById("ws_add").value
       
        
      
        
         
      }
      else if(type==="fuel")
      {
       
        req_data["expense_info"]="Fuel Quantity;"+document.getElementById("fuel_quan").value
      }
      else if(type==="parts")
      {
        

        req_data["expense_info"]="Vendor Name;"+document.getElementById("ven_add").value+"-"+"Vendor Address;"+document.getElementById("ven_add").value;
        
        
      }




      
         let address="addExpense";
      
       
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(req_data)
          }


          console.log(req_data)
         
          fetch("/"+address,options).then(response=>{
              return response.json();
        }).then(data=>{
            let status=data.status;
            console.log(status)
       
            if(status==='Success')
            {
            
              console.log("Adding Expense Operation Sucessful")
              //history.push('/home');
              
             // history.push("");
            }else{

             
              window.alert("Operation Failed!")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
          console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
          //   reqInProcess=reqInProcess+1;
          // this.RequestToServer(reqInProcess);
         window.alert(" Adding Expense Unexpected error Try again...  ");
       });







    }
    clickListener (e){
        
  
        document.getElementById('ddButton').textContent=e;
      }
      handleSelectListener(e) {
          let val=document.getElementById('expense').value;
          if(val==='fuel')
          {
            this.setState({
                expense: <Fuel ></Fuel>
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
           
          <h2  className="form-title">Expense on Old Vahicle</h2>
      


          <Card style={{  display:'inline-block',marginLeft:'10px',width:'100%'}}>
  
 
  <Card.Body >
    
    <br></br>
    {/* <div className="NVDataEntry1">
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
    </div> */}
  
           <div className="NVDataEntry2">
          
            
       
               
               <h5>Employee Information</h5>
              
               <div  style={{width:'48%',margin:"auto"}} className="form-group">
              <text htmlFor="inputName">Employee ID</text>
              <input  style={{margin:"0px"}} placeholder="Enter Employee ID " type="text" id="emp_id" className="form-control" />
            </div>
               <h5>Expense Information</h5>

               <div  style={{width:'40%',margin:"auto"}} className="form-group">
              <text htmlFor="inputName">Choose Expense Type:</text>
              <select className="form-control"  id="expense"  onChange={ () => this.handleSelectListener(this)}>
  <option value="maintinance">Maintinance</option>
  <option value="fuel">Fuel</option>
  <option value="parts">Parts</option>
  <option value="other">Other</option>
</select>
     </div>
               
<div style={{display: "flex",
    width: "65%",
    margin: "auto",marginTop:"10px"}}>

     <div  style={{width:'48%',marginRight:"10px"}} className="form-group">
     <text htmlFor="inputName" >Time</text>
     <input  style={{margin:"0px"}}  type="time" id="timePicker" className="form-control" />
        
     </div>
     <div  style={{width:'48%'}} className="form-group">
     <text htmlFor="inputName" >Date</text>
     <input  style={{margin:"0px"}}  type="date" id="datePicker" className="form-control" />
     </div>
     </div>
              
{this.state.expense}

              
               <h5>Additional  Info</h5>
               <textarea id="details" style={{width:"60%"}}>

               </textarea>
           </div>

    <Card.Text>
   
    
    </Card.Text>
    <CardButton variant="primary" 
    onClick={()=>{
      this.sendDataToServer();
    }}
    >Add Expense</CardButton>
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
