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
        
        if(title && email && company  && branch && type && details)
        {
            let  data={};
          data["title"]=title;
        data["email"]=email;
        data["dept"]=dept; 
        data["company"]=company;
       
        data["branch"]=branch;
        data["type"]=type;
        
        data["details"]=details;
console.log(data)
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
          <div className="card-header">
            <h3 className="card-title">Post a Job</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
         
          <div className="card-body">
            <div  style={{width:'40%',float:"left"}} className="form-group">
              <text htmlFor="inputName"> Job Title</text>
              <input type="text" id="title" className="form-control" />
            </div>
            <div  style={{width:'55%',paddingLeft:'10px'}} className="form-group">
              <text htmlFor="inputName"> Contact Email</text>
              <input type="text" id="email" className="form-control" />
            </div>
            <div style={{width:'40%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Department</text>
              <input type="text" id="dept" className="form-control" />
            </div>
            <div style={{width:'55%',paddingLeft:'10px'}}  className="form-group">
              <text htmlFor="inputName">Company Name</text>
              <input type="text" id="company" className="form-control" />
            </div>
            <div style={{width:'40%',float:"left"}} className="form-group">
              <text htmlFor="inputName">Branch</text>
              <input type="text" id="branch" className="form-control" />
            </div>
            
           
            
            <div style={{width:'55%',paddingLeft:'10px',marginTop:"0px"}} className="form-group">
              <text htmlFor="inputStatus">Type</text>
              <select id="type" className="form-control custom-select">
                <option selected disabled>Type</option>
                <option>Full Time</option>
                <option>Part time</option>
                
              </select>
            </div>
           
            <div style={{width:'100%',textAlign:'center'}}  className="form-group">
            
              <textarea style={{width:'55%'}} placeholder="Details" id="details">

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
       <div style={{justifyContent:'center'}} className="row">
      <div id="nextprev" className="col-6">
      <button   onClick={this.goBack} style={{width:'120px'}} href="" className="btn btn-secondary">Previous</button>
        <button id="next" onClick={this.goForward} style={{width:'120px'}}className="btn btn-success float-right"> Next</button>
       
      </div>
    </div>

   </section>
  {/* /.content */}


















            </div>
        )
    }
}
