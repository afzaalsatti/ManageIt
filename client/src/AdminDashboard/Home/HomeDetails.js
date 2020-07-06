import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './css/home_details.css'
import HighlightCards from './HighlightCard'
import Chart from 'react-apexcharts'
var type="Sales";
var data=[]
var chart="radar"
var chart_type
export default class HomeDetails extends Component {
  
    constructor(props) {
        super(props);
     
        this.state = {
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
             
              categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
          }
          ,
          type:"area",
          series: [{
            name: 'No of Purchases',
            data: [31, 42, 13, 74, 5, 26, 27, 38,3,39]
          },
          
        ]
        }
        chart=<Chart options={this.state.options} series={this.state.series} type={chart_type} />
        data={
            "New Sales":200,
            "Total Income":1200,
            "Cancelations":50,
            "Cancel Income":300,
        }
    
    
      }
    render() {
        return (
            <div>
                
                <div>
                    <h3 style={{margin:"0px",padding:"0px"}}>{type}  Dashboard</h3>
                    
                    <text style={{margin:"0px",padding:"0px",fontSize:"x-small",color:"black",marginLeft:"15px"}}>Dashboard > {type}  Dashboard </text>
                    
                </div>
<HighlightCards data={data}></HighlightCards>
            
           <div>
<Card>
    
</Card>

           </div>

<div style={{width:"50%"}}>
    
<Card >
<Card.Header>
<div>
    <h3 style={{float:"left"}}>Graphical Representation of sales

    </h3>
  
    <div className="revenues-actions cf">
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
                          id: 'apexchart-example'+chart+Math.floor(Math.random() * 100000) 
                        },
                        xaxis: {
                         
                          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        series: [{
                            name: 'No of Purchases',
                            data: [31, 42, 13, 74, 5, 26, 27, 38,3,39]
                          },
                          
                        ]
                      }
                
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

           </div>
        )
    }
}
