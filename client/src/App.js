import React from 'react';
import './App.css';

import signup from './components/AuthComponents/SignUp';
import {Signn} from './components/AuthComponents/Signn';
import HomeComponent  from './components/components/Home'
import ContactPage from './components/components/ContactPage'
import ManageItApp  from './components/components/manageitapp'
import AdminDashboard from './AdminDashboard/Dashboard'
import MainInventryPage from './components/Inventry/Transport/MainInventryPage'
import { Router,Switch,Route} from 'react-router-dom';
import history from './history';

import Attendance from './components/HRM/AddAttendance'
import AddCaptain from './components/HRM/RegisterDriver'
import AddJobs from './components/HRM/JobAds'
import PersonalDetails from './components/customerComponents/Tickets/personalDetails'
import BookSeat from './components/customerComponents/Tickets/BookSeat'
import BookBusTicket from './components/customerComponents/Tickets/BookBusTicket'
import AddBusRoute from './components/Inventry/RouteManagement/AddBusRoute'
import UserProfile from './components/user/UserProfile'

import mainPage from './components/customerComponents/HomePage/mainPage'
import StripePayment from './components/customerComponents/payment/stripe_payment'

import RegisterCompany from './components/AuthComponents/RegisterCompany/Signup'


import MapLocationPicker from './components/Utils/MapLocationPicker'
import VahicleTracking from './components/Utils/VahicleTrackingPage'

import AdminHome from './AdminDashboard/Home/HomePage'


import Mailbox from './components/mailbox/MailMainPage'







function App() {
  
    document.title = "ManageIt"
    
  
  return (
   
    <Router history={history}>
      <Switch>
      
      <Route path="/MapLocationPicker" exact component={MapLocationPicker}></Route>
      <Route path="/" exact component={HomeComponent}></Route>
      <Route path="/register-company" exact component={RegisterCompany}></Route>
       <Route path="/home" exact component={mainPage}></Route> 
      <Route path="/app" exact component={ManageItApp}></Route>
      
      <Route  path="/signup" exact component={signup}></Route>
      <Route  path="/signin" exact component={Signn}></Route>
      <Route  path="/inventry" exact component={MainInventryPage}></Route>
      <Route path="/AdminDashboard" exact component={AdminDashboard}></Route>
      <Route path="/registerCaptain" exact component={AddCaptain}></Route>
      <Route path="/attendance" exact component={Attendance}></Route>
      <Route path="/addjob" exact component={AddJobs}></Route>
      
      <Route path="/route" exact component={AddBusRoute}></Route>
      <Route path="/profile" exact component={UserProfile}></Route>
      <Route path="/bookticket" exact component={PersonalDetails}></Route>
      <Route path="/bookseat" exact component={BookBusTicket}></Route>
      <Route path="/contactus" exact component={ContactPage}></Route>
      <Route path="/payment" exact component={StripePayment}></Route>

      
      <Route  path="/trackRide" exact component={VahicleTracking}></Route>
      <Route  path="/adHome" exact component={AdminHome}></Route>

      <Route  path="/abc" exact component={Mailbox}></Route>
      
     
      
      </Switch>
    </Router>
   
  );
}

export default App;
