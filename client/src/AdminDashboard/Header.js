import React, { Component } from "react";
import history from '../history'
import {Link as ReactLink} from 'react-router-dom'
import { Card } from 'react-bootstrap'
function navigateToOtherPage(params) {
   // alert(params)
    
}

var userInfo;
export default class Header extends Component {

 
constructor(props)
{
  super(props)
  userInfo=JSON.parse(localStorage.getItem("userInfo"));
}

  render() {
    return (
      <div >
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
            < ReactLink to="/contact">
              <a   style={{color:"white"}}href="#" className="nav-link">
                Contact
              </a>
              </ReactLink>
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
              <a  style={{color:"white"}} className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
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
              <a  style={{color:"white"}} className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
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
            <li className="nav-item">
            <a  style={{color:"white"}} className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-user" />
                
             
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
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
    onClick={()=>{
        localStorage.clear()
        history.push("/signin")
    }}
    
    >
                           <h6 style={{marginTop:"6px"}}
                           
                           
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
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
