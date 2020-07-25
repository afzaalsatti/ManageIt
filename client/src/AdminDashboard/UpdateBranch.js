import React, { Component } from 'react'
import './css/update_branch.css'
var userInfo;
var parent;
var company_data;
var query;
export default class UpdateBranch extends Component {
    constructor(props)
    {
      super(props)
      userInfo=JSON.parse(localStorage.getItem("userInfo"));
    
            this.getParentComapnyDetails();

            this.state={
              companyFound:false
            }
     
    
     
    
    }
    getUpdateDetails=()=>{
        let name=document.getElementById("update_name").value;
        let email=document.getElementById("update_email").value;
        let phone=document.getElementById("update_phone").value;
        let info=document.getElementById("update_info").value;
        let motto=document.getElementById("update_motto").value;
        if(name)
        {
          company_data["CompanyName"]=name;
        }
        if(email){
          company_data["CompanyEmail"]=email;
        }
        if(phone)
        {
          company_data["CompanyPhone"]=phone;
        }
        if(motto)
        {
          company_data["CompanyMotto"]=motto;
        }
       if(info)
       {
        company_data["CompanyInfo"]=info;
       }
        
       

       
       
        company_data["pervName"]=query;
        


        let address="updateCompanyInfo";
   
        
       const options={
         method:"POST",
         headers:{
             'Content-type':"application/json"
             
         },
         body:JSON.stringify(company_data)
     }
     
   
     fetch("/"+address,options).then(response=>{
         return response.json();
     }).then(data=>{
       let status=data.status;
      
     
       if(status==='Success')
       {
         
  

         
    window.alert("Info Updated Suceesfully")
   
        
      
        
       }
       else
       {
        window.alert("Something went wrong Try again")
       }
     // `data` is the parsed version of the JSON returned from the above endpoint.
     // { "userId": 1, "id": 1, "title": "...", "body": "..." }
     }).catch((error) => {
      window.alert("Something went wrong Try again")
      console.log(error);
     //   reqInProcess=reqInProcess+1;
     // this.RequestToServer(reqInProcess);
     //this.notifyError("Unexpected error Try again...  ");
     });


    }
    getParentComapnyDetails=()=>{
        let address="getCompanyInfo";
     
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
    
    
      fetch("/"+address,options).then(response=>{
          return response.json();
      }).then(data=>{
        let status=data.status;
      
      
        if(status==='Success')
        {
          
     parent=data.result.parent;
        console.log(parent)
          
    
    
         
       
         
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      }).catch((error) => {
      
      
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
      //this.notifyError("Unexpected error Try again...  ");
      });
      
 
     }
    getComapnyDetails=()=>{
      query=document.getElementById("query").value;
       let address="getChildCompanyInfo";
    
        let req_data={
          "company":query,
          "parent":parent
        }
       const options={
         method:"POST",
         headers:{
             'Content-type':"application/json"
             
         },
         body:JSON.stringify(req_data)
     }
     
   
     fetch("/"+address,options).then(response=>{
         return response.json();
     }).then(data=>{
       let status=data.status;
      
     
       if(status==='Success')
       {
         
   let result=data.result;
   company_data=result;
   
   
this.setState({companyFound:true})

         
    
   
        
      
        
       }
       else
       {
        this.setState({companyFound:false})
       }
     // `data` is the parsed version of the JSON returned from the above endpoint.
     // { "userId": 1, "id": 1, "title": "...", "body": "..." }
     }).catch((error) => {
      this.setState({companyFound:false})
      console.log(error);
     //   reqInProcess=reqInProcess+1;
     // this.RequestToServer(reqInProcess);
     //this.notifyError("Unexpected error Try again...  ");
     });
     

    }
    render() {
        return (
            <div  style={{marginTop:"40px",height:"700px"}}>
                <div style={{textAlign:"center"}} >
                    <input id="query" style={{width:"280px",borderRadius:"7px"}} type="text"></input>
                    <button
                    onClick={this.getComapnyDetails}
                     className="ub-primary-btn">Search</button>
                </div>

{this.state.companyFound ?
<div style={{background:"lightgray",fontFamily:"poppins",textAlign:"center",margin:"auto",width:"80%",borderRadius:"15px"}}>
<h5 style={{marginBottom:"30px",paddingTop:"30px",fontWeight:"600"}}>Edit Company Info</h5>
<div style={{marginTop:"10px"}}>
<text style={{marginRight:"20px"}}>Comapny Name</text>
<input id="update_name" style={{width:"250px",border:"none",height:"35px",borderRadius:"7px"}} placeholder={company_data["CompanyName"]}></input>
</div>
<div style={{marginTop:"10px"}}>
<text style={{marginRight:"27px"}}>Comapny Email</text>
<input id="update_email"style={{width:"250px",border:"none",height:"35px",borderRadius:"7px"}} placeholder={company_data["CompanyEmail"]}></input>
</div>
<div style={{marginTop:"10px"}}>
<text style={{marginRight:"20px"}}>Comapny Phone</text>
<input id="update_phone" style={{width:"250px",border:"none",height:"35px",borderRadius:"7px"}} placeholder={company_data["CompanyPhone"]}></input>
</div>
<div style={{marginTop:"10px"}}>
<text style={{marginRight:"40px"}}>Comapny Info</text>
<input id="update_info" style={{width:"250px",border:"none",height:"35px",borderRadius:"7px"}} placeholder={company_data["CompanyInfo"]}></input>
</div>
<div style={{marginTop:"10px"}}>
<text style={{marginRight:"20px"}}>Comapny Motto</text>
<input id="update_motto" style={{width:"250px",border:"none",height:"35px",borderRadius:"7px"}} placeholder={company_data["CompanyMotto"]}></input>
</div>
<button style={{marginTop:"30px",marginLeft:"100px",marginBottom:"20px"}}
                    onClick={this.getUpdateDetails}
                     className="ub-primary-btn">Update</button>
</div>
:
<div style={{textAlign:"center",marginTop:"50px"}}>
  <text>No data to show</text>
  </div>
    }
            </div>
        )
    }
}
