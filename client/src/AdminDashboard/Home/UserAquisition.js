import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './css/home_details.css'
import HighlightCards from './HighlightCard'
import Chart from 'react-apexcharts'
import HRMTable from '../HRMTable'

var type="User Aquisition";
var data=[]
var chart="radar"
var chart_type="area"
var latest_users=[];
const HRMmenuOptions=['Customers','Staff','owners','Contractors'];
export default class UserAquisition extends Component {
  
    constructor(props) {
        super(props);
   
        this.state = {
          options: this.props.data[0]
          ,
          type:"area",
          series: this.props.data[1]
        }
        latest_users=[{
          "name":"Afzaal Shoukat",
          "email":"afzaalshoukat@outlook.com",
          "date":"12/2/2020"
        },
        {
          "name":"Ali Hussan",
          "email":"ali@gmail.com",
          "date":"13/2/2020"
        }
      ,{
        "name":"Nabeel Saleem",
          "email":"tango99@hotmail.com",
          "date":"14/3/2020"
      }
    ,{
      "name":"Ibrahim Ali",
          "email":"imibrahim@gmail.com",
          "date":"15/3/2020"
    },
    {
      "name":"John Snow",
          "email":"john@manageit.com",
          "date":"16/3/2020"
    }
  ]
        chart=<Chart options={this.state.options} series={this.state.series} type={chart_type} />
        data={
            "New Users":100,
            "Total Users":1200,
            "Deactivation":0,
            "Pending":10,
        }
    
    
      }

      renderTopProducts=()=>{

    
return latest_users.map((element, index)=>{
          
       
          
  return  <li  style={{listStyle:"none",marginLeft:"10px",marginRight:"10px",color:"black"}}  >
         <Card style={{height:"70px"}}>
            <Card.Body style={{margin:"0px",padding:"0px",borderRadius:"10px",background:"fff"}}>
              <div>
              <h6 style={{    fontSize: "initial"}} >{element.name}</h6>
             
              </div>
              <div style={{marginTop:"20px"}}>
              <img style={{float:"left"}} src="/assets/images/ticket.png"></img>
              <h5 style={{float:"left",marginLeft:"7px",fontSize: "initial"}}>{element.email}</h5>
              <text  style={{float:"right",margin:"0px"}}>{element.date}</text>
              </div>
            </Card.Body>
          </Card>
      
          </li>
 } )







        
      }
    render() {
        return (
            <div>
                
                <div style={{marginLeft: "50px",marginTop:"50px"}}>
                    <h3 style={{margin:"0px",padding:"0px"}}
                    
                    
                    >{type}  Dashboard</h3>
                    
                    <text style={{margin:"0px",padding:"0px",fontSize:"x-small",color:"black",marginLeft:"15px"}}><span style={{cursor:"pointer",color:"blue"}}
                    
                    onClick={()=>{
                      this.props.backBtnPressed()
                    }}
                    > Dashboard</span> > {type}  Dashboard </text>
                    
                </div>
<HighlightCards data={data}></HighlightCards>
            
           <div>
<Card>
    
</Card>

           </div>

<div style={{width:"600px",float:"left",marginLeft:"60px"}}>
    
<Card >
<Card.Header>
<div>
    <h3 style={{float:"left"}}>Graphical Representation of Users

    </h3>
  
    <div style={{padding: "0px"}} className="revenues-actions cf">
    <div className="dd-wrap js-ddown-transactions"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a id="chart-type" className="dropdown-toggle max-width" data-toggle="dropdown">Area</a>
            <ul onClick={(event)=>{
                event= event || window.event;
                 
                 var target =event.target || event.srcElement; 
                  chart_type=target.innerHTML.toLowerCase();
                 
                 document.getElementById("chart-type").innerHTML=chart_type;
               
               
                
                this.setState({
                    type:chart_type,
                   
                    options: {
                      chart: {
                        id: 'apexchart-example'+chart_type+Math.floor(Math.random() * 100000) 
                      },
                      xaxis:this.props.data[0].xaxis
                    },
                    series: this.props.data[1]
                
                });
                chart=<Chart options={this.state.options} series={this.state.series} type={chart_type} />
           
                

            }} className="dropdown-menu  " role="menu" style={{top: '-2px', width: 177}}>
              <li>
                
                  <span className="text-inner">Line</span>
                
              </li>
              <li>
                
                  <span className="text-inner">Bar</span>
                
              </li>
              <li>
               
                  <span className="text-inner">Area</span>
             
              </li>
              
              
              
             
              <li>
               
                  <span className="text-inner">Radar</span>
               
              </li>
              
             
              <li>
                
                  <span className="text-inner">Heatmap</span>
              
              </li>
            </ul>
          </div>
        </div></div>
</div>



 </div>
</Card.Header>

<Card.Body>
    { chart}
  


 
</Card.Body>


</Card>
</div>

<div style={{width:"600px",float:"right",marginRight:"60px"}}>
    
<Card >
<Card.Header>
<div>
    <h3 style={{float:"left"}}>New Users

    </h3>
  
    


 </div>
</Card.Header>

<Card.Body style={{margin:"0px",padding:"0px"}}>
    
  
<ul style={{margin:"0px",padding:"0px",height:"410px",overflow:"scroll",fontFamily:"poppins"}}>
  {this.renderTopProducts()}
</ul>

 
</Card.Body>


</Card>


</div>

<div id="user-dash-table" style={{float:"left",width:"100%"}}>
<HRMTable tableFor="hrm" menu={HRMmenuOptions}></HRMTable>
</div>


           </div>
        )
    }
}
