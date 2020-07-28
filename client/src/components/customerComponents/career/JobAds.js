import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './jobs.css'

var test_data=[
    {
        //add Education and salary fields to job ad form
      
      "title": "Sales Manager",
      "postDate": "11/2/2020",
      "expireDate": "20/2/2020",
      "job_id":"12u12898912891y129y2",
      "contactEmail": "afzaalsatti74@gmail.com",
      "company_name": "Elite Bus Service Islamabad",
      "type": "Full Time",
      "branch": "Islamabad",
      "salary":"30k/month",
      "requirements": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ,"responsibiities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        
        "title": "Senior Web Developer Required",
        "postDate": "11/2/2020",
        "expireDate": "20/2/2020",
        "job_id":"sdljdskljd238293901291",
        "contactEmail": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Part Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "requirements": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ,"responsibiities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
    {
        
        "title": "Bus Driver",
        "postDate": "11/2/2020",
        "expireDate": "20/2/2020",
        "job_id":"kakjdaklsj8q3921021-",
        "contactEmail": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Full Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "requirements": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ,"responsibiities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    {
        
        "title": "Senior Web Developer Required",
        "postDate": "11/2/2020",
        "job_id":"2834823409u9jdw0",
        "expireDate": "20/2/2020",
        "contactEmail": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Part Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "requirements": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ,"responsibiities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
    {
        
        "title": "Senior Web Developer Required",
        "postDate": "11/2/2020",
        "expireDate": "20/2/2020",
        "job_id":"ow3u3409dke094903",
        "contactEmail": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Part Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "requirements": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ,"responsibiities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

var real_data=[]
export default class JobAds extends Component {
    constructor()
    {
        super();
        this.state={data:test_data}
        this.getJobAdsList=this.getJobAdsList.bind(this);
        this.showJobDetails=this.showJobDetails.bind(this);
        this.getDataFromServer()
    }



    getDataFromServer=()=>{

      let  address="getAllJobs";
       
        let requirements_data={
         
        }
       const options={
         method:"POST",
         headers:{
             'Content-type':"application/json"
             
         },
         body:JSON.stringify(requirements_data)
     }
   

     fetch("/"+address,options).then(response=>{
         return response.json();
     }).then(data=>{
       let status=data.status;
     
     
       if(status==='Success')
       {
         
        real_data=data.result;
       
         this.setState({
           data:real_data,
          
      
         })
  
   
        
      
        
       }
     // `data` is the parsed version of the JSON returned from the above endpoint.
     console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
     }).catch((error) => {
     
     
     //   requirementsInProcess=reqInProcess+1;
     // this.RequestToServer(reqInProcess);
     //this.notifyError("Unexpected error Try again...  ");
     });
     
      }
    showJobDetails = index => e =>
    {

        window.alert(index)
    }
    getJobAdsList=function()
    {
        
        let data=this.state.data;
        return data.map((key,index)=>{
            return  <li>

<Card className="JobAdsCard">
                <div className="historymiddlediv">
                <img
                    className="company_logo"
                     src="/assets/svg/tickets.svg">
                    </img>
                    <text id ="jobTitle" className="rideHistoryAddress">{data[index].title}</text>
             
                    <text id ="endDate" className="moveToRight">
                        <span style={{marginRight:"15px",color:"red"}}>
Last Date To Apply
                            </span>
                            <span>
                            {data[index].expireDate}
                            </span>
                    </text>
             
             <br></br>
             
             <text  style={{    marginLeft: "12px"}}>
                        <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Issue Date
                            </span>
                            <span style={{    fontSize: "12px"}}>
                            {data[index].postDate}
                            </span>
                    </text>
                   
                    </div>
                    
                   
                    <div>
                    <text  style={{    marginLeft: "70px"}}>
                        <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Expected Salary
                            </span>
                            <span style={{    fontSize: "12px"}}>
{data[index].salary}
                            </span>
                    </text>
                    <br></br>
                    <text style={{    fontSize: "12px", marginLeft: "70px"}} >
                        
                        {data[index].type}
                        {
                        data[index].type=="Full Time"?
                        
                            <img style={{height:"18px",marginBottom:"3px",marginLef:"3px"}} src="/assets/images/verified_icon_blue.png">
                        </img>
                        :
                        
                            <img style={{height:"18px",marginBottom:"3px",marginLef:"3px"}} src="/assets/images/verified_icon_grey.png">
                            </img>
                        
                        }
                    </text>
                    <br></br>
                    <button id="JobsAddListButton" className="moveToRight"  onClick={this.props.showJobDetails(data[index])}>
                        Apply Now
                    </button>
                    </div>
                </Card>
              

                </li>
        });
    }
    
    render() {
        return (

            <div>
 <button style={{background:"#196EDE"}}className="data_loading_btn"
              onClick={()=>{
                this.setState({
                    data:test_data
                })
              }}
              
              >
                Load Test Data
              </button>
              <button style={{background:"#196EDE"}}  className="data_loading_btn"
                onClick={()=>
                {
                    this.setState({
                        data:real_data
                    })
                }}
              >
                Load Real Data
              </button>
                
                <div>
                    <h6 id="JobAdListHeading">
                        Career Opportunities
                    </h6>
                </div>
               <ul  >

{this.getJobAdsList()}
</ul>
      

            </div>
        )
    }
}
