import React from 'react'
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
class HomeNavBar extends React.Component{
    
    render()
    
    {
        return(
           

               <Navbar style={{height:"70px"}} sticky={'top'} className=" navbar shadow p-3 mb-5 bg-white rounded"  bg="light" variant="light">

  <img style={{height:"30px",width:"40px"}} src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/05/erp-infographics.jpg" alt="logo"/>
    <Nav className="mr-auto nav">
    <Nav.Link  style={{marginLeft:"120px",color:'black'}} href="#aboutus">Why manageIt</Nav.Link>
    <Nav.Link style={{marginLeft:"10px",color:'black'}} href="#solutions">Solutions</Nav.Link>
    <Nav.Link style={{marginLeft:"10px",color:'black'}} href="#products">Products</Nav.Link>
    <Nav.Link style={{marginLeft:"10px",color:'black'}} href="#features">Features</Nav.Link>
      <Nav.Link style={{marginLeft:"10px",color:'black'}}href="#pricing">Pricing</Nav.Link>
      <Nav.Link style={{color:"black",marginLeft:"10px"}} href="#contact">Contact us</Nav.Link>
      <div style={{float:"right"}}>
      <a
          
            style={{ color: "white",margin:"0px",marginRight:"10px",width:"auto" }}
            track-metadata-anchor_text="Go to console"
            className="erp-button"
            track-type="navigateTo"
            href="http://localhost:3000/signin"
            track-name="console"
            track-metadata-eventdetail="hero"
            track-metadata-position="banner"
            target="_blank"
          >
           Sign In
          </a>

          <a
          
            style={{ color: "white",margin:"0px",width:"auto" }}
            track-metadata-anchor_text="Go to console"
            className="erp-button"
            track-type="navigateTo"
            href="http://localhost:3000/signin"
            track-name="console"
            track-metadata-eventdetail="hero"
            track-metadata-position="banner"
            target="_blank"
          >
           Get Started
          </a>
      </div>
    </Nav>
   
  </Navbar>

  
 
 

           
        );
    }
}
export default HomeNavBar;