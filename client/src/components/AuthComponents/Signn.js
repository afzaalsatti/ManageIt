import React, { Component } from 'react'
import './signupp.css'
import './css/material-design-iconic-font.min.css'
import {Link as ReactLink} from 'react-router-dom'
import UserSession from '../../UserSession'
function login() {
  
      
    
  // UserSession.setName("User");
     
  let email=document.getElementById("email").value ;
  let pass=document.getElementById("password").value ;


    const data={
   
   "email":email,
   "password":pass
 }
  
   const options={
       method:"POST",
       headers:{
           'Content-type':"application/json"
           
       },
       body:JSON.stringify(data)
   }
   fetch("/signin",options).then(response=>{
       return response.json();
 }).then(data=>{
     let status=data.status;
     console.log(status)

     if(status==='Success')
     {
     
       window.alert("M")
      // history.push('/mainPage');
     
      // history.push("");
     }else{
      
       window.alert("Invalid Credentials!")
     }
   // `data` is the parsed version of the JSON returned from the above endpoint.
   console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
 }).catch((error) => {
  
  window.alert("Unexpected error Try again...");
});
       
   

   
  


}
class Signn extends Component {
    
    render() {
        return (
            <div className="main">
  <section className="sign-in">
    <div className="container">
      <div className="signin-content">
        <div className="signin-image">
          <figure><img src="/signinimage.jpg" alt="sing up image" /></figure>
          < ReactLink to="/signup">
          <a href="#" className="signup-image-link">Create an account</a>
          </ ReactLink>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Sign up</h2>
          <div  className="register-form" id="login-form">
            <div className="form-group">
              <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
              <input  className="input"type="text" name="your_name" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
              <input className="input" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input className="input" type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
              <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
            </div>
            <div className="form-group form-button">
  <button  onClick={login} name="signup" id="signin" className="form-submit"  >Log in</button>
</div>
          </div>
          <div className="social-login">
            <span className="social-label">Or login with</span>
            <ul className="socials">
              <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook" /></a></li>
              <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter" /></a></li>
              <li><a href="#"><i className="display-flex-center zmdi zmdi-google" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        )
    }
}
export  {Signn};