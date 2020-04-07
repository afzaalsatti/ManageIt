import React, { Component } from 'react'
import Popup from "reactjs-popup";
import {Dropdown,ButtonGroup,Button} from 'react-bootstrap'
import  './HRMTable.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var name="";
var email="";
var pass="";
var role="";
function saveChanges()
{
  let n=document.getElementById('Ename').value;
 let r= document.getElementById('Erole').value;
  let e=document.getElementById('Eemail').value;
  let p=document.getElementById('Epass').value;
  notifySuccess();
  
}
function fetchSongDetails(key) {
 
 //   const n=document.getElementById(key);

 name=key.Name;

 email=key.email;
 pass=key.password;
 role=key.role;

    console.log('We need to get the details for ', key);
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
            return <td key={props.data[key]}><img data-toggle="modal" data-target="#exampleModal" src="/edit.svg"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/fb.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/linkedin.png"/>
            <img style={{marginLeft:'6px'}} src="/assets/images/twitter.png"/>
            </td>
        }
        else
  {  return <td key={props.data[key]}>{props.data[key]}</td>}
    })
   }
export default class HRMTable extends Component {

    
 constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    const data=this.props.data;
    this.state={data:data}
           
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
        return Object.keys(this.state.data[0]);
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
       
    return <th key={keys[index]}>{keys[index]}</th>}
    )
   }
    
   getDropDownMenu=function(){
    var menu = this.props.menu;
    return menu.map((key, index)=>{
      return  <Dropdown.Item key={menu[index]} onClick={ () => this.clickListener(menu[index])}>{menu[index]}</Dropdown.Item>}
   
  )
   };
    getRowsData = function(){
      

            var items = this.state.data;
            
            var keys = this.getKeys();
           
            return items.map((row, index)=>{
            return <tr onClick={fetchSongDetails.bind(this,row)} id={index}><RenderRow key={index} data={row} keys={keys}/></tr>
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
          
           <div className="content-wrapper">
            
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
         
          {/* /.card-header */}
          <div className="card-body">
            <table style={{height: '300px', overflow:'scroll',marginTop:'50px' }}  id="example1" className="table table-bordered table-striped">
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

  <div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Information</h5>
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
         </div>
      <div class="modal-body">
      <img  style={{height:'50px', width:'50px'}}src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
  
     <form action="action_page.php">
  <div className="container">
    
   
  <text htmlFor="name"><b>Name</b></text>
    <input id="Ename" type="text" placeholder="Enter Name" name="name" required />
    
    <text htmlFor="role"><b>Role</b></text>
    <input id="Erole" type="text" placeholder="Enter Role" name="role" required />
    
    <text htmlFor="email"><b>Email</b></text>
    <input id="Eemail" type="text" placeholder="Enter Email" name="email" required />
    
    <text htmlFor="psw"><b>Password</b></text>
    <input id="Epass" type="password" placeholder="Enter Password" name="psw" required />
    
    
    
    <hr />
   
    
  </div>
 
 
</form>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={saveChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>

        )
    }
}
