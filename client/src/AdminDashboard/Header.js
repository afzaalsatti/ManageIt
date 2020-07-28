import React, { Component } from "react";
import history from '../history'
import {Link as ReactLink} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import ClipboardJS from 'clipboard'


function navigateToOtherPage(params) {
   // alert(params)
    
}

var userInfo;

export default class Header extends Component {

 
constructor(props)
{
  super(props)
  userInfo=JSON.parse(localStorage.getItem("userInfo"));
 
 this.updateHash=this.updateHash.bind(this);



new ClipboardJS('.btn');
        
 

 

}

updateHash(){
  console.log("This is Update Hash")
  document.getElementById("update-hash-icon").className="fa fa-spinner fa-spin";

  let req_data;
  let address;
  address="updateHash";
  req_data={

       
      
       "id":userInfo["userData"]["id"],
       "company":userInfo["userData"].company

        
  
 
  


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
      console.log(data)
 
      if(status==='Success')
      {
        userInfo["userData"].hash=data.hash;
        document.getElementById("update-hash-icon").className="fa fa-recycle";
        document.getElementById("owner-hash").innerHTML=data.hash;
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        
       

     
        
       // history.push("");
      }else{

       
        console.log("Operation Failed!")
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
      // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
    
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
   console.log("Unexpected error Try again Retrying...  ");
  
   
 });



}

 getDataUrl=()=> {
  
}





