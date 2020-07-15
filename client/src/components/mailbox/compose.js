import React, { Component } from 'react'
import HtmlEditor from '../Utils/HtmlEditor'
import './compose.css'
var userInfo;
export default class compose extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      showEmailBuilder:false
    }
    userInfo=JSON.parse(localStorage.getItem("userInfo"));
    this.getHtmlFromEditor=this.getHtmlFromEditor.bind(this)
  }
  getHtmlFromEditor(html)
  {
document.getElementById("body").value=html;
  }
  sendEmail=()=>{

  
   



    
    let address="sendEmail";
    let req_data={
  
       
       
        
  
  
  
        "company":"decideLater",
        "name":document.getElementById("sender_name").value,
   "to":document.getElementById("to").value,
   "from":userInfo.userData["email"],
   "subject":document.getElementById("subject").value,
   "body":document.getElementById("body").value,
  
  // "vahicleId":data["vh_num"],
  // "status":"active",
  // "position":"longi latti",
  // "vahicleType":data["type"]
  
  
  
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
      
      
        
      this.props.changeComponent("mailbox")
   
     
    }else{
  
     console.log("Error Occured Retrying")
     
     
    }
  // `data` is the parsed version of the JSON returned from the above endpoint.
  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
  
  
  //   reqInProcess=reqInProcess+1;
  // this.RequestToServer(reqInProcess);

  });

  }
 

    render() {
        return (
           <div>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
       {/* /.col */}
        <div style={{margin:"auto"}}className="col-md-9">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3
             
              
              className="card-title">Compose New Message</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
            <div className="form-group">
                <input id="sender_name" className="form-control" placeholder="Your/Organization Name:" />
              </div>
            
              <div className="form-group">
                <input id="to" className="form-control" placeholder="To:" />
              </div>
              <div className="form-group">
                <input id="subject" className="form-control" placeholder="Subject:" />
              </div>
              <div  >
              <span style={{fontFamily:"poppins",margin:"10px"}}>
          Show Email GUI Builder
          <input
          onClick={()=>{
            this.setState({
              showAuthModal:true
            })
            let new_company=document.getElementById("show-email-builder").checked;
           
            
            if(new_company){
              
              this.setState({showEmailBuilder:true})

              
            }else{
             
              this.setState({showEmailBuilder:false})
            }
             
          }}
          
          id="show-email-builder" style={{marginLeft:"10px"}} type="checkbox" ></input>
          </span>
              </div>
              <div className={this.state.showEmailBuilder ? "show form-group" :" hide form-group"} >

             <HtmlEditor getHtmlFromEditor={this.getHtmlFromEditor} style={{height: 300}}></HtmlEditor>
             <div style={{height:"50px",width:"30%",marginTop:"-50px",background:"white",position:"sticky",float:"right"}}>

             </div>
              </div>
              <div>
                     <textarea id="body" className="form-control" style={{height: 300}} defaultValue={"                      <h1><u>Heading Of Message</u></h1>\n                      <h4>Subheading</h4>\n                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain\n                        was born and I will give you a complete account of the system, and expound the actual teachings\n                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,\n                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know\n                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again\n                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,\n                        but because occasionally circumstances occur in which toil and pain can procure him some great\n                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,\n                        except to obtain some advantage from it? But who has any right to find fault with a man who\n                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that\n                        produces no resultant pleasure? On the other hand, we denounce with righteous indignation and\n                        dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so\n                        blinded by desire, that they cannot foresee</p>\n                      <ul>\n                        <li>List item one</li>\n                        <li>List item two</li>\n                        <li>List item three</li>\n                        <li>List item four</li>\n                      </ul>\n                      <p>Thank you,</p>\n                      <p>John Doe</p>\n                    "} />
           
              </div>
              <div className="form-group">
                <div className="btn btn-default btn-file">
                  <i className="fas fa-paperclip" /> Attachment
                  <input type="file" name="attachment" />
                </div>
                <p className="help-block">Max. 32MB</p>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <div className="float-right">
                <button
                 onClick={()=>{
                   window.alert("Message is saved in drafts")
                  this.props.changeComponent("mailbox")
                }}
                
                type="button" className="btn btn-default"><i className="fas fa-pencil-alt" /> Draft</button>
                <button
                onClick={()=>{
                  this.sendEmail();
                }}
                
                
                
                type="submit" className="btn btn-primary"><i className="far fa-envelope" /> Send</button>
              </div>
              <button
              onClick={()=>{
                this.props.changeComponent("mailbox")
              }}
              
              
              type="reset" className="btn btn-default"><i className="fas fa-times" /> Discard</button>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
</div>

        )
    }
}
