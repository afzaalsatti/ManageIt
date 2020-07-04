import React, { Component } from 'react'

import history from '../../../history'
import {Link as ReactLink} from 'react-router-dom'
import './signup.css'
import ImageUploader from 'react-images-upload';
import axios from 'axios';

var logo_link="";

 
export default class signup2 extends Component {
  constructor(props)
  {
    super(props);
    this.state ={
      file: null
  };
  
  
  this.onChange = this.onChange.bind(this);
  }
  saveOwnerDetails=()=>{
    let name=  document.getElementById("name").value ;
    
    let email=document.getElementById("email").value ;
    let pass=document.getElementById("password").value ;
    let phone=document.getElementById("phone").value ;
    let cnic=document.getElementById("cnic").value ;
    let gender=document.getElementById("gender").value ;
    let address=document.getElementById("address").value ;
    let company_name=  document.getElementById("company_name").value ;
    const data={
      "name":name,
      "email":email,
      "password":pass,
      "dcnic":cnic,
      "phone":phone,
      "gender":gender,
      "address":address,
      "status":"active",
      "job_id":"owner",
      "company":company_name

      
    }

    const options={
      method:"POST",
      headers:{
          'Content-type':"application/json"

      },
      body:JSON.stringify(data)
  }
  fetch("/addEmployee",options).then(response=>{
      return response.json();
}).then(data=>{
    let status=data.status;
    console.log(status)

    if(status==='Success')
    {

   this.registerCompany();
    
     // history.push("");
    }else{
      window.alert("OOH No")
    }
  // `data` is the parsed version of the JSON returned from the above endpoint.
  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
});

  }
  registerCompany=()=>
  {
      
    
    
    
  let intro=document.getElementById("company_intro").value ;
  let motto=document.getElementById("company_motto").value ;
  let cnic=document.getElementById("cnic").value ;
  
          
       
            
     
     
            
            
  
     let company_name=  document.getElementById("company_name").value ;
    
     let company_regno=document.getElementById("company_regno").value ;
     let company_email=document.getElementById("company_email").value ;
  
  
     let company_phone=  document.getElementById("company_phone").value ;
    
     let company_employee=document.getElementById("company_employee").value ;
     let company_head=document.getElementById("company_head").value ;
  
  
       const data={
     
      "ownerId":cnic,
     
      "CompanyInfo":intro,
      "CompanyMotto":motto,
      "parent":company_name,
      "CompanyLogo":logo_link,
      "CompanyName":company_name,
      "company_regno":company_regno,
      "CompanyEmail":company_email,
      "CompanyEmployee":company_employee,
      "CompanyPhone":company_phone,
      "CompanyHeadOffice":company_head
    }
     
      const options={
          method:"POST",
          headers:{
              'Content-type':"application/json"
  
          },
          body:JSON.stringify(data)
      }
      fetch("/registerCompany",options).then(response=>{
          return response.json();
    }).then(data=>{
        let status=data.status;
        console.log(status)
  
        if(status==='Success')
        {
 
        
         history.push("/signin");
        }else{
          window.alert("OOH No")
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    });
          
      
  
      
     
  }
  saveCompanyLogo=()=>{
    const data = new FormData() 
    data.append('file', this.state.file)
   
    axios.post("http://localhost:5000/uploadImage", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        if(res.statusText==="OK")
        {
          console.log("Success")
          logo_link=res.data.link;
         this.saveOwnerDetails()
        }
        else
        {
          window.alert("unable to upload icon")
        }
        
      })
  }
//   componentDidMount () {
//     const script = document.createElement("script");

//     script.src='/js/signuppScript.js';
//     script.async = true;

//     document.body.appendChild(script);
// }
onChange(e) {
  this.setState({file:e.target.files[0]});

  console.log(this.state.file)
}
   
