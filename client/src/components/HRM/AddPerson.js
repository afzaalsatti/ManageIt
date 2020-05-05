import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import {Link as ReactLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var count=0;
var data={};
function notifySuccess()  {
      
      

  toast.success("Updated Successfully",  {containerId: 'A'});

  
};

function notifyWarning()  {
      
      

  toast.warning("All Fields Are Mendatory ",  {containerId: 'A'});

  
};
function notifyPasswordMismatch()  {
      
     

  toast.error("Password Must match ",  {containerId: 'A'});

  
};
export default class AddPerson extends Component {
  
  constructor(){
    super();
    this.goForward = this.goForward.bind(this);
    this.goBack= this.goBack.bind(this);
    this.getDataFromFields= this.getDataFromFields.bind(this);
    // this.notifySuccess=this.notifySuccess.bind(this);
  
  }
    onDrop(picture) {
        alert(picture)
    }
    
    getDataFromFields (count){


      if(count==0)
      {
        let name=document.getElementById("inputName").value;
        let email=document.getElementById("email").value;
        let id=document.getElementById("idNumber").value;
        let job_id=document.getElementById("job_id").value;
        let status=document.getElementById("status").value;
        let pass1=document.getElementById("pass1").value;
        let pass2=document.getElementById("pass2").value;
        if(name && email && id && job_id && status!="Gender"  && pass1 && pass2)
        {
          
          if(pass1===pass2)
          {
          data["name"]=name;
        data["email"]=email;
        data["id"]=id; 
        data["job_id"]=job_id;
        data["status"]=status;
      
        return true;
      }
        else{
      
         notifyPasswordMismatch();
         
          return false;
        }

        }
        else{
         
    notifyWarning();
          return false;
        }
        
             
        
        
       
      }
      else if(count==1)
      {
        
          
          
        let degree=document.getElementById("degree").value;
        let insitute=document.getElementById("insitute").value;
        let marks=document.getElementById("marks").value;
        if(insitute && degree && marks )
        {
          data["degree"]=degree;
        data["insitute"]=insitute;
        data["marks"]=marks; 
       
        return true;

        }
        else{
          alert("All Fields are Mandatory!");
          return false;
        }
        
             
        
        
       
      }
      else if(count==2)
      {
        
          
        
        
        
        let postition=document.getElementById("postition").value;
        let company=document.getElementById("company").value;
        let duration=document.getElementById("duration").value;
        if(postition && company && duration )
        {
          data["postition"]=postition;
        data["company"]=company;
        data["duration"]=duration; 
       console.log(data);
        return true;

        }  
        else{
          alert("All Fields are Mandatory!");
          return false;
        }
        
             
        
        
       
      }
      else {
        return false;
      }
     
    }
   
     goForward () {
      
      let valid=this.getDataFromFields(count);
     if(valid){
      if(count<2)
      {count++;}
      if(count==0)
      {
        document.getElementById("step1").style.display="block";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="none";
      }
      else if(count==1)
      {
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="block";
        document.getElementById("step3").style.display="none";

      }else{
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="block";
        document.getElementById("next").innerHTML ="Submit";
      }
    }
    }
    goBack() {
      document.getElementById("next").innerHTML ="Next";
      if(count>0){
        count--;
      }
      if(count==0)
      {
        document.getElementById("step1").style.display="block";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="none";
      }
      else if(count==1)
      {
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="block";
        document.getElementById("step3").style.display="none";

      }else{
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="block";
      }
    }
    render() {
        return (
            <div >

<ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_RIGHT} />
  {/* Content Header (Page header) */}
  
  {/* Main content */}
  <section className="content">
    <div className="row" style={{justifyContent:'center'}}>
      <div id="step1"className="col-md-8" >
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Personal Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">

<div style={{height:"100px"}}>

<div  style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Full Name</text>
              <input type="text" id="inputName" className="form-control" />
            </div>
            <div  style={{width:'48%',float:"right"}} className="form-group">
              <text htmlFor="inputName">Email</text>
              <input type="email" id="email" className="form-control" />
            </div>
</div>

<br>
</br>
<div style={{height:"100px"}}>

<div style={{width:'48%',float:'left'}} className="form-group">
              <text htmlFor="inputName">ID Number</text>
              <input type="text" id="idNumber" className="form-control" />
            </div>

            <div style={{width:'48%',float:'right'}} className="form-group">
              <text htmlFor="inputName">Job ID</text>
              <input type="text" id="job_id" className="form-control" />
            </div>
</div>
<br>
</br>
      <div style={{height:"100px"}}>

      <div style={{width:'48%',float:'left'}} className="form-group">
              <text htmlFor="inputName">Password</text>
              <input type="password" id="pass1" className="form-control" /> </div>
              <div style={{width:'48%',float:'right'}} className="form-group">
              <text htmlFor="inputName">Confirm Password</text>
              <input type="password" id="pass2" className="form-control" />
            </div>
</div>     
<br></br>     
<div style={{height:"100px"}}>

<div style={{width:'48%',float:'left'}} className="form-group">
              <text htmlFor="inputStatus">Gender</text>
              <select id="status" className="form-control custom-select">
                <option selected disabled>Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
            </div>


     <div style={{width:'48%',float:'right',height: "180px"}}className="form-group">
              <text htmlFor="inputName">Upload Image</text>
            
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.jpeg', '.png']}
                maxFileSize={5242880}
            />
            </div>         
</div>     
    
     
            
         
            
      
           

         
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
       
      <div id="step2" className="col-md-8" style={{display:'none'}}>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Educational Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
          
          <div className="card-body">
            <div style={{float:"left",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Highest Degree</text>
              <input type="text" id="degree" className="form-control" />
            </div>
            <div style={{float:"right",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Insitute</text>
              <input type="text" id="insitute" className="form-control" />
            </div>
            <div style={{margin:"auto",width:"48%"}} className="form-group">
              <text htmlFor="inputName">GPA/Marks</text>
              <input type="text" id="marks" className="form-control" />
            </div>
            
            
            
            
            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
     
      <div id="step3" className="col-md-8" style={{display:'none'}}>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Professional Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
            <div style={{float:"left",width:"48%"}}  className="form-group">
              <text htmlFor="inputName"> Position</text>
              <input type="text" id="postition" className="form-control" />
            </div>
            <div style={{float:"right",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Company</text>
              <input type="text" id="company" className="form-control" />
            </div>
            <div style={{margin:"auto",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Duration</text>
              <input type="text" id="duration" className="form-control" />
            </div>
            
            
            
            
            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
     
       </div>
       <div>

       </div>
       <div style={{justifyContent:'center'}} className="row">
      <div id="nextprev" className="col-6">
      <button   onClick={this.goBack} style={{width:'120px'}} href="" className="btn btn-secondary">Previous</button>
        <button id="next" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Next</button>
       
      </div>
    </div>

    <div style={{justifyContent:'center'}} className="row" style={{display:'none'}}>
      <div id="btns" className="col-8">
        <a href="#" className="btn btn-secondary">Cancel</a>
        <input  defaultValue="Create new Porject" className="btn btn-success float-right" />
      </div>
    </div>
  </section>
  {/* /.content */}
</div>

        )
    }
}
