import React, { Component } from 'react'
import Popup from "reactjs-popup";
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'

import  './HRMTable.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HRMModal from './HRMModal'


var editData={

  "name":"",
  "email":"key.email",
  "password":"key.password",
  "job_id":"key.job_id",
  "status":"key.status",
  "phone":"key.phone",

 }
var dataFor="Employees"
var tableFor=""
function showEditModal(key) {
 

  if(tableFor==="hrm")
  {
 //   const n=document.getElementById(key);
let job_id=""
 if(dataFor==="Employees")
 {
   job_id=key.job_id

 }
 editData={

  "name":key.name,
  "email":key.email,
  "password":key.password,
  "job_id":key.job_id,
  "status":key.status,
  "phone":key.phone,
  "_id":key._id,

 }
 document.getElementById('Ename').value=key.name;
   
    if(dataFor==="Employees")
 {
  document.getElementById('Erole').value=key.job_id

 }
 document.getElementById('phone').value=key.phone
     document.getElementById('Eemail').value=key.email
     document.getElementById('Epass').value=key.password
     document.getElementById('Estatus').value=key.status

 this.setState({showModal:true})
}
else if(tableFor==="earnings")
{
 
  editData={

    "_id":key._id,
    "status":key.status,
    
  
   }

   document.getElementById('Estatus').value=key.status

} 
  }
  function menuClicked(e)
  {
    var text = e.currentTarget.text;
    document.getElementById('ddButton').textContent=text;
   
//this.setState({data:data}); 
 
   

  }
  function notifyFailure()  {
      
      

    toast.error("Try Again Error occured",  {containerId: 'A'});

    
  };
 function notifySuccess()  {
      
      

    toast.success("Updated Successfully",  {containerId: 'A'});

    
  };
  const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        if(key==='edit')
        {

          if(tableFor==="earnings")
          {
            return <td  style={{whiteSpace:"pre"}} key={props.data[key]}><img style={{height: "25px"}} data-toggle="modal" data-target="#exampleEarningModal" src="/assets/svg/edit.svg"/>
            </td>
          }
            return <td  style={{whiteSpace:"pre"}} key={props.data[key]}><img style={{height: "25px"}} data-toggle="modal" data-target="#exampleModal" src="/assets/svg/edit.svg"/>
            {/* <img style={{marginLeft:'6px'}} src="/assets/images/fb.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/linkedin.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/twitter.png"/> */}
            </td>
        }
        else
  {  return <td style={{whiteSpace:"pre"}}  key={props.data[key]+Math.floor(Math.random() * 100000)}>{props.data[key]}</td>}
    })
   }

   

const m=['Staff','Ownner','Users','Contractors'];
export default class HRMTable extends Component {

    
 constructor(props){
    super(props);

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.saveEarningsChanges = this.saveEarningsChanges.bind(this);
    // const data=this.props.data;
    const data=[""];
    tableFor=this.props.tableFor;

    if(tableFor==="hrm")
    {
      dataFor="Employees"
    }
    else{
      dataFor="earnings"
    }
    this.state={data:data}


if(this.props.tableFor=="earnings")
{
  this.getEarningsFromServer()
}
else
{
  this.getDataFromServer()
}

   
           
    }


    saveEarningsChanges=()=>{
      let req_data={
        "_id":editData._id,
        "status":"cleared",
        
      }
      console.log(req_data)
 
      const options={
       method:"POST",
       headers:{
           'Content-type':"application/json"
           
       },
       body:JSON.stringify(req_data)
   }
 
   fetch("/updateEarning",options).then(response=>{
       return response.json();
   }).then(data=>{
     let status=data.status;
   
   
     if(status==='Success')
     {
       this.getEarningsFromServer()
       notifySuccess();
 
 
      
    
      
     }
   // `data` is the parsed version of the JSON returned from the above endpoint.
   console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
   }).catch((error) => {
   
     notifyFailure()
   //   reqInProcess=reqInProcess+1;
   // this.RequestToServer(reqInProcess);
   //this.notifyError("Unexpected error Try again...  ");
   });
    }

