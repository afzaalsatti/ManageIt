import React, { Component } from 'react'
import './signupp.css'
import './css/material-design-iconic-font.min.css'
import {Link as ReactLink} from 'react-router-dom'
import history from "../../history";
import UserSession from '../../UserSession'
var company="";
class Signn extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        user:"customer"
      }
    }

    getCompanyInfo=()=>{
      try{
      
        const data={
          "company":company
          
        }
         console.log(company)
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(data)
          }
          fetch("/getCompanyInfo",options).then(response=>{
              return response.json();
        }).then(data=>{
            let status=data.status;
            
       
            if(status==='Success')
            {
              

              
          
             
            
     
             setTimeout(()=> {
              localStorage.setItem("companyInfo",JSON.stringify(data.result))

              
              history.push({
                pathname: '/AdminDashboard'
                
              })
           }, 50);
       
           
           
            
            
         
               
            
             // history.push("");
            }else{
             
              window.alert("Unable to fetch Comapany Info")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
          console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
         window.alert("Unexpected error Try again...");
       });
              
      
      
      
      
        
      
      }catch(error)
      {
      console.log("Error occured in fetching  company info")
      }
      
      
      }
     login=()=> {
  
     
        
      // UserSession.setName("User");
         
      let email=document.getElementById("email").value ;
      let pass=document.getElementById("password").value ;
    
    
        const data={
       "sender":"customer",
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
         
    
         if(status==='Success')
         {
         
        let temp={
          "sender":"customer",
          "userData":data.record
           
          };
          
         
  
          setTimeout(function() {
           localStorage.setItem("userInfo",JSON.stringify(temp))

           history.push({
            pathname: '/home',
            data: temp,
          })
           
        }, 50);
    
        
            
         
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
     empLogin=()=> {
      
    
        
      // UserSession.setName("User");
         
      let email=document.getElementById("email").value ;
      let pass=document.getElementById("password").value ;
    
    
        const data={
       "sender":"employee",
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
         
    
         if(status==='Success')
         {
         
        let temp={
          "sender":data.record["job_id"],
          "userData":data.record
           
          };
         

        
         
          




if(temp.sender.toLowerCase()==="owner" ||temp.sender.toLowerCase()==="admin" )
{
  setTimeout(function() {
    localStorage.setItem("userInfo",JSON.stringify(temp))

   
    
 }, 50);

company=data.record["company"]
 this.getCompanyInfo();
}else
{
 
  setTimeout(function() {
    localStorage.setItem("userInfo",JSON.stringify(temp))

    history.push({
     pathname: '/home',
     data: temp,
   })
    
 }, 50);
}

          
          // window.alert("M")
        
    
     
         
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
    render() {
        return (
            <div className="main">
             
  <section className="sign-in">
  
    <div className="container">
 
    <div style={{textAlign:"center"}}>
    <text>SignIn as</text>  
      <br></br>
    <text id="cust" className={this.state.user==="customer" ?"underLinedText"    : "simpleText"} style={{marginRight:"40px"}}
    onClick={()=>{
   
     this.setState({
       user:"customer"
     })
    }}
    >General User</text>
    <text id="emp" className={this.state.user==="customer" ?"simpleText"    : "underLinedText"} 
     onClick={()=>{
      this.setState({
        user:"employee"
      })
    }}
    
    
    >Employee</text>
    </div>
      <div className="signin-content">
     
        <div className="signin-image">
          <figure><img src="/signinimage.jpg" alt="sing up image" /></figure>
          < ReactLink to="/signup">
          <a href="#" className="signup-image-link">Create an account</a>
          </ ReactLink>
        </div>
        <div className="signin-form">

          <h2  id="test" className="form-title">Welcome Back!</h2>
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
  <button  onClick={()=>
  {


  this.state.user==="customer"? this.login(): this.empLogin()
  }} name="signup" id="signin" className="form-submit"  >Log in</button>
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