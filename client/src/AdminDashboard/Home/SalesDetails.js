import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './css/home_details.css'
import HighlightCards from './HighlightCard'
import Chart from 'react-apexcharts'
import Bookings from '../Tables/TicketEarnings'
import RC2 from 'react-chartjs2';
var type="Sales";
var data=[]
var chart="area"
var chart_type="area";
var top_product=[];
var mytestchart;
var mytestchartOptions;

var userInfo;
export default class SalesDetails extends Component {
  

    constructor(props) {
        super(props);
        userInfo=JSON.parse(localStorage.getItem("userInfo"));
        this.state = {
          options: this.props.data[0]
          ,
          type:"area",
          series: this.props.data[1],
          showMore:false,
          chartData:[],
          chartType:"line",
          salesData:[]
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
    
        const testChart={

          labels:this.state.options,
          datasets:[
              {
                  label:"Label",
                  data:this.state.series
              }
          ]
      }
   
       mytestchartOptions = {
        legend: {
        display: false
        },
        scales: {
        xAxes: [{
        gridLines: {
        
        display: false
        },
        ticks: {
        
        beginAtZero:true,
        min: 0
        }
        }],
        yAxes: [{
        ticks: {
        beginAtZero:true,
        
        },
        gridLines: {
          display: false
        }
        }]
        }
        };
        
    

      }

updateChart=(new_labels,new_data)=>{

  
  if(new_data===this.state.series[0].data)
  {
    data={
      "New Sales":200,
      "Total Income":1200,
      "Cancelations":50,
      "Cancel Income":300,
  }

  }
  var ctx = document.getElementsByClassName('chartjs-render-monitor')[0].getContext("2d")
        // var gradient = ctx.createLinearGradient(0, 0, 0, 400)
        // gradient.addColorStop(0, 'rgba(229, 239, 255, 1)')
        // gradient.addColorStop(1, '#FFFFFF')
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");
gradientStroke.addColorStop(1, "#f49080");

        const newData = {
          labels: new_labels,
          datasets: [
            {
              label: 'Sales',
              data:new_data,
              backgroundColor: gradientStroke,
              
            pointBackgroundColor: "black",
            pointHoverBackgroundColor: "red",
            
            pointRadius: 3,
           
            }
          ]
    
        }
        this.setState({chartData: newData})

}



      componentDidMount(){
      
        //your code
        
        var ctx = document.getElementsByClassName('chartjs-render-monitor')[0].getContext("2d")
        // var gradient = ctx.createLinearGradient(0, 0, 0, 400)
        // gradient.addColorStop(0, 'rgba(229, 239, 255, 1)')
        // gradient.addColorStop(1, '#FFFFFF')
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");
gradientStroke.addColorStop(1, "#f49080");

        const newData = {
          labels: this.state.options.xaxis.categories,
          datasets: [
            {
              label: 'Sales',
              data:this.state.series[0].data,
              backgroundColor: gradientStroke,
              
            pointBackgroundColor: "black",
            pointHoverBackgroundColor: "red",
            
            pointRadius: 3,
           
            }
          ]
    
        }
        this.setState({chartData: newData})
      }
      renderTopProducts=()=>{

    
return top_product.map((element, index)=>{
          
       
          
  return  <li  style={{listStyle:"none",marginLeft:"10px",marginRight:"10px"}}  >
         <Card style={{height:"70px"}}>
            <Card.Body style={{margin:"0px",padding:"0px",borderRadius:"10px"}}>
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

      prepareDataToDisplay=()=>{
        let dates=[]
        let group = this.state.salesData.reduce((r, a) => {
         
          r[a.date] = [...r[a.date] || [], a];

          return r;
         }, []);
         let keys=Object.keys(group);
         let actual_data=[]
let total_income=0;
         keys.forEach(element => {

          let sum=0;
          group[element].forEach(element => {
           sum=sum+ parseFloat(element["price"])
          });
          total_income=total_income+sum;

          actual_data.push(sum)



          let group2 = this.state.salesData.reduce((r, a) => {
         
            r[a.routeId] = [...r[a.routeId] || [], a];
  
            return r;
           }, []);

           console.log(group2)

  
 });
 data={
  "New Sales":total_income/2.5,
  "Total Income":total_income,
  "Cancelations":0,
  "Cancel Income":0,
}
this.updateChart(keys,actual_data)
        //console.log(this.state.salesData)
      }
      getDataFromServer=()=>{

      if(this.state.salesData.length>1)
      {
       this.prepareDataToDisplay()
      }
      else{
        let address="getTicketEarnings";
       console.log(userInfo["userData"].company)
        let req_data={
          "company":userInfo["userData"].company
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
         
   let earning=data.result;
     
   
         this.setState({
          salesData:earning,
          
      
         })
   
   this.prepareDataToDisplay();
        
      
        
       }
     // `data` is the parsed version of the JSON returned from the above endpoint.
     console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
     }).catch((error) => {
     
     
     //   reqInProcess=reqInProcess+1;
     // this.RequestToServer(reqInProcess);
     //this.notifyError("Unexpected error Try again...  ");
     });
      }

        
     
      }

      showMore=()=>{
        if(this.state.showMore)
        {
          this.setState({
            showMore:false
          })

          document.getElementById("showDetailBtn").innerText="Show more"
        }
        else
        {
          this.setState({
            showMore:true
          })

          document.getElementById("showDetailBtn").innerText="Hide"
        }
        
      }
    render() {
        return (
            <div>
              <button className="data_loading_btn"
              onClick={()=>{
                this.updateChart(this.state.options.xaxis.categories,this.state.series[0].data)
              }}
              
              >
                Load Test Data
              </button>
              <button  className="data_loading_btn"
                onClick={()=>
                {
                  this.getDataFromServer()
                }}
              >
                Load Real Data
              </button>
                
                <div style={{marginLeft: "50px",marginTop:"50px"}}>
                    <h3 style={{margin:"0px",padding:"0px"}}
                    
                    
                    >{type}  Dashboard</h3>
                    
                    <text style={{margin:"0px",padding:"0px",fontSize:"x-small",color:"black",marginLeft:"15px"}}><span style={{cursor:"pointer",color:"blue"}}
                    
                    onClick={()=>{
                      this.props.backBtnPressed()
                    }}
                    > Dashboard</span>  {type}  Dashboard </text>
                    
                </div>
<HighlightCards data={data} ></HighlightCards>
            
           <div>
<Card>
    
</Card>

           </div>

           <div style={{marginLeft:"60px"}} className="dd-wrap js-ddown-transactions"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a id="main_chat_type" className="dropdown-toggle max-width" data-toggle="dropdown">line</a>
            <ul onClick={(event)=>{
                event= event || window.event;
                 
                 var target =event.target || event.srcElement; 
                 document.getElementById("main_chat_type").innerHTML=target.innerHTML;
              //  if(target.innerHTML==='doughnut')
              //  {
              //    window.alert("Huuuuuuuuuuu")
              //   var ctx = document.getElementsByClassName('chartjs-render-monitor')[0].getContext("2d")
               
         
              //   const newData = {
              //     labels: this.state.options.xaxis.categories,
              //     datasets: [
              //       {
              //         label: 'Sales',
              //         data:this.state.series[0].data,
              //         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
                   
              //       }
              //     ]
            
              //   }

              //   this.setState({
              //     chartType:target.innerHTML,
              //     chartData:newData
               
              //  });
              //  }
              //    else
              //    {
              //     this.setState({
              //       chartType:target.innerHTML
                 
              //    });
              //    }
                
               
                 this.setState({
                  chartType:target.innerHTML
               
               });
                

            }} className="dropdown-menu  " role="menu" style={{top: '-2px', width: 177}}>
              <li>
                
                  <span className="text-inner">line</span>
                
              </li>
              <li>
                
                  <span className="text-inner">bar</span>
                
              </li>
              <li>
               
                  <span className="text-inner">doughnut</span>
             
              </li>
              
              
              
             
              <li>
               
                  <span className="text-inner">radar</span>
               
              </li>
              
             
              <li>
                
                  <span className="text-inner">polarArea</span>
              
              </li>
              
           
            </ul>
          </div>
        </div></div>


 
 <div
 className="top-chart" >
     
 <RC2  data={this.state.chartData} options={mytestchartOptions} type={this.state.chartType} />
 </div>

           



<div style={{float:"left",width:"100%"}}>
<Bookings  address="getAllBookings"></Bookings>
</div>
<div style={{textAlign:"center"}}>
  <button
  style={{width:'120px'}}
 
   id="showDetailBtn"
  onClick={this.showMore}
  
  >Show more</button>
</div>
<div  className={this.state.showMore?"showMore":"hideMore"}>

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
          
           </div>
        )
    }
}
