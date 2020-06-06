import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import {Link as ReactLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var count=0;
var data={};
var education=[];
var experience=[];

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
    this.AddMoreEdu=this.AddMoreEdu.bind(this);
    this.AddMoreExp=this.AddMoreExp.bind(this);
    // this.notifySuccess=this.notifySuccess.bind(this);
    this.state={eduaction:[],experience:[]}
  
  }
    onDrop(picture) {
        alert(picture)
    }
    AddMoreExp()
    {
      var exp_list=this.state.experience;
      exp_list.push(       <div>
         <hr></hr>
        <h5> Experience    {this.state.experience.length+1}</h5>
            <button style={{float:"right"}} type="button" className="btn btn-tool" data-toggle="collapse" data-target={"#exp"+this.state.experience.length} title="Collapse">
                <i style={{color:"black",marginRight:"10px"}}  className="fas fa-minus" /></button>
            <br></br>
            <div id={"exp"+this.state.experience.length}>
          
            <div  style={{width:'48%',float:"left",margin:"0px"}}  className="form-group">
              <text htmlFor="inputName"> Position</text>
              <input placeholder="Your Position In Company " style={{margin:"0px"}} type="text" id={"exp_position"+this.state.experience.length} className="form-control" />
            </div>
            <div style={{float:"right",width:"48%",margin:"0px"}} className="form-group">
              <text htmlFor="inputName">Company</text>
             
              <input placeholder="Company Name"style={{margin:"0px"}} type="text" id={"exp_company"+this.state.experience.length} className="form-control" />
            </div>
            <div style={{float:"left",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Start Date</text>
              <input placeholder="Start Date" style={{margin:"0px"}} type="text" id={"exp_start_date"+this.state.experience.length} className="form-control" />
            </div>
            <div style={{float:"right",width:"48%"}} className="form-group">
              <text htmlFor="inputName">End Date</text>
              <input  placeholder="End Date" style={{margin:"0px"}} type="text" id={"exp_end_date"+this.state.experience.length} className="form-control" />
            </div>
            
          
          
            </div>
           
            </div>
            
            );

            this.setState({
              experience:exp_list
            })
    }
    AddMoreEdu()
    {
    
      var edu_list=this.state.eduaction;
      edu_list.push(       <div>
         <hr></hr>
        <h5> Eduactional Record   {this.state.eduaction.length+1}</h5>
            <button style={{float:"right"}} type="button" className="btn btn-tool" data-toggle="collapse" data-target={"#edu"+this.state.eduaction.length} title="Collapse">
                <i id={"btn"+this.state.eduaction.length} style={{color:"black",marginRight:"10px"}}  className="fas fa-minus" /></button>
            <br></br>
            <div id={"edu"+this.state.eduaction.length}>
            <div style={{float:"left",width:"48%"}} className="form-group">
              <text  htmlFor="inputName"> Degree</text>
              <input style={{margin:"0px"}} placeholder="Enter Degree Title" type="text" id={"degree"+this.state.eduaction.length} className="form-control" />
            </div>
            <div style={{float:"right",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Insitute</text>
              <input style={{margin:"0px"}} placeholder="Enter Insitute Name" type="text" id={"insitute"+this.state.eduaction.length} className="form-control" />
            </div>
            <div style={{float:"left",width:"48%"}} className="form-group">
              <text htmlFor="inputName">Year</text>
              <input style={{margin:"0px"}} placeholder="Year of Completion"  type="text" id={"year"+this.state.eduaction.length} className="form-control" />
            </div>
         
            <div style={{float:"right",width:"48%"}} className="form-group">
              <text htmlFor="inputName">GPA/Marks</text>
              <input style={{margin:"0px"}} placeholder="Enter GPA/Marks" type="text" id={"marks"+this.state.eduaction.length} className="form-control" />
            </div>
            </div>
           
            </div>
            
            );

            this.setState({
              eduaction:edu_list
            })
    }
    getDataFromFields (count){


      if(count==0)
      {
        let name=document.getElementById("inputName").value;
        let email=document.getElementById("email").value;
        let id=document.getElementById("idNumber").value;
        let job_id=document.getElementById("job_id").value;
        let gender=document.getElementById("status").value;
        let pass1=document.getElementById("pass1").value;
        let pass2=document.getElementById("pass2").value;
        let address=document.getElementById("address").value;
        if(name && email && id && job_id && gender!="Gender" && address && pass1 && pass2)
        {
          
          if(pass1===pass2)
          {
          data["name"]=name;
        data["email"]=email;
        data["id"]=id; 
        data["job_id"]=job_id;
        data["gender"]=gender;
        data["address"]=address;
        data["pass"]=pass1;
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
        let degree;
        let insitute;
        let marks,year;
        education=[]
          for(let i=0;i<this.state.eduaction.length;i++)
          {
            let data;
            degree=document.getElementById("degree"+i).value;
            insitute=document.getElementById("insitute"+i).value;
            year= document.getElementById("year"+i).value;;
            marks= document.getElementById("marks"+i).value;;
            data={"degree": degree, "insitute": insitute,"year":year,"marks":marks};

            education.push(data);
           

          }
          
          console.log(education)
            
          console.log("-------------------------------------------------")
       
        
        
             
        return true;
        
       
      }
      else if(count==2)
      {
        
          
        
        
        
        let postition;
        let company;
        let start_date;
        let end_date;
        experience=[]
        for(let i=0;i<this.state.experience.length;i++)
        {
          let data;
          
          
          
          
          postition=document.getElementById("exp_position"+i).value;
          company=document.getElementById("exp_company"+i).value;
          start_date= document.getElementById("exp_start_date"+i).value;;
          end_date= document.getElementById("exp_end_date"+i).value;;
          data={"exp_position": postition, "exp_company":company ,"exp_start_date":start_date,"exp_end_date":end_date};

          experience.push(data);
         

        }
        console.log(experience)
            
        console.log("-------------------------------------------------")
     
return true;
      //   if(postition && company && duration )
      //   {
      //     data["postition"]=postition;
      //   data["company"]=company;
      //   data["duration"]=duration; 
      //  console.log(data);
      //   return true;

      //   }  
      //   else{
      //     alert("All Fields are Mandatory!");
      //     return false;
      //   }
        
             
        
        
       
      }
      else {
     
        return true;
      }
     
    }
   
     goForward () {
      
      let valid=this.getDataFromFields(count);
      
     if(valid){
      if(count<2)
      {count++;
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
    }else{
      window.alert("Contecting")
        
        const req_data={
        
         
          
         
          
          "company":"decideLater",
          "name": data["name"],
          "email":data["email"],
          "password":data["pass"],
          "id":data["id"],
          "job_id":data["job_id"],
          "address":data["address"],
          "gender":data["gender"],
          "education":education,
          "experience":experience



        }
         
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(req_data)
          }
          fetch("/addEmployee",options).then(response=>{
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
  <section className="content" style={{fontFamily: "poppins"}}>
    <div className="row" style={{justifyContent:'center'}}>
      <div id="step1"className="col-md-8" >
        <div className="card card-primary">
          <div  style={{padding:"0px"}}className="card-header">
            <h3 className="card-title" style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}}>Personal Details</h3>
            <div className="card-tools">
              <button  type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i style={{color:"white",marginRight:"10px"}} className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">

<div style={{height:"70px"}}>

<div  style={{width:'48%',float:"left",margin:"0px"}} className="form-group">
              <text htmlFor="inputName"> Full Name</text>
              <input  placeholder="Enter Full Name" type="text" style={{margin:"0px"}} id="inputName" className="form-control" />
            </div>
            <div  style={{width:'48%',float:"right"}} className="form-group">
              <text htmlFor="inputName">Email</text>
              <input placeholder="Enter Valid Email" type="email" style={{margin:"0px",background:"#f1f1f1"}} id="email" className="form-control" />
            </div>
</div>


<div style={{height:"70px"}}>

<div style={{width:'48%',float:'left',margin:"0px"}} className="form-group">
              <text htmlFor="inputName">ID Number</text>
              <input placeholder="National Identity Number" style={{margin:"0px"}} type="text" id="idNumber" className="form-control" />
            </div>

            <div style={{width:'48%',float:'right'}} className="form-group">
              <text htmlFor="inputName">Job ID</text>
              <input placeholder="Job ID" style={{margin:"0px"}} type="text" id="job_id" className="form-control" />
            </div>
</div>

      <div style={{height:"70px"}}>

      <div style={{width:'48%',float:'left',margin:"0px"}} className="form-group">
              <text htmlFor="inputName">Password</text>
              <input placeholder="Use Strong Password"style={{margin:"0px"}} type="password" id="pass1" className="form-control" /> </div>
              <div style={{width:'48%',float:'right'}} className="form-group">
              <text htmlFor="inputName">Confirm Password</text>
              <input  placeholder="Confirm Password"style={{margin:"0px"}} type="password" id="pass2" className="form-control" />
            </div>
</div>     
     
<div style={{height:"100px"}}>
<div style={{width:'48%',float:'right'}} className="form-group">
              <text htmlFor="inputStatus">Address</text>
              <input placeholder="Enter authentic Address" type="address" id="address" className="form-control" />
            </div>
          

<div style={{width:'48%',float:'left'}} className="form-group">
              <text htmlFor="inputStatus">Gender</text>
              <select id="status" className="form-control custom-select">
                <option selected disabled>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
            </div>
           

     <div style={{width:'100%',float:'right'}}className="form-group">
              {/* <text htmlFor="inputName">Upload Image</text> */}
            
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.jpeg', '.png']}
                maxFileSize={5242880}
                style={{marginTop:"-105px"}}
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
          <div style={{padding:"0px"}} className="card-header">
            <h3  style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}} className="card-title">Educational Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i style={{color:"white",marginRight:"10px"}}  className="fas fa-minus" /></button>
            </div>
          </div>
          
          <div className="card-body">
     <div style={{width:"100%"}}>
<ul style={{display:"grid",style:"none"}}>
     {this.state.eduaction.map((value, index) => {
        return <li style={{listStyle:"none"}} key={index}>{value}</li>
        
        
      })}
       </ul>
       <button onClick={this.AddMoreEdu} style={{float:"right",borderRadius:"9px",background:"#1a73e8",color:"white",width:"120px",marginTop:"8px",height:"40px"}}>Add More</button>
     </div>
            
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
     
      <div id="step3" className="col-md-8" style={{display:'none'}}>
        <div className="card card-primary">
          <div className="card-header" style={{padding:"0px"}}>
            <h3 style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}} className="card-title">Experience</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i style={{color:"white",marginRight:"10px"}}className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">

         
          <div style={{width:"100%"}}>
<ul style={{display:"grid",style:"none"}}>
     {this.state.experience.map((value, index) => {
        return <li style={{listStyle:"none"}} key={index}>{value}</li>
        
        
      })}
       </ul>
       <button onClick={this.AddMoreExp} style={{float:"right",borderRadius:"9px",background:"#1a73e8",color:"white",width:"120px",marginTop:"8px",height:"40px"}}>Add More</button>
     </div>
      
            
            
            
            
          </div>
          {/* /.card-body */}
        </div>
        
        {/* /.card */}
      </div>
     
     
       </div>
       
       <div style={{justifyContent:'center',width:"67%",margin:"auto"}} className="row">
      <div id="nextprev" className="col-12">
      <button   onClick={this.goBack} style={{width:'120px',float:"left"}} href="" className="btn btn-secondary">Previous</button>
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
