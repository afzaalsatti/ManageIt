import React, { Component } from 'react'
import './AddNewVahicle.css'
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'
import {
    Card,  Button as CardButton
  } from 'react-bootstrap'
export default class AddNewVahicle extends Component {
  constructor(){
    super();
    this.saveVahicle = this.saveVahicle.bind(this);
    
  
  }
  saveVahicle()
  {
   
   let price=document.getElementById("price").value;
   let status=document.getElementById("status").value;
   let vh_num=document.getElementById("vh_num").value;
   let vh_model=document.getElementById("vh_model").value;
   let time=document.getElementById("time").value;
   let date=document.getElementById("date").value;
   let color=document.getElementById("vh_color").value;
   let brand=document.getElementById("vh_brand").value;
   let emp_id=document.getElementById("vh_resp_emp_id").value;
   let type=document.getElementById("vh_type").value;
   let year=document.getElementById("vh_make_year").value;

   if(price && status && vh_num && vh_model && time && date && color && brand && emp_id && type && year)
   {
     

    window.alert("Contecting")
        
    const req_data={
     "company":"decideLater",
      "owner":"Company",
      "price": price,
      "payment_status":status,
      "number":vh_num,
      "vah_model":vh_model,
      "entry_date":date,
      "entry_time":time,
      "brand":brand,
      "color":color,
      "buyer_emp_id":emp_id,
      "reg_year":year,
      "type":type
}
     
      const options={
          method:"POST",
          headers:{
              'Content-type':"application/json"
              
          },
          body:JSON.stringify(req_data)
      }
      fetch("/addNewVahicle",options).then(response=>{
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
   }
else{
  window.alert("All Fields Are Mendatory")
}


   
  }
    render() {
        return (
            <div>

<div className="row" style={{justifyContent:'center'}}>
      <div id="step1"className="col-md-8" >
        <div className="card card-primary">
          <div  style={{padding:"0px"}} className="card-header">
            <h3 style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}} className="card-title">New Vahicle Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i style={{color:"white",marginRight:"10px"}} className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
            <div  style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Vahicle Price</text>
              <input  style={{margin:"0px"}} placeholder="Enter Vahicle Total Price" type="text" id="price" className="form-control" />
            </div>
            
            <div  style={{width:'48%',paddingLeft:'10px'}} className="form-group">
              <text htmlFor="inputName">Payment Status</text>
              <select  style={{marginBottom:"20px",height:"37px",width:'100%',background:"#F1F1F1"}} id="status">
<option value="paid">Paid</option>
<option value="pending">Pending</option>

</select>          </div>
   

<div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Vahicle Type</text>
              <select  style={{height:"37px",width:'100%',background:"#F1F1F1"}} id="vh_type">
<option value="Car">Car</option>
<option value="Bus">Bus</option>
<option value="Truck">Truck</option>


</select>       </div>
            <div style={{width:'48%',paddingLeft:"10px",marginBottom:"20px"}} className="form-group">
              <text htmlFor="inputName">Year of Make</text>
              <input placeholder="Vahicle Year of make"  style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="text" id="vh_make_year" className="form-control" />
            </div>

               <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Vahicle Number</text>
              <input  style={{margin:"0px"}} placeholder="Complete Vahicle Number" type="text" id="vh_num" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:"10px",marginBottom:"20px"}} className="form-group">
              <text htmlFor="inputName">Vahicle Model</text>
              <input placeholder="Vahicle Model"  style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="text" id="vh_model" className="form-control" />
            </div>

            <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Time</text>
              <input  style={{margin:"0px",background:"#F1F1F1"}} placeholder="TIME" type="time" id="time" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:"10px"}} className="form-group">
              <text htmlFor="inputName">Date</text>
              <input placeholder="Date" style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="date" id="date" className="form-control" />
            </div>





            <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Vahicle Color</text>
              <input  style={{margin:"0px"}} placeholder="Vahicle Color" type="text" id="vh_color" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:"10px"}} className="form-group">
              <text htmlFor="inputName">Vahicle Brand</text>
              <input placeholder="Vahicle Brand" style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="text" id="vh_brand" className="form-control" />
            </div>




            



            <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Employee Name</text>
              <input  style={{margin:"0px"}} placeholder="Employee Name who bought Vahicle" type="text" id="vh_resp_emp" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:"10px"}} className="form-group">
              <text htmlFor="inputName">Employee ID</text>
              <input placeholder="Employee ID who bought Vahicle" style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="text" id="vh_resp_emp_id" className="form-control" />
            </div>



            <div style={{width:'48%',paddingLeft:"10px"}} className="form-group">
             
            <button onClick={this.saveVahicle} style={{float:"right",borderRadius:"9px",background:"#1a73e8",color:"white",width:"120px",marginTop:"8px",height:"40px"}}>Save</button>
   
                    </div>
            
             </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
       
     
     </div>
  
                {/* <div className="main">
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
</div> */}


            </div>
        )
    }
}
