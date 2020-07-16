import React, { Component } from 'react'
import './css/partners.css'

import { Card } from 'react-bootstrap'
import history from '../../history'
import Spinner from './Spinner'

var partners=[
    {
        "name":"Elite Bus Service",
        "icon":"icon",
        "intro":"Learn how Keybank is using Anthos on Cisco HyperFlex to deploy a modern infrastructure framework with hybrid connectivity and multi-cloud application deployment",
"subdomain":"",
    },
    {
        "name":"Red Bus Service",
        "icon":"icon",
        "intro":"Learn how Keybank is using Anthos on Cisco HyperFlex to deploy a modern infrastructure framework with hybrid connectivity and multi-cloud application deployment",
"subdomain":"",
    },
    {
        "name":"Pakistan Railways",
        "icon":"icon",
        "intro":"Learn how Keybank is using Anthos on Cisco HyperFlex to deploy a modern infrastructure framework with hybrid connectivity and multi-cloud application deployment",
"subdomain":"",
    }
    ,
    {
        "name":"Faisal Movers",
        "icon":"icon",
        "intro":"Learn how Keybank is using Anthos on Cisco HyperFlex to deploy a modern infrastructure framework with hybrid connectivity and multi-cloud application deployment",
"subdomain":"",
    },
    {
        "name":"Awesome Movers",
        "icon":"icon",
        "intro":"Learn how Keybank is using Anthos on Cisco HyperFlex to deploy a modern infrastructure framework with hybrid connectivity and multi-cloud application deployment",
"subdomain":""
    },
    {
        "name":"At your Service",
        "icon":"icon",
        "intro":"Learn how Keybank is using Anthos on Cisco HyperFlex to deploy a modern infrastructure framework with hybrid connectivity and multi-cloud application deployment",
"subdomain":""
    }
]
export default class Partners extends Component {

constructor(props){
    super(props);
    this.state={
        isLoading:true}
}

getPartnerDetails=()=>{

 return partners.map((key, index)=>{
        
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 800);
    return <Card className="partner-card">
    <Card.Header style={{paddingLeft:"10px"}}>
        <div id="partner-logo-div">
    <img id="partner-logo" src="./assets/images/cash.png"></img>
    </div>
    <h5>{partners[index].name}</h5>
    </Card.Header>
    
    <Card.Body style={{paddingLeft:"10px"}}>
    {partners[index].intro}
    </Card.Body>
    
    <Card.Footer>
      <a style={{color:"blue"}}>Learn more &#8594;</a>
      <a style={{color:"green",float:"right"}}>Subscribe</a>
    </Card.Footer>
    
    </Card>
     })







}

    render() {
        return (
            <div>

<div className="partnerFirstDiv">
    <h2>
    Accelerate your success
    </h2>
    <text style={{width:"50%"}}>
    Our global partner program — Partner Advantage — can help you innovate faster, scale smarter, and stay secure.
    </text>
<br></br>

    <button 
    onClick={()=>{
        history.push({
            pathname: '/register-company'
            
          }
            )
    }}
    
    >Register Now</button>
</div>

<hr></hr>

<div>
<div className="partnerFirstDiv">
    <h2>
   What Will you get
    </h2>
    <text style={{width:"50%"}}>
    If you Register yourself as a partner with us you are going to enjoy these(given below), so what are you waiting for grt yourself registered.</text>
<br></br>

    
</div>
<br></br><br></br>
<div className="partner-benefit">

    <img src="./assets/images/cash.png"></img>
   
    <h4 style={{    fontSize: "large",
    width: "80%",

    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px"}}>
    More choices, endless possibilities

    </h4>
    <div className="partner-benefit-sub">
    <text>
    Google’s open platform allows our partners to build on our products to develop innovative solutions, creating new opportunities for our customers and expanding what’s possible in the cloud. It also helps ensure you’ll find the right partner to meet your technical and business needs.
    </text>
    </div>

</div>

<div className="partner-benefit">

    <img src="./assets/images/cash.png"></img>
   
    <h4 style={{    fontSize: "large",
    width: "80%",

    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px"}}>
    Proven technical mastery

    </h4>
    <div className="partner-benefit-sub">
    <text>
    Our highly trained partners include Google Certified professionals with demonstrated customer success using Google Cloud. As a network, they have experience with a wide range of industries, workloads, and solutions areas </text>
    </div>

</div>

<div className="partner-benefit">

    <img src="./assets/images/cash.png"></img>
   
    <h4 style={{    fontSize: "large",
    width: "80%",

    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px"}}>
    There from the start

    </h4>
    <div className="partner-benefit-sub">
    <text>
    Whether you’re looking for ready-to-go solutions, migration support, new app development, proof of concept, or end-to-end support for your cloud strategy, organizations in Partner Advantage can accelerate your project and improve your business outcome.</text>
    </div>

</div>






</div>

<div style={{width:"100%", float:"left"}}>
<hr></hr>

<div  className="partnerFirstDiv">
    
    <h2>
  Here are our Partners
    </h2>
    

    
</div>
</div>

<div   className={this.state.isLoading?"showOption loadingGifDiv":"hideOption loadingGifDiv"}>
        <Spinner ></Spinner>
        </div>

{this.getPartnerDetails()}






<br></br><br></br>


            </div>
        )
    }
}
