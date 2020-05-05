import React, { Component } from 'react'

import history from '../../../history'
import {Link as ReactLink} from 'react-router-dom'
import './signup.css'
function register()
{
    
  
   
   let name=  document.getElementById("name").value ;
  
   let email=document.getElementById("email").value ;
   let pass=document.getElementById("password").value ;

   let cnic=document.getElementById("cnic").value ;

        
   let phone=document.getElementById("phone").value ;  
          
   
   
          
          

   let company_name=  document.getElementById("company_name").value ;
  
   let company_regno=document.getElementById("company_regno").value ;
   let company_email=document.getElementById("company_email").value ;


   let company_phone=  document.getElementById("company_phone").value ;
  
   let company_employee=document.getElementById("company_employee").value ;
   let company_head=document.getElementById("company_head").value ;


     const data={
    "name":name,
    "email":email,
    "password":pass,
    "cnic":cnic,
    "phone":phone,

    "company_name":company_name,
    "company_regno":company_regno,
    "company_email":company_email,
    "company_employee":company_employee,
    "company_phone":company_phone,
    "company_head":company_head
  }
   
    const options={
        method:"POST",
        headers:{
            'Content-type':"application/json"

        },
        body:JSON.stringify(data)
    }
    fetch("/signup",options).then(response=>{
        return response.json();
  }).then(data=>{
      let status=data.status;
      console.log(status)

      if(status==='Success')
      {

        history.push('/signin');
      
       // history.push("");
      }else{
        window.alert("OOH No")
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  });
        
    

    
   
}
export default class signup2 extends Component {
//   componentDidMount () {
//     const script = document.createElement("script");

//     script.src='/js/signuppScript.js';
//     script.async = true;

//     document.body.appendChild(script);
// }

   
    render() {
        return (
          <div className="main">
  <section className="signup">
    <div className="container">
      <div className="signup-content">
        <div id="style-2" className="signup-form company-signup-form" style={{width:'60%',display:"grid"}}>
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
            
           <div className="formgroupDivs form-group">
  <input className="input"  type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
  <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
</div>


            <div className="formgroupDivs form-group form-button">
  <button onClick={register} name="signup" id="signup" className="form-submit"  >Register</button>
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