    render() {
        return (
          <div className="main">
  <section className="signup">
    <div className="container">
      <div className="signup-content">
        <div id="style-2" className="signup-form company-signup-form" style={{width:'90%',display:"grid"}}>
          <h2 className="form-title">Register your company </h2>
          <div className="register-form" id="register-form">
              <h6 className="formHeadings">Owner Personal Information</h6>
          <div className="formgroupDivs form-group">
              <label htmlFor="name"><i className="zmdi zmdi-account" /></label>
              <input className="input" type="name" name="name" id="name" placeholder="Owner Name" />
            </div>
           
           
            <div className="formgroupDivs form-group">
              <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
              <input className="input"  type="email" name="email" id="email" placeholder="Owner Email" />
            </div>
            
            
            <div className="formgroupDivs form-group">
              <label htmlFor="name"><i className="zmdi zmdi-account" /></label>
              <input className="input" type="cnic" name="name" id="cnic" placeholder="Owner CNIC" />
            </div>
      
            <div className="formgroupDivs form-group">
              <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
              <input className="input"  type="phone" name="email" id="phone" placeholder="Owner Phone Number" />
            </div>


            <div className="formgroupDivs form-group">
              <label htmlFor="pass"><i className="zmdi zmdi-gender" /></label>
              <input className="input"  type="text" name="pass" id="gender" placeholder="gender" />
            </div>
            <div className="formgroupDivs form-group">
              <label htmlFor="re-pass"><i className="zmdi zmdi-address" /></label>
              <input className="input"  type="text" name="re_pass" id="address" placeholder="Address" />
            </div>
          
           
            <div className="formgroupDivs form-group">
              <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
              <input className="input"  type="password" name="pass" id="password" placeholder="Password" />
            </div>
            <div className="formgroupDivs form-group">
              <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
              <input className="input"  type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
            </div>
          

          </div>
          
       <br></br>
          <div className="register-form" id="register-form">
          <h6 className="formHeadings">Company Info</h6>
     
          <div className="formgroupDivs form-group">
              <label htmlFor="name"><i className="zmdi zmdi-account" /></label>
              <input className="input" type="name" name="name" id="company_name" placeholder="Company Name" />
            </div>
           
            <div className="formgroupDivs form-group">
              <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
              <input className="input"  type="password" name="re_pass" id="company_regno" placeholder="Company Reg No" />
            </div>
            <div className="formgroupDivs form-group">
              <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
              <input className="input"  type="email" name="email" id="company_email" placeholder="Company Email" />
            </div>

            <div className="formgroupDivs form-group">
              <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
              <input className="input"  type="phone" name="email" id="company_phone" placeholder="Company Phone No" />
            </div>
            <div className="formgroupDivs form-group">
              <label htmlFor="name"><i className="zmdi zmdi-account" /></label>
              <input className="input" type="cnic" name="name" id="company_head" placeholder="Company Head Office" />
            </div>
      
           
           
            <div className="formgroupDivs form-group">
              <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
              <input className="input"  type="password" name="pass" id="company_employee" placeholder="Number Of Employees" />
            </div>
            
          
          </div>
     
          <div className="register-form" id="register-form">
          <h6 className="formHeadings">General Info</h6>
          <div id="imagePicker-company"className="formgroupDivs form-group">
            
          <input
              type="file"
              name="file"
              accept=".png, .jpg,.jpeg"
              onChange= {this.onChange}
             
            />
                
            
       </div>
       <br></br>
          <div className="formgroupDivs form-group">
              <text htmlFor="pass"><i className="zmdi zmdi-info" />Company Motto</text>
              <textarea className="textarea"  type="text" name="" id="company_motto" placeholder="Whats you company motto" />
            </div>
            
            <div className="formgroupDivs form-group">
              <text htmlFor="pass"><i className="zmdi zmdi-info" />Company Intro</text>
              <textarea className="textarea"  type="text" name="" id="company_intro" placeholder="Small Intro which Describes your business" />
            </div>
   
      
           
         <div className="formgroupDivs form-group">
  <input className="input"  type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
  <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
</div>


            <div className="formgroupDivs form-group form-button">
  <button
  //  onClick={register}

  onClick={()=>
  {

    this.saveCompanyLogo();

    
  }}
    name="signup" id="signup" className="form-submit"  >Register</button>
</div>

          </div>
     
       
       </div>
        <div className="signup-image sideImage ">
          <figure><img src="/signupimage.jpg" alt="sing up image" /></figure>
          < ReactLink to="/signin">
          <a href="#" className="signup-image-link">I am already member</a>
          </ ReactLink>
        </div>
      </div>
    </div>
  </section>
</div>

     
        )
    }
}
