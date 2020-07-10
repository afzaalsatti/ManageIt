import React, { Component } from 'react'
import Popup from "reactjs-popup";
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'

import  './HRMTable.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HRMModal from './HRMModal'

var name="";
var email="";
var pass="";
var role="";
var editData={

  "name":"",
  "email":"key.email",
  "password":"key.password",
  "job_id":"key.job_id",
  "status":"key.status",

 }
function saveChanges()
{
  let n=document.getElementById('Ename').value;
 let r= document.getElementById('Erole').value;
  let e=document.getElementById('Eemail').value;
  let p=document.getElementById('Epass').value;
  notifySuccess();
  
}
function showEditModal(key) {
 
 //   const n=document.getElementById(key);

 name=key.Name;

 email=key.email;
 pass=key.password;
 role=key.role;
 editData={

  "name":key.name,
  "email":key.email,
  "password":key.password,
  "job_id":key.job_id,
  "status":key.status,

 }

 this.setState({showModal:true})
    
  }
  function menuClicked(e)
  {
    var text = e.currentTarget.text;
    document.getElementById('ddButton').textContent=text;
   
//this.setState({data:data}); 
 
   

  }
 function notifySuccess()  {
      
      

    toast.success("Updated Successfully",  {containerId: 'A'});

    
  };
  const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        if(props.data[key]==='icon')
        {
            return <td style={{whiteSpace: "pre"}} key={props.data[key]}><img data-toggle="modal" data-target="#exampleModal" src="/edit.svg"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/fb.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/linkedin.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/twitter.png"/>
            </td>
        }
        else
  {  return <td style={{whiteSpace: "pre"}} key={props.data[key]+Math.floor(Math.random() * 100000)}>{props.data[key]}</td>}
    })
   }

   

const m=['Users','Staff','Customers','Contractors'];
export default class HRMTable extends Component {

    
 constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    // const data=this.props.data;
    const data=[""];
    this.state={data:data}
    this.getDataFromServer()
           
    }


    
    clickListener (e){
      const data=[{'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'},
      {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'},
      {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'},
      {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'}];
  
     document.getElementById('ddButton').textContent=e;
      /* get the element id and do the enum things here */
      this.setState({
        data: data
      });
    }
    getKeys = function(){
     let arr=Object.keys(this.state.data[0]);
     arr=arr.slice(2)
    arr=arr.slice(1,arr.length-1)
        return  arr;
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
      
    return <th key={keys[index]}>{keys[index].charAt(0).toUpperCase() + keys[index].slice(1)}</th>}
    )
   }
    
   getDropDownMenu=function(){
    // var menu = this.props.menu;
    var menu=m;
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
    getRowsData = function(){
      

            var items = this.state.data;
            
            var keys = this.getKeys();
           
            return items.map((row, index)=>{
            return <tr data-toggle="modal" data-target="#exampleModal" style={{height:"30px",background:"white",cursor:"pointer"}} onClick={showEditModal.bind(this,row)} id={index}><RenderRow key={index} data={row} keys={keys}/></tr>
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
              
              <text htmlFor="role"><b>Role</b></text>
              <input id="Erole" type="text" placeholder={editData.job_id} name="role" required />
              
              <text htmlFor="email"><b>Email</b></text>
              <input id="Eemail" type="text" placeholder={editData.email} name="email" required />
              
              <text htmlFor="psw"><b>Password</b></text>
              <input id="Epass" type="password" placeholder={editData.password} name="psw" required />
          
              <text htmlFor="psw"><b>Status</b></text>
              <input id="status" type="text" placeholder={editData.status} name="staus" required />
              
              
              
              <hr />
             
              
            </div>
           
           
          </form>
          
          
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
       
          {/* /.card-header */}
          <div className="card-body" >
            <table style={{height: '300px', overflow:'scroll',marginTop:'0px',display:"table-row-group",width:"99%",display:"block" }}  id="example1" className="table table-bordered table-striped">
              <thead>
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