  render() {
    return (
      <div style={{fontFamily:"poppins"}} >
        <nav id="admin-dash-nav" style={{marginLeft:"0px",background:"rgb(52, 58, 64)"}}  className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a  style={{color:"white"}}className="nav-link"
              //  data-widget="pushmenu" href="#"
              data-target="#collapseExample"
              data-toggle="collapse" href="" aria-expanded="false" aria-controls="collapseExample"
              onClick={()=>{
               if( document.getElementById("admin-dash-nav").style.marginLeft==="0px"){
                document.getElementById("admin-dash-nav").style.marginLeft="250px"

               }
               else
               {
                document.getElementById("admin-dash-nav").style.marginLeft="0px"
               }

              }}
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
            


            < ReactLink to="/">
              <a  style={{color:"white"}} className="nav-link">
                Home
              </a>
              </ReactLink>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
            </li>
          </ul>
          {/* SEARCH FORM */}
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a  style={{color:"white"}} className="nav-link main-icon" data-toggle="dropdown"  href="#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div  className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                       Afzaal Shoukat
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="dist/img/user8-128x128.jpg"
                      alt="User"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                      Bilal Shoukat
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="dist/img/usr3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                       Waqar
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a  style={{color:"white"}} className="nav-link main-icon" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span 
               
               onClick={()=>
                {
                  window.alert("Test")
                }}
                
                className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
         
            <li className="nav-item dropdown">
              <a  style={{color:"white"}} className="nav-link main-icon" data-toggle="dropdown" href="#">
                <i className="far fa-user" />
                
              </a>
              <div style={{textAlign:"center"}} className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
               
<div

className="dropdown-item dropdown-header">
<img
                onClick={e =>{
                  e.preventDefault()
                   e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                
                }}
                       style={{height:"75px"}}
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className=" img-circle"
                    />
</div>
                
                <div className="dropdown-divider" />

                <h3
                
                style={{    fontSize: "larger",marginTop:"10px"}} className="dropdown-item-title">
                       {userInfo["userData"].name}
                       </h3>
                       <p style={{ marginTop:"4px"}} className="text-sm"> {userInfo["userData"].email}</p>
                       <p style={{ marginTop:"4px"}} className="text-sm text-muted">
                        <i  className="far fa-user mr-1" /> {userInfo["sender"]}
                      </p>
                      <div style={{display: "flex"}}>
                      <p  style={{ marginTop:"4px",    width: "70%",
    margin: "auto",
    
    overflow: "hidden"}} className="text-sm text-muted">
                       
                       <text
                        id="owner-hash"
                       
                       >{userInfo["userData"].hash}</text> 
                      </p>
                      
                      <button tyle={{    paddingLeft: "2px",
    paddingRight: "2px",cursor:"default"}}  data-toggle="tooltip" data-placement="top" title="Copy Hash to Clipboard." className="btn" data-clipboard-target="#owner-hash">
                      <i  className="far fa-copy mr-1" />
  </button>
  <button 
  onClick={()=>{
   this.updateHash()
  }}
  
  
  
  
  style={{    paddingLeft: "2px",
    paddingRight: "2px",cursor:"default"}} data-toggle="tooltip" data-placement="top" title="Change Hash" className="btn" >
  <i id="update-hash-icon" className="fa fa-recycle mr-1" />
  </button>

                      </div>
                      
                      <div style={{margin:"20px"}}
                      className="profile-card-mananage-account-text"
                      onClick={()=>{
                        this.getMenuSelection("setting")
                    }}
                      
                      >
                          <text>
                              Manage your ManageIt Account
                          </text>

               </div>

               <div className="dropdown-divider" />
               <div style={{    margin: "20px",
    borderStyle: "groove",
    height: "40px",cursor:"pointer"}}
  
    
    >
                           <h6 
                             onClick={()=>{
                              window.alert("ssdk")
                                localStorage.clear()
                                history.push("/signin")
                            }}
                           
                           style={{marginTop:"6px"}}
                           
                           
                           >
                           Sign out of Account
                           </h6>
                       </div>
                       <hr></hr>
                       <div className="profile-card-home-p" style={{display:"flex",width:"80%",margin:"auto"}}>
                           <p style={{    fontSize: "smaller"}}>
                               Privacy Policy
                           </p>
                           <p style={{marginLeft:"32px", fontSize: "smaller"}}>
                               Terms of Service
                           </p>
                       </div>
              </div>
            </li>
    
         
         
         
            {/* Profile Dropdown Menu */}
           {/* <li className="nav-item dropdown">
            <a  style={{color:"white"}}    className="nav-link" data-toggle="dropdown"  href="#">
                <i className="far fa-user" />
                
        
             
              {/* <div
              onClick={()=>
              window.alert("Hell")
            }
              
               className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
               <Card style={{textAlign:"center",fontFamily:"poppins"}}>
                   <Card.Body  >
                   
                       <div>
                       <img
                       style={{height:"75px"}}
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className=" img-circle"
                    />

                       </div>

                       <div>
                       <h3 style={{    fontSize: "larger",marginTop:"10px"}} className="dropdown-item-title">
                       {userInfo["userData"].name}
                       </h3>
                       <p style={{ marginTop:"4px"}} className="text-sm"> {userInfo["userData"].email}</p>
                       <p style={{ marginTop:"4px"}} className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> {userInfo["sender"]}
                      </p>
                      <p  style={{ marginTop:"4px"}} className="text-sm text-muted">
                       <text
                       onClick={()=>{
                        console.log("Hellllllllllllllllll")
                      }} id="owner-hash"
                       
                       >{userInfo["userData"].hash}</text> 
                      </p>
                      <div 
                      className="profile-card-mananage-account-text"
                      onClick={()=>{
                        this.getMenuSelection("setting")
                    }}
                      
                      >
                          <text>
                              Manage your ManageIt Account
                          </text>
                      </div>
                       </div>
                       <hr></hr>
                   </Card.Body>
                   <Card.Footer>
                       <div style={{    marginTop: "20px",
    borderStyle: "groove",
    height: "40px",cursor:"pointer"}}
  
    
    >
                           <h6 
                             onClick={()=>{
                              window.alert("ssdk")
                                localStorage.clear()
                                history.push("/signin")
                            }}
                           
                           style={{marginTop:"6px"}}
                           
                           
                           >
                           Sign out of Account
                           </h6>
                       </div>
                       <hr></hr>
                       <div className="profile-card-home-p" style={{display:"flex"}}>
                           <p style={{    fontSize: "smaller"}}>
                               Privacy Policy
                           </p>
                           <p style={{marginLeft:"32px", fontSize: "smaller"}}>
                               Terms of Service
                           </p>
                       </div>
                   </Card.Footer>
               </Card>
         
              </div>
            
   
                
              </a>
            </li>*/}
          </ul> 
        </nav>
      </div>
    );
  }
}
