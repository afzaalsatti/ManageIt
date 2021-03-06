import React, { Component } from 'react'
import './pricingtable.css'
export default class pricingtable extends Component {
    render() {
        return (
            <div style={{width:"100%"}}>
  <div id="pricing-table" className="clear">
    <div className="plan">
      <h3>Enterprise<span>  <text style={{marginLeft: "20px"}}>
         $59
    </text></span></h3>
      <a className="signup" href>Sign up</a>         
      <ul>
        <li><b>10GB</b> Disk Space</li>
        <li><b>100GB</b> Monthly Bandwidth</li>
        <li><b>20</b> Email Accounts</li>
        <li><b>Unlimited</b> subdomains</li>			
      </ul> 
    </div>
    <div className="plan" id="most-popular">
      <h3>Professional<span>  <text style={{marginLeft: "20px"}}>
         $29
    </text></span></h3>
      <a className="signup" href>Sign up</a>        
      <ul>
        <li><b>5GB</b> Disk Space</li>
        <li><b>50GB</b> Monthly Bandwidth</li>
        <li><b>10</b> Email Accounts</li>
        <li><b>Unlimited</b> subdomains</li>			
      </ul>    
    </div>
    <div className="plan">
      <h3>Standard<span >
        
      <text style={{marginLeft: "20px"}}>
         $17
    </text>
        </span></h3>
      <a className="signup" href>Sign up</a>
      <ul>
        <li><b>3GB</b> Disk Space</li>
        <li><b>25GB</b> Monthly Bandwidth</li>
        <li><b>5</b> Email Accounts</li>
        <li><b>Unlimited</b> subdomains</li>			
      </ul>
    </div>
    <div className="plan">
      <h3>Basic<span>  <text style={{marginLeft: "20px"}}>
         $9
    </text></span></h3>
      <a className="signup" href>Sign up</a>		
      <ul>
        <li><b>1GB</b> Disk Space</li>
        <li><b>10GB</b> Monthly Bandwidth</li>
        <li><b>2</b> Email Accounts</li>
        <li><b>Unlimited</b> subdomains</li>			
      </ul>
    </div> 	
  </div>
</div>

           
        )
    }
}
