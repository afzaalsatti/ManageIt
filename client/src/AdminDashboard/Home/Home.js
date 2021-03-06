import React, { Component } from 'react'
import './css/home.css'
import { Card } from 'react-bootstrap'
import Chart from 'react-apexcharts'
var getDetails;
var userInfo;
var company="";
export default class Home extends Component {
    constructor(props) {
        super(props);
        userInfo=JSON.parse(localStorage.getItem("userInfo"));
        company=userInfo["userData"].company
        getDetails=this.props.getDetails;
        this.state = {
          branches:[],
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
                
              categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30]
            }
          },
          series: [{
            name: 'No of Purchases',
            data: [31, 42, 13, 74, 5, 26, 27, 38, 49, 120, 111, 128, 13, 134, 15, 16, 17, 118, 192, 120, 221, 322, 23, 249, 25,26, 127, 158, 209, 30]
          }]
        }

        this.getCompanyBranches()
      }


highlightCompany=()=>{
  

let length=document.getElementById("branch_list").options.length;
for(let i=0;i<length;i++)
{

  if(document.getElementById("branch_list").options[i].innerHTML==company)
  {

    document.getElementById("branch_list").options[i].style.background="red"
    document.getElementById("branch_list").options[i].style.color="white"

  }
  else{
    document.getElementById("branch_list").options[i].style.background="white"
    document.getElementById("branch_list").options[i].style.color="black"
  }
}

  // document.getElementById("branch_list").options.forEach(element => {
  //   console.log(element.innerHTML)
  // });
}

      componentDidUpdate()
      {

       
       
if(this.state.branches.length>0)
{
  //company=this.state.branches[0]["company_name"];
  let i=0;
  this.state.branches.forEach(element => {
    var opt = document.createElement('option');
    opt.text = element["company_name"];
    opt.value = element["company_name"];
    document.getElementById("branch_list").add(opt)
    i=i+1
  });
  document.getElementById("branch_list").value=userInfo["userData"].company;
  this.highlightCompany()
}

        
      }
      getCompanyBranches=()=>{
        let address="getAllBranches";
             
        let req_data={
          "parent":this.props.parentCompany
        }
       const options={
         method:"POST",
         headers:{
             'Content-type':"application/json"
             
         },
         body:JSON.stringify(req_data)
      }
      
      console.log(address)
      fetch("/"+address,options).then(response=>{
         return response.json();
      }).then(data=>{
       let status=data.status;
      
      
       if(status==='Success')
       {
console.log(data.result)
         this.setState({
          branches:data.result
         })
       
      
      
        
      
      //this.prepareDataToDisplay();
        
      
        
       }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      }).catch((error) => {
      
      
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
      //this.notifyError("Unexpected error Try again...  ");
      });
      }
      
     
    render() {
        return (
            <div>
<div id="ADHomeTiopDiv">
<div  style={{margin:"20px"}} id="ADHomeIstDiv">

<select 

onClick={()=>{

  let comp=document.getElementById("branch_list").value;
  if(company!=comp)
  {
    company=comp;
    this.highlightCompany()
    let temp=userInfo;
    temp["userData"].company=company;

    setTimeout(function() {
      localStorage.setItem("userInfo",JSON.stringify(temp))

     
      
   }, 50);
console.log(userInfo)

  }
 
}}




className={(userInfo.sender==="owner" ||userInfo.sender==="admin" ) ?"showComp":"hideComp"} id="branch_list">
    
</select>

<div className="ADHomerightDiv" >
   <text>Go to Docs</text>
   <img style={{width:"20px",marginLeft:"10px"}} src="/assets/svg/new_notify.svg"></img>

</div>






</div>


<div  style={{margin:"15px"}}>
<div style={{float:"left"}} >
    <text style={{    fontWeight: "500",
    fontSize: "x-large",     width: "fit-content"}}>Dashboard</text>
</div>
<div className="ADHomerightDiv" >
<div style={{padding:"0px"}} className="revenues-actions cf">
      
      <div style={{    display: "flex",
    marginLeft: "30px"}}>
     
                       
      <div className="dd-wrap js-ddown-years"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a className="dropdown-toggle max-width" data-toggle="dropdown">2020</a>
            <ul className="dropdown-menu  " role="menu" style={{top: '-2px', width: 72}}>
              <li>
                <a data-type="years" data-val={2020}>
                  <span className="text-inner">2020</span>
                </a>
              </li>
              <li>
                <a data-type="years" data-val={2019}>
                  <span className="text-inner">2019</span>
                </a>
              </li>
            </ul>
          </div>
        </div></div>
      <div className="dd-wrap js-ddown-months"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a className="dropdown-toggle max-width" data-toggle="dropdown" >All months</a>
            <ul className="dropdown-menu  " role="menu" style={{top: '-2px', width: 117}}>
              <li>
                <a data-type="months" data-val={13}>
                  <span className="text-inner">All months</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={1}>
                  <span className="text-inner">January</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={2}>
                  <span className="text-inner">February</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={3}>
                  <span className="text-inner">March</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={4}>
                  <span className="text-inner">April</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={5}>
                  <span className="text-inner">May</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={6}>
                  <span className="text-inner">June</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={7}>
                  <span className="text-inner">July</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={8}>
                  <span className="text-inner">August</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={9}>
                  <span className="text-inner">September</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={10}>
                  <span className="text-inner">October</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={11}>
                  <span className="text-inner">November</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={12}>
                  <span className="text-inner">December</span>
                </a>
              </li>
            </ul>
          </div>
        </div></div>
    
        </div>
      
     
    </div>
   

</div>


</div>
</div>

<div style={{float:"left",width:"100%",margin:"5px"}}>
<hr></hr>
<div style={{width: "80%",margin:"auto",    marginTop: "110px"}}>
<Card className="AnalyticsCard1">
   <Card.Header>
       <text style={{fontWeight: 600}} >Sales</text>
   </Card.Header>
   <Card.Body style={{margin:"0px",padding:"0px"}}>
       <div className="AnalyticsCardImage">
           <img src="/signinimage.jpg">
           </img>
       </div>
       <div className="AnalyticsCardText">
           <h4>
          Sales Analytics
           </h4>
           <text>
           We are showing latest data from your sales
           This graph represents your sales in given time span(you can change time duaration to see variabtions)
           Scroll down for other analytical data that mogt be useful for you
           </text>
         
       </div>
   </Card.Body>
</Card>

<Card className="AnalyticsCard2">
 
 

   <Card.Body style={{margin:"0px",padding:"0px"}}>
       
        <text>No of Purchases in last 30 Days 0</text>
        <br></br>
        <Chart options={this.state.options} series={this.state.series} type="area" />
 
         
        <a style={{color:"blue",float:"right"}}
        onClick={()=>{
          
          let data=[this.state.options,this.state.series];
          getDetails("sales",data);
        }}
        >Explore more &#8594;</a>
   </Card.Body>

  
</Card>
</div>
</div>

<div style={{float:"left",width:"100%",margin:"5px"}}>
<hr></hr>
<div style={{width: "80%",margin:"auto"}}>
<Card className="AnalyticsCard1">
   <Card.Header>
       <text style={{fontWeight: 600}} >New User Acquistion</text>
   </Card.Header>
   <Card.Body style={{margin:"0px",padding:"0px"}}>
       <div className="AnalyticsCardImage">
           <img src="/signinimage.jpg">
           </img>
       </div>
       <div className="AnalyticsCardText">
           <h4>
            New User Acquistion Analytics 
           </h4>
           <text>
           Showing latest data of new User Acquistion
           This graph represents your new Customer Acquistion in given time span(you can change time duaration to see variabtions)
           Scroll down for other analytical data that mogt be useful for you
           </text>
         
       </div>
   </Card.Body>
</Card>

<Card className="AnalyticsCard2">
 
 

   <Card.Body style={{margin:"0px",padding:"0px"}}>
       
        <text>No of New Users in last 30 Days 0</text>
        <br></br>
        <Chart options={this.state.options} series={this.state.series} type="scatter" />
 
         
        <a style={{color:"blue",float:"right"}}
         onClick={()=>{
          
          let data=[this.state.options,this.state.series];
          getDetails("new_users",data);
        }}
        
        >Explore more &#8594;</a>
   </Card.Body>

  
</Card>
</div>
</div>


<div style={{float:"left",width:"100%",margin:"5px"}}>
<hr></hr>
<div style={{width: "80%",margin:"auto"}}>
<Card className="AnalyticsCard1">
   <Card.Header>
       <text style={{fontWeight: 600}} >Rides</text>
   </Card.Header>
   <Card.Body style={{margin:"0px",padding:"0px"}}>
       <div className="AnalyticsCardImage">
           <img src="/signinimage.jpg">
           </img>
       </div>
       <div className="AnalyticsCardText">
           <h4>
           Booking Rides Analytics 
           </h4>
           <text>
           Showing latest data of Ride Bookings
           This graph represents Ride Bookings in given time span(you can change time duaration to see variabtions)
           Scroll down for other analytical data that mogt be useful for you
           </text>
         
       </div>
   </Card.Body>
</Card>

<Card className="AnalyticsCard2">
 
 

   <Card.Body style={{margin:"0px",padding:"0px"}}>
       
        <text>Ride Bookings last 30 Days 0</text>
        <br></br>
        <Chart options={this.state.options} series={this.state.series} type="bar" />
 
         
        <a style={{color:"blue",float:"right"}}
         onClick={()=>{
          
          let data=[this.state.options,this.state.series];
          getDetails("rides",data);
        }}
        >Explore more &#8594;</a>
   </Card.Body>

  
</Card>
</div>
</div>

<div style={{float:"left",width:"100%",margin:"5px"}}>
<hr></hr>
<div style={{width: "80%",margin:"auto"}}>
<Card className="AnalyticsCard1">
   <Card.Header>
       <text style={{fontWeight: 600}} >Expedetures</text>
   </Card.Header>
   <Card.Body style={{margin:"0px",padding:"0px"}}>
       <div className="AnalyticsCardImage">
           <img src="/signinimage.jpg">
           </img>
       </div>
       <div className="AnalyticsCardText">
           <h4>
           Expedeture Analytics 
           </h4>
           <text>
           Showing latest data of Expedetures
           This graph represents Ride Bookings in given time span(you can change time duaration to see variabtions)
           Scroll down for other analytical data that mogt be useful for you
           </text>
         
       </div>
   </Card.Body>
</Card>

<Card className="AnalyticsCard2">
 
 

   <Card.Body style={{margin:"0px",padding:"0px"}}>
       
        <text>Ride Bookings last 30 Days 0</text>
        <br></br>
        <Chart options={this.state.options} series={this.state.series} type="area" />
 
         
        <a style={{color:"blue",float:"right"}}
         onClick={()=>{
          
          let data=[this.state.options,this.state.series];
          getDetails("expense",data);
        }}
        >Explore more &#8594;</a>
   </Card.Body>

  
</Card>
</div>
</div>

<div style={{float:"left",width:"100%",margin:"5px"}}>
<hr></hr>
<div style={{width: "80%",margin:"auto"}}>
<Card className="AnalyticsCard1">
   <Card.Header>
       <text style={{fontWeight: 600}} >Ride Cancelation</text>
   </Card.Header>
   <Card.Body style={{margin:"0px",padding:"0px"}}>
       <div className="AnalyticsCardImage">
           <img src="/signinimage.jpg">
           </img>
       </div>
       <div className="AnalyticsCardText">
           <h4>
           Ride Cancelation Analytics 
           </h4>
           <text>
           Showing latest data of Ride Cancelation
           This graph represents Ride Cancelation in given time span(you can change time duaration to see variabtions)
           Scroll down for other analytical data that mogt be useful for you
           </text>
         
       </div>
   </Card.Body>
</Card>

<Card className="AnalyticsCard2">
 
 

   <Card.Body style={{margin:"0px",padding:"0px"}}>
       
        <text>No Ride Cancelation in last 30 Days 0</text>
        <br></br>
        <Chart options={this.state.options} series={this.state.series} type="line" />
 
         
        <a style={{color:"blue",float:"right"}}
         onClick={()=>{
          
          let data=[this.state.options,this.state.series];
          getDetails("ride_cancel",data);
        }}
        >Explore more &#8594;</a>
   </Card.Body>

  
</Card>
</div>
</div>
<div style={{float:"left",width:"100%",margin:"5px"}}>
<hr></hr>
<div style={{width: "80%",margin:"auto"}}>
<Card className="AnalyticsCard1">
   <Card.Header>
       <text style={{fontWeight: 600}} >Ticket Cancelation</text>
   </Card.Header>
   <Card.Body style={{margin:"0px",padding:"0px"}}>
       <div className="AnalyticsCardImage">
           <img src="/signinimage.jpg">
           </img>
       </div>
       <div className="AnalyticsCardText">
           <h4>
           Ticket Cancelation Analytics 
           </h4>
           <text>
           Showing latest data of Ticket Cancelation
           This graph represents Ticket Cancelation in given time span(you can change time duaration to see variabtions)
           Scroll down for other analytical data that mogt be useful for you
           </text>
         
       </div>
   </Card.Body>
</Card>

<Card className="AnalyticsCard2">
 
 

   <Card.Body style={{margin:"0px",padding:"0px"}}>
       
        <text>No of Tickets Canceled in last 30 Days 0</text>
        <br></br>
        <Chart options={this.state.options} series={this.state.series} type="radar" />
 
         
        <a style={{color:"blue",float:"right"}}
         onClick={()=>{
          
          let data=[this.state.options,this.state.series];
          getDetails("ticket_cancel",data);
        }}
        >Explore more &#8594;</a>
   </Card.Body>

  
</Card>
</div>
</div>

            </div>
        )
    }
}