    getEarningsFromServer=()=>{
      
      let req_data={
        "company":"decideLater"
      }
     const options={
       method:"POST",
       headers:{
           'Content-type':"application/json"
           
       },
       body:JSON.stringify(req_data)
   }
 
   fetch("/getAllEarnings",options).then(response=>{
       return response.json();
   }).then(data=>{
     let status=data.status;
   
   
     if(status==='Success')
     {
       
    
       this.setState({
         data:data.earnings
        
    
       })
 
 
      
    
      
     }
   // `data` is the parsed version of the JSON returned from the above endpoint.
   console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
   }).catch((error) => {
   
   
   //   reqInProcess=reqInProcess+1;
   // this.RequestToServer(reqInProcess);
   //this.notifyError("Unexpected error Try again...  ");
   });
    }
    
    clickListener (e){
      
  
     document.getElementById('ddButton').textContent=e;
    if(e==="Customers")
    {
      dataFor="customers"

      let req_data={
        "company":"decideLater"
      }
     const options={
       method:"POST",
       headers:{
           'Content-type':"application/json"
           
       },
       body:JSON.stringify(req_data)
   }
 
   fetch("/getAllCustomers",options).then(response=>{
       return response.json();
   }).then(data=>{
     let status=data.status;
   
   
     if(status==='Success')
     {
       
    
       this.setState({
         data:data.users,
         showModal:false
    
       })
 
 
      
    
      
     }
   // `data` is the parsed version of the JSON returned from the above endpoint.
   console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
   }).catch((error) => {
   
   
   //   reqInProcess=reqInProcess+1;
   // this.RequestToServer(reqInProcess);
   //this.notifyError("Unexpected error Try again...  ");
   });






    }
    else if (e==="Staff"){
      this.getDataFromServer()
    }
      /* get the element id and do the enum things here */
      // this.setState({
      //   data: data
      // });
    }
    getKeys = function(){

      let arr=Object.keys(this.state.data[0]);
      if(tableFor=="earnings")
      {
        arr=arr.slice(1)
        arr.push("edit")
        return arr
      }
      if(arr !==null )
      {
        arr=arr.slice(1,arr.length-1)
      }
     

      if(dataFor==="Employees")
      {

      
    
     arr=arr.slice(2)
   
      }else{
        arr=arr.slice(1)
      }
    arr.push("edit")
        return  arr;
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
      let head=keys[index].charAt(0).toUpperCase() + keys[index].slice(1);
      if(tableFor==="earnings" && head==="Id")
      {
        head="Employee ID"
      }
    return <th key={keys[index]}>{head}</th>}
    )
   }
    
   getDropDownMenu=function(){
     var menu = this.props.menu;
    
    return menu.map((key, index)=>{
      return  <Dropdown.Item key={menu[index]} onClick={ () => this.clickListener(menu[index])}>{menu[index]}</Dropdown.Item>}
   
  )
   };



   getDataFromServer=()=>{
     let req_data={
       "company":"decideLater"
     }
    const options={
      method:"POST",
      headers:{
          'Content-type':"application/json"
          
      },
      body:JSON.stringify(req_data)
  }

  fetch("/getAllEmployee",options).then(response=>{
      return response.json();
  }).then(data=>{
    let status=data.status;
  
  
    if(status==='Success')
    {
      
      this.setState({
        data:data.employee,
        showModal:false
   
      })


     
   
     
    }
  // `data` is the parsed version of the JSON returned from the above endpoint.
  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
  
  
  //   reqInProcess=reqInProcess+1;
  // this.RequestToServer(reqInProcess);
  //this.notifyError("Unexpected error Try again...  ");
  });
  
   }


   saveChanges(){
    let r="";
    let address;
    let n=document.getElementById('Ename').value;
    
    
     let e=document.getElementById('Eemail').value;
     let p=document.getElementById('Epass').value;
     let s=document.getElementById('Estatus').value;
     let phone=document.getElementById('phone').value;

     if(dataFor==="Employees")
     {
        r= document.getElementById('Erole').value;
        address="updateEmployeeInfo";
     }
     else
     {
      address="updateCustomerInfo";
     }

     let req_data={
       "name":n,
       "email":e,
       "job_id":r,
       "password":p,
       "status":s,
       "phone":phone,
       "_id":editData._id
     }

     const options={
      method:"POST",
      headers:{
          'Content-type':"application/json"
          
      },
      body:JSON.stringify(req_data)
  }

  fetch("/"+address,options).then(response=>{
      return response.json();
  }).then(data=>{
    let status=data.status;
  
  
    if(status==='Success')
    {
      this.getDataFromServer()
      notifySuccess();


     
   
     
    }
  // `data` is the parsed version of the JSON returned from the above endpoint.
  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
  
    notifyFailure()
  //   reqInProcess=reqInProcess+1;
  // this.RequestToServer(reqInProcess);
  //this.notifyError("Unexpected error Try again...  ");
  });
    




   }
    getRowsData = function(){
      

            var items = this.state.data;
            
            var keys = this.getKeys();
           
            return items.map((row, index)=>{
            return <tr  style={{height:"30px",background:"white",cursor:"pointer"}} onClick={showEditModal.bind(this,row)} id={index}><RenderRow key={index} data={row} keys={keys}/></tr>
            })
    }
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src='/js/HRMTableScript.js';
        script.async = true;
    
        document.body.appendChild(script);
    }
   
    render() {
      
      
        return (
          
           <div style={{margin:"0px",padding:"50px"}} className="content-wrapper">
             <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_RIGHT} />
           
  {/* Content Header (Page header) */}
  
  <section style={{padding:'5px'}}className="content-header">
  
  <Dropdown as={ButtonGroup} >
  <Button  id="ddButton" style={{width:"150px",marginBottom:'10px'}}>Select Type</Button>
  <Dropdown.Toggle style={{marginBottom:'10px'}} id="dropdown-split-basic">
    
  </Dropdown.Toggle>

  <Dropdown.Menu >
    {this.getDropDownMenu()}
  </Dropdown.Menu>
</Dropdown>
        
    
    
  </section>
  {/* Main content */}
  <section className="content" >
    <div className="row">
      <div className="col-12">
      
        <div className="card">
        <div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit Information</h5>
                 
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                   </div>
                <div class="modal-body" style={{background:"lightgray"}}>
                <img  style={{height:'50px', width:'50px'}}src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
            
               <form action="">
            <div className="container">
              
             
            <text htmlFor="name"><b>Name</b></text>
              <input id="Ename" type="text" placeholder={editData.name} name="name" required />
              <text htmlFor="phone"><b>Phone</b></text>
              <input id="phone" type="text" placeholder={editData.phone} name="name" required />
              {dataFor!=="customers"?<div>
              <text htmlFor="role"><b>Role</b></text>
              <input id="Erole" type="text" placeholder={editData.job_id} name="role" required /></div>
              :
              ""
              
            }
              
              
              <text htmlFor="email"><b>Email</b></text>
              <input id="Eemail" type="text" placeholder={editData.email} name="email" required />
              
              <text htmlFor="psw"><b>Password</b></text>
              <input id="Epass" type="password" placeholder={editData.password} name="psw" required />
          
              <text htmlFor="psw"><b>Status</b></text>
              <input id="Estatus" type="text" placeholder={editData.status} name="staus" required />
              
              
              
              <hr />
             
              
            </div>
           
           
          </form>
          
          
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.saveChanges} >Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="exampleEarningModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit Information</h5>
                 
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                   </div>
                <div class="modal-body" style={{background:"lightgray"}}>
                <img  style={{height:'50px', width:'50px'}}src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
            
               <form action="">
            <div className="container">
              
             
            <text htmlFor="name"><b>Status</b></text>
            <input id="Estatus" type="text" name="email" required />
              
             
              
              
              
              <hr />
             
              
            </div>
           
           
          </form>
          
          
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.saveEarningsChanges} >Save changes</button>
                </div>
              </div>
            </div>
          </div>
      
          {/* /.card-header */}
          <div className="card-body" >
            <table style={{height: '300px', overflow:'scroll',marginTop:'0px',width:"99%" }}  id="example1" className="table table-bordered table-striped">
              <thead style={{cursor:"default"}}>
                <tr>
                 {this.getHeader()}
                </tr>
              </thead>
              <tbody >
              
                
                
               
               
                
                
                {this.getRowsData()}
                
                
                
                
                
                
              </tbody>
              <tfoot>
                
              </tfoot>
            </table>

            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </section>
  {/* /.content */}

 </div>

        )
    }
}
