import React from 'react'
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
class HomeNavBar extends React.Component{
  constructor()
  {
    super();
    this.customHoverEffect=this.customHoverEffect.bind(this);
  }
  customHoverEffect = id => e => {
    
    const comp=document.getElementById(id);
    
comp.style.cursor="pointer";

if(comp.style.fontWeight==400 || comp.style.fontWeight=="" )
{
  comp.style.fontWeight=750;
}else
{
  comp.style.fontWeight=400;
}
    
}
    render()
    
    {
        return(
           

               <Navbar style={{height:"50px",    background: "#1976D2"}} sticky={'top'} className=" navbar shadow p-3 mb-5 rounded"  >

  <img style={{height:"30px",width:"40px"}} src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/05/erp-infographics.jpg" alt="logo"/>
    <Nav className="mr-auto nav">
    <a id="link1" style={{marginLeft:"120px",color:"white", textDecoration: "none" }}onMouseEnter={this.customHoverEffect("link1")} onMouseLeave={this.customHoverEffect("link1")}  className="HomeNavLink"  href="#aboutus">Why manageIt</a>
    <a id="link2" style={{color:"white", textDecoration: "none" }} className="HomeNavLink"onMouseEnter={this.customHoverEffect("link2")} onMouseLeave={this.customHoverEffect("link2")} href="#solutions">Solutions</a>
    <a id="link3" style={{color:"white", textDecoration: "none" }}className="HomeNavLink" onMouseEnter={this.customHoverEffect("link3")} onMouseLeave={this.customHoverEffect("link3")}  href="#products">Products</a>
    <a id="link4" style={{color:"white", textDecoration: "none" }} className="HomeNavLink" onMouseEnter={this.customHoverEffect("link4")} onMouseLeave={this.customHoverEffect("link4")} href="#features">Features</a>
      <a id="link5"style={{color:"white", textDecoration: "none" }} className="HomeNavLink" onMouseEnter={this.customHoverEffect("link5")} onMouseLeave={this.customHoverEffect("link5")} href="#pricing">Pricing</a>
      <a id="link6" style={{color:"white", textDecoration: "none" }}className="HomeNavLink"  onMouseEnter={this.customHoverEffect("link6")} onMouseLeave={this.customHoverEffect("link6")}href="#contact">Contact us</a>
      
   

  
    </Nav>
   
  </Navbar>

  
 
 

           
        );
    }
}
export default HomeNavBar;