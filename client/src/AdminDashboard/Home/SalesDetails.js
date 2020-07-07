import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './css/home_details.css'
import HighlightCards from './HighlightCard'
import Chart from 'react-apexcharts'
var type="Sales";
var data=[]
var chart="radar"
var chart_type
var top_product=[];
export default class SalesDetails extends Component {
  
    constructor(props) {
        super(props);
     console.log(this.props.data[0])
     console.log(this.props.data[1])
        this.state = {
          options: this.props.data[0]
          ,
          type:"area",
          series: this.props.data[1]
        }
        top_product=[{
          "type":"Ticket",
          "route":"Islamabad to Karachi",
          "quantity":"200"
        },
        {
          "type":"Ticket",
          "route":"Lahore to Karachi",
          "quantity":"160"
        }
      ,{
        "type":"Ticket",
        "route":"Islamabad to Peshawar",
        "quantity":"150"
      }
    ,{
      "type":"Ticket",
      "route":"Islamabad to Lahore",
      "quantity":"120"
    },
    {
      "type":"Ticket",
      "route":"Peshawar to Islamabad",
      "quantity":"100"
    }
  ]
        chart=<Chart options={this.state.options} series={this.state.series} type={chart_type} />
        data={
            "New Sales":200,
            "Total Income":1200,
            "Cancelations":50,
            "Cancel Income":300,
        }
    
    
      }

      renderTopProducts=()=>{

    
return top_product.map((element, index)=>{
          
       
          
  return  <li  style={{listStyle:"none",marginLeft:"10px",marginRight:"10px",color:"white"}}  >
         <Card style={{height:"70px"}}>
            <Card.Body style={{margin:"0px",padding:"0px",borderRadius:"10px",background:"#2196f3"}}>
              <div>
              <h6 >{element.type}</h6>
              <text style={{float:"right",margin:"0px"}} >Quantity</text>
              </div>
              <div style={{marginTop:"20px"}}>
              <img style={{float:"left"}} src="/assets/images/ticket.png"></img>
              <h5  style={{float:"left",marginLeft:"7px"}}>{element.route}</h5>
              <text  style={{float:"right",margin:"0px"}}>{element.quantity}</text>
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
    <h3 style={{float:"left"}}>Graphical Representation of sales

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
    <h3 style={{float:"left"}}>Top Products Sold

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

           </div>
        )
    }
}
