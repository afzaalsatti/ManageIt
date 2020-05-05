import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './jobs.css'
var data=[
    {
        //add Education and salary fields to job ad form
      "job_id": "Job ID",
      "title": "Sales Manager",
      "issue_date": "11/2/2020",
      "last_date": "20/2/2020",
      "hr_email": "afzaalsatti74@gmail.com",
      "company_name": "Elite Bus Service Islamabad",
      "type": "Full Time",
      "branch": "Islamabad",
      "salary":"30k/month",
      "req": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ,"res": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        "job_id": "Job ID",
        "title": "Senior Web Developer Required",
        "issue_date": "11/2/2020",
        "last_date": "20/2/2020",
        "hr_email": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Part Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "req": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ,"res": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
    {
        "job_id": "Job ID",
        "title": "Bus Driver",
        "issue_date": "11/2/2020",
        "last_date": "20/2/2020",
        "hr_email": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Full Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "req": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ,"res": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    {
        "job_id": "Job ID",
        "title": "Senior Web Developer Required",
        "issue_date": "11/2/2020",
        "last_date": "20/2/2020",
        "hr_email": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Part Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "req": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ,"res": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
    {
        "job_id": "Job ID",
        "title": "Senior Web Developer Required",
        "issue_date": "11/2/2020",
        "last_date": "20/2/2020",
        "hr_email": "afzaalsatti74@gmail.com",
        "company_name": "Elite Bus Service Islamabad",
        "type": "Part Time",
        "branch": "Islamabad",
        "salary":"30k/month",
        "req": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ,"res": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];


export default class JobAds extends Component {
    constructor()
    {
        super();
        this.getJobAdsList=this.getJobAdsList.bind(this);
        this.showJobDetails=this.showJobDetails.bind(this);
    }
    showJobDetails = index => e =>
    {

        window.alert(index)
    }
    getJobAdsList=function()
    {

        
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
                            {data[index].last_date}
                            </span>
                    </text>
             
             <br></br>
             
             <text  style={{    marginLeft: "12px"}}>
                        <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Issue Date
                            </span>
                            <span style={{    fontSize: "12px"}}>
                            {data[index].issue_date}
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
