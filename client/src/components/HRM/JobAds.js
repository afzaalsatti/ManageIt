import React, { Component } from 'react'

export default class JobAds extends Component {

    constructor()
    {
        super();
        this.goForward=this.goForward.bind(this);
    }

    goForward(){
        let title=document.getElementById("title").value;
        let email=document.getElementById("email").value;
        let dept=document.getElementById("dept").value;
        let company=document.getElementById("company").value;
        let type=document.getElementById("type").value;

        let branch=document.getElementById("branch").value;
        let details=document.getElementById("details").value;

        let resp=document.getElementById("resp").value;
        let salary=document.getElementById("salary").value;
        let d=new Date();
        
        let post_date=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
        let expire_date=document.getElementById("due_date").value;
        
        if(title && email && company  && branch && type && details && resp && salary && post_date && expire_date )
        {
            let  data={};
          data["title"]=title;
        data["contactEmail"]=email;
        data["dept"]=dept; 
        data["company_name"]=company;
       
        data["branch"]=branch;
        data["type"]=type;

        data["salary"]=salary;
        data["expireDate"]=expire_date;
        data["postDate"]=post_date;
        data["requirements"]=details;
        data["responsibiities"]=resp;



        window.alert("Contecting")
        
        const req_data={
        
         
          
         
          "data":data



        }
         
          const options={
              method:"POST",
              headers:{
                  'Content-type':"application/json"
                  
              },
              body:JSON.stringify(req_data)
          }
          fetch("/postJob",options).then(response=>{
              return response.json();
        }).then(data=>{
            let status=data.status;
            console.log(status)
       
            if(status==='Success')
            {
            
              window.alert("Operation Sucessful")
              //history.push('/home');
            
             // history.push("");
            }else{
             
              window.alert("Operation Failed!")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
          console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
         window.alert("Unexpected error Try again...  "+error);
       });
        return true;

        }
        else{
          alert("All Fields are Mandatory!");
          return false;
        }
    }

    render() {
        return (
            <div>

                
         

                <section className="content">
    <div className="row" style={{justifyContent:'center'}}>
      <div id="step1"className="col-md-8" >
        <div className="card card-primary">
          <div  style={{padding:"0px"}} className="card-header">
            <h3 style={{width:"100%",textAlign:"center",fontFamily:"poppins",marginTop:"7px",fontSize:"x-large"}} className="card-title">Post a Job</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i style={{color:"white",marginRight:"10px"}} className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
            <div  style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Job Title</text>
              <input  style={{margin:"0px"}} placeholder="Enter Job Details" type="text" id="title" className="form-control" />
            </div>
            
            <div  style={{width:'48%',paddingLeft:'10px'}} className="form-group">
              <text htmlFor="inputName"> Contact Email</text>
              <input  style={{margin:"0px"}} placeholder="Valid Email for getting CVs" type="text" id="email" className="form-control" />
            </div>
            <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Department</text>
              <input  style={{margin:"0px"}} placeholder="  Department of Job" type="text" id="dept" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:'10px'}}  className="form-group">
              <text htmlFor="inputName">Company Name</text>
              <input  style={{margin:"0px"}} placeholder="Enter your Company Name" type="text" id="company" className="form-control" />
            </div>
            <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Branch</text>
              <input  style={{margin:"0px"}}  placeholder="Enter Branch Name" type="text" id="branch" className="form-control" />
            </div>
            
           
            
            <div style={{width:'48%',paddingLeft:'10px',marginTop:"0px"}} className="form-group">
              <text htmlFor="inputStatus">Type</text>
              <select style={{background:"#F1F1F1"}} id="type" className="form-control custom-select">
                <option selected disabled>Type of Job</option>
                <option>Full Time</option>
                <option>Part time</option>
                
              </select>
            </div>


            <div style={{width:'48%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Salary</text>
              <input  style={{margin:"0px"}} placeholder="Expected Salary" type="text" id="salary" className="form-control" />
            </div>
            <div style={{width:'48%',paddingLeft:"10px"}} className="form-group">
              <text htmlFor="inputName">Due Date</text>
              <input  style={{margin:"0px",paddingLeft:'10px',background:"#F1F1F1"}}  type="date" id="due_date" className="form-control" />
            </div>



           
            
            <div style={{width:'48%',float:"left"}} className="form-group">
            <text htmlFor="inputName">Requirements</text>
            <br></br>
              <textarea style={{width:"100%"}} placeholder="Enter Eligibility Requirements" id="details">
                

              </textarea>
              </div>

              <div style={{width:'48%',float:"right"}} className="form-group">
              <text htmlFor="inputName">Responsibiities</text>
              <br></br>
              <textarea style={{width:"100%"}} placeholder="Add Responsibiities" id="resp">
                

              </textarea>
           
          

              </div>
             </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
       
     
     </div>
       <div>

       </div>
       <div style={{justifyContent:'center',width:"67%",margin:"auto"}} className="row">
      <div id="nextprev" className="col-12">
      <button   onClick={this.goBack} style={{width:'120px',float:"left"}} href="" className="btn btn-secondary">Previous</button>
        <button id="next" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Next</button>
       
      </div>
    </div>

   </section>
  {/* /.content */}


















            </div>
        )
    }
}
