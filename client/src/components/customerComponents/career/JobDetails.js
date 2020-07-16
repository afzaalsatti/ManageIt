import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios';
var userInfo;
var cv_link="";
var callback;
export default class JobDetails extends Component {

    constructor(props)
    {
      super(props);
      userInfo=JSON.parse(localStorage.getItem("userInfo"));
      callback=this.props.showJobs;
      
      
      this.state ={
        file: null,
        
    };
    
    
    this.onChange = this.onChange.bind(this);
   
    }
    applyForJob=()=>{
        try{
      
            const data={
              "company":this.props.data.company_name,
              "cand_name":userInfo["userData"].name,
              "cand_email":userInfo["userData"].email,
              "cand_phone":userInfo["userData"].phone,
             
              "cand_cv_link":cv_link,
              "job_id":this.props.data.job_id
              
            }
             console.log(data)
              const options={
                  method:"POST",
                  headers:{
                      'Content-type':"application/json"
                      
                  },
                  body:JSON.stringify(data)
              }
              fetch("/apply",options).then(response=>{
                  return response.json();
            }).then(data=>{
                let status=data.status;
                
           
                if(status==='Success')
                {
                  
    
                  
              
                 
                
         window.alert("Application submitted succesfully !")
                 
        
         callback()
               
                
                
             
                   
                
                 // history.push("");
                }else{
                 
                  window.alert("Error in Applying")
                }
              // `data` is the parsed version of the JSON returned from the above endpoint.
              console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
            }).catch((error) => {
             
             window.alert("Unexpected error Try again...");
           });
                  
          
          
          
          
            
          
          }catch(error)
          {
          console.log("Error occured in fetching  company info"+error)
          }
    }
    uploadCV=()=>{
        const data = new FormData() 
        data.append('file', this.state.file)
       
        axios.post("http://localhost:5000/uploadCv", data, { // receive two parameter endpoint url ,form data 
          })
          .then(res => { // then print response status
            if(res.statusText==="OK")
            {
             
             cv_link=res.data.link;
              this.applyForJob();
          
            }
            else
            {
              window.alert("unable to upload CV")
            }
            
          })
      }
    onChange(e) {
        this.setState({file:e.target.files[0]});
        console.log(this.state.file)
      
       
      }

    render() {
        return (
            <div>
               <div style={{marginTop:"8px",paddingTop:"10px",width:"90%"}} id="rideHistoryHeading">
                <svg onClick={this.props.showJobs} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#3498db" /><path d="M121.77734,75.85469c-15.31875,0 -30.60391,0 -45.92266,0c3.89688,-3.89687 7.79375,-7.79375 11.69063,-11.69062c9.00312,-9.00313 -5.00547,-22.91094 -14.04219,-13.87422c-9.50703,9.50703 -19.01406,19.01406 -28.52109,28.52109c-3.82969,3.82969 -3.72891,10.17891 0.06719,13.94141c9.50703,9.50703 19.01406,19.01406 28.52109,28.52109c9.00312,9.00313 22.91094,-5.00547 13.87422,-14.04219c-3.86328,-3.86328 -7.76016,-7.76016 -11.62344,-11.62344c15.25156,0 30.50312,0 45.75469,0c12.79922,0 12.9,-19.75312 0.20156,-19.75312z" fill="#ffffff" /></g></g></svg>
     <h5 >Career Opportunity</h5>
                </div>
                
<Card id="JobDetailCard">



<div className="historymiddlediv">
                <img
                    className="company_logo"
                     src="/assets/svg/tickets.svg">
                    </img>
                    <text id ="jobTitle" className="rideHistoryAddress">{this.props.data.title}</text>
             
                    <text id ="endDate" className="moveToRight">
                        <span style={{marginRight:"15px",color:"red"}}>
Last Date To Apply
                            </span>
                            <span>
                            {this.props.data.last_date}
                            </span>
                    </text>

                    <br></br>
        <text style={{    marginLeft: "10px" ,marginRight:"10px"}}>  {this.props.data.company_name}</text>
                    
        <text style={{  fontSize: "12px"}} >{this.props.data.branch } <span style={{marginLeft:"10px"}}></span> Branch</text>
                   <br></br>
                   <text  style={{  fontSize: "12px",   marginLeft: "70px"}}>
                       contact us@ <span style={{marginLeft:"5px"}}></span> 
                       {this.props.data.hr_email}
                   </text>
                   <br></br>
             <text  style={{    marginLeft: "70px"}}>
                        <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Issue Date
                            </span>
                            <span style={{    fontSize: "12px"}}>
                            {this.props.data.issue_date}
                            </span>
                    </text>
                   
                    </div>
                    
                   
                    <div>
                    <text  style={{    marginLeft: "70px"}}>
                        <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Expected Salary
                            </span>
                            <span style={{    fontSize: "12px"}}>
{this.props.data.salary}
                            </span>
                    </text>
                    <br></br>
                    <text style={{    fontSize: "12px", marginLeft: "70px"}} >
                        
                    {this.props.data.type}
                        {
                        this.props.data.type=="Full Time"?
                        
                            <img style={{height:"18px",marginBottom:"3px",marginLef:"3px"}} src="/assets/images/verified_icon_blue.png">
                        </img>
                        :
                        
                            <img style={{height:"18px",marginBottom:"3px",marginLef:"3px"}} src="/assets/images/verified_icon_grey.png">
                            </img>
                        
                        }
                    </text>
                    <br></br>


<Card style={{width:"49%",float:"left",marginTop:"30px",paddingRight:"5px"}}>
<h5>Requirements</h5>
<br></br>
<text>
    {this.props.data.req}
</text>
</Card>



<Card style={{width:"47% ",float:"right",marginTop:"30px",paddingRight:"5px"}}>
<h5>Responsibiliies</h5>
<br></br>
<text>
{this.props.data.res}
</text>
</Card>



                    
             
</div>




</Card>
<input type="file" id="docpicker"
  accept=".doc,.docx,.pdf"
  onChange= {this.onChange}
  
  ></input>

<button
onClick={()=>{
    this.uploadCV();
}}

id="JobsAddListButton" className="moveToRight" 

>
                        Apply Now
                    </button>
            </div>
        )
    }
}
