import React, { Component } from 'react'
import Charts from './Chart'

import HRMTable from './HRMTable'
import GoogleApiWrapper from './BusinessLocations'
import Inventry from '../components/Inventry/Transport/MainInventryPage'
import './css/adminlte.css'
import AddPerson from '../components/HRM/AddPerson'
import SearchPerson from '../components/HRM/AddAttendance'
import EarningTable from '../components/Inventry/Transport/Earnings'
import AttandanceTable from '../components/HRM/AttendanceTable'
import PostAJob from '../components/HRM/JobAds'
import AddBusRoute from '../components/Inventry/RouteManagement/AddBusRoute'
import BookBusTicket from '../components/customerComponents/Tickets/BookBusTicket'
import Compose from '../components/mailbox/compose'
import Mailbox from '../components/mailbox/mailbox'
import readMail from '../components/mailbox/readMail'
import {Link as ReactLink} from 'react-router-dom'
const data=[{'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'},
{'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'},
{'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'},
{'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'passwrd': 'icon'}];

const HRMmenuOptions=['Users','Staff','Customers','Contractors'];
const stores= [{lat: 31.570822, lng: 74.314384},
    
  {latitude: 31.5737210384 , longitude: 74.35531524546},
  {latitude: 33.6540, longitude: 73.0215},
  {latitude: 31.4815, longitude: 74.3030},
  {latitude: 33.6518, longitude: 73.1566}];

  var height="100px";

export default class Menu extends Component {
constructor()
{
  super();
 height=(window.screen.height)-310 +"px";

}

 
    render() {
      var handleToUpdate  =   this.props.handleToUpdate;
        return (
          <div className="collapse" id="collapseExample" >
                 <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  < ReactLink to="/">
  <a href="" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Manage It</span>
  </a>
  </ReactLink>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
      </div>
      <div className="info">
        <a   href=''className="d-block">Afzaal Shoukat</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2" style={{height:height}}>
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li onClick={() => handleToUpdate(<Charts></Charts>)} className="nav-item has-treeview menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
         
        </li>
         <li data-toggle="collapse" data-target="#hrm-menu" className="nav-item has-treeview" >
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
            Human Resource Management
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul id="hrm-menu" className="collapse">

          <li className="nav-item has-treeview" onClick={() => handleToUpdate( <AddPerson></AddPerson>)}>
              <a href="" className="nav-link">
                <i className="fa  fa-user-plus nav-icon" />
                <p >Add Person</p>
              </a>
              <ul className="nav nav-treeview">


           

                 
               </ul>
            </li>
            

            <li className="nav-item has-treeview"  onClick={() => handleToUpdate( <SearchPerson></SearchPerson>)}>
              <a href="" className="nav-link">
                <i className="fas  fa-search nav-icon" />
                <p >Attendance</p>
              </a>
              <ul className="nav nav-treeview">


           

                 
               </ul>
            </li>
            
            <li className="nav-item has-treeview" onClick={() => handleToUpdate( <PostAJob></PostAJob>)}>
              <a href="" className="nav-link">
                <i className="fa  fa-user-plus nav-icon" />
                <p >Post A Job</p>
              </a>
              <ul className="nav nav-treeview">


           

                 
               </ul>
            </li>
            
          </ul>
        </li>
        <li className="nav-item has-treeview" >
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-building" />
            <p >
              Locate Branches
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item has-treeview"onClick={() => handleToUpdate( <GoogleApiWrapper stores={stores}></GoogleApiWrapper>)}>
              <a href="" className="nav-link">
                <i className="fas fa-location-arrow nav-icon" />
                <p >Track on Map</p>
              </a>
              <ul className="nav nav-treeview">


           

                 
               </ul>
            </li>
            
            
            
          </ul>
        </li>


        <li className="nav-item has-treeview" >
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-building" />
            <p >
              Business Domain
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item has-treeview"onClick={() => handleToUpdate( <AddBusRoute></AddBusRoute>)}>
              <a href="" className="nav-link">
                <i className="fas fa-location-arrow nav-icon" />
                <p >Bus Route Management</p>
              </a>
              <ul className="nav nav-treeview">


           

                 
               </ul>
            </li>
            
            
            
          </ul>
       
          <ul className="nav nav-treeview">
          <li className="nav-item has-treeview" onClick={() => handleToUpdate( <BookBusTicket></BookBusTicket>)}>
              <a href="" className="nav-link">
                <i className="fas fa-location-arrow nav-icon" />
                <p >Book Bus Ticket</p>
              </a>
              <ul className="nav nav-treeview">


           

                 
               </ul>
            </li>
            
            
            
          </ul>
     
       
        </li>


{/* //Going to make sub tree */}
        <li className="nav-item has-treeview" >
          <a href="" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p >
              Inventry
              <i className="fas fa-angle-left right" />
            </p>
          </a>

          <ul className="nav nav-treeview">
            <li className="nav-item has-treeview" >
              <a href="" className="nav-link">
                <i className=" fa fa-bus nav-icon" />
                <p >Transport</p>
              </a>
              <ul style={{background:"#343A40",color:"white"}} className="nav nav-treeview">
<li style={{background:"#343A40",color:"white"}} className="nav-item has-treeview"  onClick={() => handleToUpdate( <Inventry comp="1"></Inventry>)}>
  <a className="nav-link">
<i className=" fa fa-bus nav-icon" />
                <p >  Expense on New Vahicle</p>
                </a>

</li>


<li style={{background:"#343A40",color:"white"}} onClick={() => handleToUpdate( <Inventry comp="2" ></Inventry>)} className="nav-item has-treeview">
<a className="nav-link">
<i className=" fa fa-bus nav-icon" />
                <p >  Other</p>
                </a>
  
</li>
           

                 
               </ul>
            </li>

          
            





            
            
          </ul>
        </li>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table" />
            <p>
              Tables
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item has-treeview" onClick={() =>handleToUpdate(<HRMTable  menu={HRMmenuOptions}data={data}></HRMTable>)}>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p >HRM </p>
              </a>
              <ul className="nav nav-treeview">

              
           

                 
               </ul>
            </li>

            <li className="nav-item has-treeview" onClick={() =>handleToUpdate(<AttandanceTable  ></AttandanceTable>)}>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p >Attendance</p>
              </a>
              <ul className="nav nav-treeview">

              
           

                 
               </ul>
            </li>
            <li className="nav-item has-treeview" onClick={() =>handleToUpdate(<EarningTable  ></EarningTable>)}>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p >Earning</p>
              </a>
              <ul className="nav nav-treeview">

              
           

                 
               </ul>
            </li>
            
          </ul>
        </li>
       
       
       
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-envelope" />
            <p>
              Mailbox
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item has-treeview" onClick={() =>handleToUpdate(<Mailbox  ></Mailbox>)}>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p >Mailbox</p>
              </a>
              <ul className="nav nav-treeview">

              
           

                 
               </ul>
            </li>
            <li className="nav-item has-treeview" onClick={() =>handleToUpdate(<Compose  ></Compose>)}>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p >Compose</p>
              </a>
              <ul className="nav nav-treeview">

              
           

                 
               </ul>
            </li>
            <li className="nav-item has-treeview" onClick={() =>handleToUpdate(<readMail  ></readMail>)}>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p >Read</p>
              </a>
              <ul className="nav nav-treeview">

              
           

                 
               </ul>
            </li>
          </ul>
        </li>
        
         
            
           
            
        
         
           
           
            
           
       
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

            </div>
        )
    }
}
