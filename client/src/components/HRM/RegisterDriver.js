import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import {Link as ReactLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadiningModal  from '../Utils/LodingModal'
import './css/register_driver.css'
import history from "../../history";
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import { Card } from 'react-bootstrap'
var count=0;
var driverId;
var data={};
var education=[];
var experience=[];
var requestLoadingMessage="";
var reqFailed=false;
var reqInProcess=1;
var companies=[]
var selected_company="decideLater"
function notifySuccess()  {
      
      

  toast.success("Updated Successfully",  {containerId: 'A'});

  
};

function notifyWarning()  {
      
      

  toast.warning("All Fields Are Mendatory ",  {containerId: 'A'});

  
};
function notifyPasswordMismatch()  {
      
     

  toast.error("Password Must match ",  {containerId: 'A'});

  
};

var dp_link="";
export default class RegisterDriver extends Component {
  
  constructor(){
    super();
    this.goForward = this.goForward.bind(this);
    this.goBack= this.goBack.bind(this);
    this.getDataFromFields= this.getDataFromFields.bind(this);
    this.AddMoreEdu=this.AddMoreEdu.bind(this);
    this.AddMoreExp=this.AddMoreExp.bind(this);
    // this.notifySuccess=this.notifySuccess.bind(this);
    this.state={eduaction:[],experience:[]
    ,
    showCompanyModal:false,
    
    showModal:false,
    file: null}

    this.onChange = this.onChange.bind(this);
    this.getAllCompanies()

    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log(position["coords"].longitude )
    //   console.log(position["coords"].latitude )
    //   //
    // });
  
  }


getAllCompanies=()=>{
 let address="getAllCompanies";
 let req_data={

     
    


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
    console.log(status)

    if(status==='Success')
    {
    
      
      //history.push('/home');
      companies=data.result;
      this.setState({
        showCompanyModal:true
      })
      
     // history.push("");
    }else{

     
      window.alert("Company Fetch Operation Failed!")
    }
  // `data` is the parsed version of the JSON returned from the above endpoint.
  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
}).catch((error) => {
  
  
  //   reqInProcess=reqInProcess+1;
  // this.RequestToServer(reqInProcess);
 window.alert("Unexpected error Try again...  "+reqInProcess);
});





}




  onChange(e) {
    this.setState({file:e.target.files[0]});
  
    
  }

  saveCaptainDP=()=>{
    const data = new FormData() 
    data.append('file', this.state.file)
   
    axios.post("http://localhost:5000/uploadImage", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        if(res.statusText==="OK")
        {
         
          dp_link=res.data.link;
          this.RequestToServer();
      
        }
        else
        {
          window.alert("unable to upload Dp")
        }
        
      })
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
        let location=document.getElementById("location").value;
        let gender=document.getElementById("status").value;
        let pass1=document.getElementById("pass1").value;
        let pass2=document.getElementById("pass2").value;
        let address=document.getElementById("address").value;
        let phone=document.getElementById("phNumber").value;
        if(name && email && id && location && gender!="Gender" && phone && address && pass1 && pass2)
        {
          
          if(pass1===pass2)
          {
          data["name"]=name;
        data["email"]=email;
        data["id"]=id; 
        data["location"]=location;
        data["gender"]=gender;
        data["address"]=address;
        data["pass"]=pass1;
        data["phone"]=phone;
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
       
        let price="no estimate";
        let status="no estimate";
        let vh_num=document.getElementById("vh_num").value;
        let vh_model=document.getElementById("vh_model").value;
        let color=document.getElementById("vh_color").value;
        let brand=document.getElementById("vh_brand").value;
        let emp_id=data["id"];
        let type=document.getElementById("vh_type").value;
        let year=document.getElementById("vh_make_year").value;
        if(price && status && vh_num && vh_model  && color && brand && emp_id && type && year)
   {

    data["price"]=price;
        data["status"]=status;
        data["vh_num"]=vh_num;
        data["vh_model"]=vh_model;
       
        data["color"]=color;
        data["brand"]=brand;
        data["owner_id"]=emp_id;
        data["type"]=type;
        data["year"]=year;
    return true;
   }
   else
   {
    notifyWarning();
    return false;
       
   }

      }
      else if(count==2)
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
      else if(count==3)
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
    getModalBtnClick=type=>{
        this.setState({showModal:false})
        if(type===1)
        {

           reqFailed=false;
           this.RequestToServer();
        }
       

    }

    getModalBody=()=>{

      return companies.map((key,index)=>{
        return  <li style={{listStyle:"none",height:"30px"}}>

<Card className="JobAdsCard">
            <div className="historymiddlediv">
           
                <text
                 onClick={()=>{
                  this.clickListener(index)
              }}
                id ="company_name" className="rideHistoryAddress">{companies[index].company_name}</text>
         
             
                 </div>
            </Card>
          

            </li>
    });


    }
     RequestToServer=()=>{
        
         
        let req_data;
        let address;
        let d = new Date();
        if(reqInProcess<= 3)
        {
           
       
        if(reqInProcess==1)
        {
            
            requestLoadingMessage=<text> <span>&#8635;</span> Creating Captain Profile 1/3</text>
            address="addEmployee";
            req_data={
        
         
          
         
          
                "company":selected_company,
                "name": data["name"],
                "email":data["email"],
                "password":data["pass"],
                "phone":data["phone"],
                "id":data["id"],
                "dp":dp_link,
                "job_id":"Captain",
                "address":data["address"],
                "gender":data["gender"],
                "education":education,
                "experience":experience,
                "joining_date":d.getMonth()+1+"/"+ d.getDate()+"/"+d.getFullYear(),
                "status":"pending"
      
      
      
              }
               
        }else if(reqInProcess==2)
        {
            requestLoadingMessage= <text> <span>&#10003;</span> Creating Captain Profile <br></br><span>&#8635;</span> Adding Vachile to DataBase 2/3</text>
          
            address="addNewVahicle";
            req_data={
        
               
               
                
          
         
          
                "company":selected_company,
      "owner":driverId,
      "price": data["price"],
      "payment_status":data["status"],
      "number":data["vh_num"],
      "vah_model": data["vh_model"],
      "entry_date":d.getMonth()+1+"/"+ d.getDate()+"/"+d.getFullYear(),
      "entry_time":d.getHours()+":"+ d.getMinutes()+":"+d.getSeconds(),
      "brand": data["brand"],
      "color":data["color"],
      "buyer_emp_id":driverId,
      "reg_year":data["year"],
      "type": data["type"]
      
      
      
              }
               
        }
        else if(reqInProcess==3)
        {
            requestLoadingMessage= <text> <span>&#10003;</span> Creating Captain Profile (1/2) <br></br><span>&#10003;</span> Adding Vachile to DataBase (2/3) <br></br><span>&#8635;</span> Adding You to Hire Pool (3/3)</text>
          
            address="addDriverToHirePool";
            req_data={
        
               
               
                
          
         
          
                "company":selected_company,
      "driverId":driverId,
     
      "vahicleId":data["vh_num"],
   "status":"active",
   "position":data["location"],
   "vahicleType":data["type"]
      
      
      
              }
               
        
            }
         
            const options={
                method:"POST",
                headers:{
                    'Content-type':"application/json"
                    
                },
                body:JSON.stringify(req_data)
            }
            this.setState({showModal:true})
            fetch("/"+address,options).then(response=>{
                return response.json();
          }).then(data=>{
              let status=data.status;
              console.log(status)
         
              if(status==='Success')
              {
              
                console.log("Operation Sucessful" +reqInProcess)
                //history.push('/home');
                console.log(data.id)
                console.log(data.id !== undefined)
                if(data.id !== undefined)
                {
                  driverId=data.id;
                }
                reqInProcess++;
                this.RequestToServer();
               // history.push("");
              }else{

               
                window.alert("Operation Failed!")
              }
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
          }).catch((error) => {
            reqFailed=true;
            this.setState({showModal:true})
            //   reqInProcess=reqInProcess+1;
            // this.RequestToServer(reqInProcess);
           window.alert("Unexpected error Try again...  "+reqInProcess);
         });
        
        }
        else
        {
            requestLoadingMessage= <text> <span>&#10003;</span> Creating Captain Profile (1/2) <br></br><span>&#10003;</span> Adding Vachile to DataBase (2/3) <br></br><span>&#10003;</span> Adding You to Hire Pool (3/3)</text>
          
            this.setState({showModal:true});
            setTimeout('', 2000);
            this.setState({showModal:false});
            history.push('/home');


        }
    }
     goForward () {
        
      let valid=this.getDataFromFields(count);
      
     if(valid){
      if(count<3)
      {count++;

        if(count==0)
      {
        document.getElementById("driver-reg-step1").style.display="block";
        document.getElementById("driver-reg-step2").style.display="none";
        document.getElementById("driver-reg-step3").style.display="none";
        document.getElementById("driver-reg-step4").style.display="none";
      }
      else if(count==1)
      {
        document.getElementById("driver-reg-step1").style.display="none";
        document.getElementById("driver-reg-step2").style.display="block";
        document.getElementById("driver-reg-step3").style.display="none";
        document.getElementById("driver-reg-step4").style.display="none";

      }else if(count==2){
        document.getElementById("driver-reg-step1").style.display="none";
        document.getElementById("driver-reg-step2").style.display="none";
        document.getElementById("driver-reg-step3").style.display="block";
        document.getElementById("driver-reg-step4").style.display="none";
      }
      else  if(count==3){
        document.getElementById("driver-reg-step1").style.display="none";
        document.getElementById("driver-reg-step2").style.display="none";
        document.getElementById("driver-reg-step3").style.display="none";
        document.getElementById("driver-reg-step4").style.display="block";
        document.getElementById("next").innerHTML ="Submit";
      }
     
    }else{

        
        this.saveCaptainDP()

      
        
    //     const req_data={
        
         
          
         
          
    //       "company":selected_company,
    //       "name": data["name"],
    //       "email":data["email"],
    //       "password":data["pass"],
    //       "id":data["id"],
    //       "job_id":"Driver101",
    //       "address":data["address"],
    //       "gender":data["gender"],
    //       "education":education,
    //       "experience":experience



    //     }
         
    //       const options={
    //           method:"POST",
    //           headers:{
    //               'Content-type':"application/json"
                  
    //           },
    //           body:JSON.stringify(req_data)
    //       }
    //       fetch("/addEmployee",options).then(response=>{
    //           return response.json();
    //     }).then(data=>{
    //         let status=data.status;
    //         console.log(status)
       
    //         if(status==='Success')
    //         {
            
    //           window.alert("Operation Sucessful")
    //           //history.push('/home');
            
    //          // history.push("");
    //         }else{
             
    //           window.alert("Operation Failed!")
    //         }
    //       // `data` is the parsed version of the JSON returned from the above endpoint.
    //       console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    //     }).catch((error) => {
         
    //      window.alert("Unexpected error Try again...  "+error);
    //    });
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
        document.getElementById("driver-reg-step1").style.display="block";
        document.getElementById("driver-reg-step2").style.display="none";
        document.getElementById("driver-reg-step3").style.display="none";
        document.getElementById("driver-reg-step4").style.display="none";
      }
      else if(count==1)
      {
        document.getElementById("driver-reg-step1").style.display="none";
        document.getElementById("driver-reg-step2").style.display="block";
        document.getElementById("driver-reg-step3").style.display="none";
        document.getElementById("driver-reg-step4").style.display="none";

      }else if(count==2){
        document.getElementById("driver-reg-step1").style.display="none";
        document.getElementById("driver-reg-step2").style.display="none";
        document.getElementById("driver-reg-step3").style.display="block";
        document.getElementById("driver-reg-step4").style.display="none";
      }
      else{
        document.getElementById("driver-reg-step1").style.display="none";
        document.getElementById("driver-reg-step2").style.display="none";
        document.getElementById("driver-reg-step3").style.display="none";
        document.getElementById("driver-reg-step4").style.display="block";
      }
    }

    clickListener=(index)=>{
      selected_company=companies[index].company_name
    this.setState({
      showCompanyModal:false
    })
  }
    render() {
        return (
            <div  style={{
              background: "url('/signupbg.jpg')" ,height:"600px"}}  >
  <Modal style={{backdropFilter: "blur(5px)"}} show={this.state.showCompanyModal} >
                           <Modal.Header>
                               <text style={{textAlign: "center",width: "100%",margin: "0px",fontSize:"larger",fontFamily:"poppins"}}>
                               Select Company to apply as Captain
                               </text>
                              
                           </Modal.Header>
        
        <Modal.Body style={{maxHeight:"600px",overflow:"scroll"}} >
       <div style={{display:"block"}}className="all-notification-modal">
{this.getModalBody()}


     </div>
      
    </Modal.Body  >


       <Modal.Footer  >

    <button
      id="cancelRequest"
       style={{
        background: "#196EDE",
        color: "white",
        width: "30%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
       this.setState({
         showCompanyModal:false
       })
        
      }}>Cancel</button>
     
       </Modal.Footer>
      </Modal>
     
<ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_RIGHT} />
  {/* Content Header (Page header) */}
  
  {/* Main content */}
  <section className="content" style={{fontFamily: "poppins"}}>

    <div className="row" style={{justifyContent:'center'}}>
    <LoadiningModal getModalBtnClick={this.getModalBtnClick} reqFailed={reqFailed} displayText={requestLoadingMessage} showModal={this.state.showModal}></LoadiningModal>
      <div id="driver-reg-step1"className="col-md-8" >
        <div className="card registerDriverCard card-primary">
          <div  style={{padding:"0px"}}className="card-header">
            <h3 className="card-title" style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}}> Welcome! 
             <br></br> Enter Personal Details</h3>
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

            <div style={{width:'48%',float:'right',margin:"0px"}} className="form-group">
              <text htmlFor="inputName">Phone Number</text>
              <input placeholder="Contact  Number" style={{margin:"0px"}} type="text" id="phNumber" className="form-control" />
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
              <text htmlFor="inputName">Location  <i  id="loadinggif" className="fa fa-spinner fa-spin" style={{fontSize: 16,display:"none"}} />
         </text>
              <input onClick={()=>{
                document.getElementById("loadinggif").style.display="block";
                navigator.geolocation.getCurrentPosition(function(position) {
                  document.getElementById("loadinggif").style.display="none";
                document.getElementById("location").value=position["coords"].longitude+","+position["coords"].latitude ;
            // console.log(position["coords"].longitude )
            // console.log(position["coords"].latitude )
            //
          },
          function(error) {
            document.getElementById("loadinggif").style.display="none";
                document.getElementById("location").value="Error occured please click again"
          }
          );}} placeholder="Click and allow popup" style={{margin:"0px"}} type="text" id="location"  >



          </input>
            </div>

<div style={{width:'48%',float:'left'}} className="form-group">
              <text htmlFor="inputStatus">Gender</text>
              <select id="status" className="form-control custom-select">
                <option selected disabled>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
            </div>
           
            <div style={{width:'48%',float:'left'}} className="form-group">
              <text htmlFor="inputStatus">Address</text>
              <input placeholder="Enter authentic Address" type="address" id="address" className="form-control" />
            </div>


            <div style={{width:'48%',float:'right'}} id="imagePicker-captain"className="formgroupDivs form-group">
            <text htmlFor="inputStatus">Select your Display Picture</text>
            
          <input
              type="file"
              name="file"
              accept=".png, .jpg,.jpeg"
              onChange= {this.onChange}
             
            />
                
            
       </div>
   
     {/* <div style={{width:'100%',float:'right'}}className="form-group">
               <text htmlFor="inputName">Upload Image</text> 
             
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.jpeg', '.png']}
                maxFileSize={5242880}
                style={{marginTop:"-105px"}}
            />
            </div>           */}

</div>     
    
     
            
         
            
      
           

         
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    
          


      <div id="driver-reg-step2"className="col-md-8" style={{display:'none'}} >
        <div className="card registerDriverCard card-primary">
          <div  style={{padding:"0px"}} className="card-header">
            <h3 style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}} className="card-title"> Vahicle Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i style={{color:"white",marginRight:"10px"}} className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
        
<div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Vahicle Type</text>
              <select  style={{height:"37px",width:'100%',background:"#F1F1F1"}} id="vh_type">
<option value="Car">Car</option>
<option value="Bus">Bus</option>
<option value="Bike">Bike</option>
<option value="Van">Van</option>
<option value="Truck">Heavy Vahicle</option>


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
              <text htmlFor="inputName">Vahicle Color</text>
              <input  style={{margin:"0px"}} placeholder="Vahicle Color" type="text" id="vh_color" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:"10px"}} className="form-group">
              <text htmlFor="inputName">Vahicle Brand</text>
              <input placeholder="Vahicle Brand" style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="text" id="vh_brand" className="form-control" />
            </div>




            



           



          
             </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
       
     
     
  
              


           
    
         
            
      
           

      
       
      <div id="driver-reg-step3" className="col-md-8" style={{display:'none'}}>
        <div className="card registerDriverCard card-primary">
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
     
      <div id="driver-reg-step4" className="col-md-8" style={{display:'none'}}>
        <div className="card registerDriverCard card-primary">
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
