import React, { Component } from 'react'
import './signupp.css'
import './css/material-design-iconic-font.min.css'
import history from '../../history'
import {Link as ReactLink} from 'react-router-dom'

function register()
{
    
  
   
   let name=  document.getElementById("name").value ;
  
   let email=document.getElementById("email").value ;
   let pass=document.getElementById("password").value ;


     const data={
    "name":name,
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
        <div className="signup-form">
          <h2 className="form-title">Sign up</h2>
          <div className="register-form" id="register-form">
          <div className="form-group">
              <label htmlFor="name"><i className="zmdi zmdi-account" /></label>
              <input className="input" type="name" name="name" id="name" placeholder="Your Name" />
            </div>
           
            <div className="form-group">
              <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
              <input className="input"  type="email" name="email" id="email" placeholder="Your Email" />
            </div>

            
           
            <div className="form-group">
              <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
              <input className="input"  type="password" name="pass" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
              <input className="input"  type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
            </div>
           <div className="form-group">
  <input className="input"  type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
  <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
</div>


            <div className="form-group form-button">
  <button onClick={register} name="signup" id="signup" className="form-submit"  >Register</button>
</div>

          </div>
        </div>
        <div className="signup-image">
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
