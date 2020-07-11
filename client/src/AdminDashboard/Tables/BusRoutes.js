import React, { Component } from 'react'
import Popup from "reactjs-popup";
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'

import  '../HRMTable.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var address;
var editData={

  "name":"",
  "email":"key.email",
  "password":"key.password",
  "job_id":"key.job_id",
  "status":"key.status",
  "phone":"key.phone",

 }

function showEditModal(key) {
 


 editData={

  "name":key.name,
  "email":key.email,
  "password":key.password,
  "job_id":key.job_id,
  "status":key.status,
  "phone":key.phone,
  "_id":key._id,

 }



 
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

          
            return <td  style={{whiteSpace:"pre"}} key={props.data[key]}><img style={{height: "25px"}} data-toggle="modal" data-target="#exampleEarningModal" src="/assets/svg/edit.svg"/>
            </td>
          {/* <img style={{marginLeft:'6px'}} src="/assets/images/fb.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/linkedin.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/twitter.png"/> */}
           // </td>
        }
        else
  {  return <td style={{whiteSpace:"pre"}}  key={props.data[key]+Math.floor(Math.random() * 100000)}>{props.data[key]}</td>}
    })
   }

   


export default class Routes extends Component {

    
 constructor(props){
    super(props);

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
   
const data=[""];
    this.state={data:data}


  this.getDataFromServer()


   
           
    }


  
 
    getKeys = function(){
      let arr=Object.keys(this.state.data[0]);
      arr=arr.slice(1)
console.log("------------------")
console.log(arr)
     
      
   

      
    arr.push("edit")
        return  arr;
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
      let head=keys[index].charAt(0).toUpperCase() + keys[index].slice(1);
     
    return <th key={keys[index]}>{head}</th>}
    )
   }
    
  



   getDataFromServer=()=>{

     address="getAllRoutes";
    
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

  console.log(address)
  fetch("/"+address,options).then(response=>{
      return response.json();
  }).then(data=>{
    let status=data.status;
  
  
    if(status==='Success')
    {
      
let booking=data.result;
    
      this.setState({
        data:booking,
       
   
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
  
    
     let req_data={
       "comapany":"decideLater",
       
     }

     const options={
      method:"POST",
      headers:{
          'Content-type':"application/json"
          
      },
      body:JSON.stringify(req_data)
  }

  fetch("/updateAttendance",options).then(response=>{
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
  
  
        
    
    
  </section>
  {/* Main content */}
  <section className="content" >
    <div className="row">
      <div className="col-12">
      
        <div className="card">
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
                  <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.saveChanges} >Save changes</button>
                </div>
              </div>
            </div>
          </div>
      
          {/* /.card-header */}
          <div className="card-body" >
            <table style={{height: '300px', overflow:'scroll',marginTop:'0px',width:"99%", display: "flow-root" }}  id="example1" className="table table-bordered table-striped">
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
