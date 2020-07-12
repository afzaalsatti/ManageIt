import React, { Component } from 'react'
import './mailbox.css'

export default class mailbox extends Component {
constructor(props)
{
  super(props);
  // this.getMailsFromServer();
  this.state={mails:this.props.mails,
    emailDetail:null,
    folder:"inbox"
  }

 this.openEmail=this.openEmail.bind(this);
}
// getMailsFromServer=()=>{
//   let address="getAllEmails";
//           let req_data={
        
              
              
               
          
        
         
//                "company":"decideLater"
        
        
        
        
        
        
        
//              }
//    const options={
//      method:"POST",
//      headers:{
//          'Content-type':"application/json"
         
//      },
//      body:JSON.stringify(req_data)
//  }
 
//  fetch("/"+address,options).then(response=>{
//      return response.json();
//  }).then(data=>{
//    let status=data.status;
 
 
//    if(status==='Success')
//    {
     
// this.setState({
//   mails:data.result
// })
      

     
     
   
    
//    }else{
 
    
//      console.log("Operation Failed! Customer Details")
//    }
//  // `data` is the parsed version of the JSON returned from the above endpoint.
//  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
//  }).catch((error) => {
 
//  console.log("Unexpected error Try again...  ");
//  });
//  }


componentDidUpdate(){

if(this.state.mails !== this.props.mails)
{
  this.setState({
    mails:this.props.mails
  })
}

}

openEmail(index)
{
  let mail=this.state.mails[index];
  this.setState({
    emailDetail:<div style={{background:"white"}} >
    
    
    <div className="mail-details">
    
    <h4>{mail.subject}</h4>
    <img
            style={{height:"50px",marginRight:"20px"}}
           src="/assets/images/book-car.png"
           alt="User Avatar"
           className=" img-circle"
         />
    
    <text>From : {mail.from}</text>
    <br/>
    <text style={{ marginLeft: "70px"}}>To : {mail.to}</text>
    <hr></hr>
    <div id="emailDetailBody" dangerouslySetInnerHTML={{ __html:mail.body}} >
      
  
    </div>
    </div>
    
    
    
    
    
      </div>
      
  })
 
}
  
prepareDataToDisplay=()=>{

if(this.state.folder=="important" || this.state.folder=="bin" || this.state.folder=="drafts")
{
  return <text style={{color:"white",margin:"auto"}}>  {this.state.folder} Folder is Empty</text>
}

return this.state.mails.map((element, index)=>{
  if(this.state.folder=="inbox")
  {

    if(element.to==="decideLater")
    {
      return  <li onClick={()=>{this.openEmail(index)}}style={{display:"flex"}}>
  
      <input  type="checkbox"></input>
      <div>
      <h5 >{element.name}</h5>
      </div>
      <div style={{width:"45%"}}>
      <text  >{element.subject}</text>
      
      </div>
      
      <span >
      <text style={{marginRight:"15px"}} >{element.time}</text>
      <text >{element.date}</text>
      </span>
      
      
       
      
      </li>
      
    }


    
  }
 else
 {
  if(element.to !=="decideLater" && this.state.folder=="sent")
  {

    return  <li onClick={()=>{this.openEmail(index)}}style={{display:"flex"}}>
  
    <input  type="checkbox"></input>
    <div>
    <h5 >{element.name}</h5>
    </div>
    <div style={{width:"45%"}}>
    <text  >{element.subject}</text>
    
    </div>
    
    <span >
    <text style={{marginRight:"15px"}} >{element.time}</text>
    <text >{element.date}</text>
    </span>
    
    
     
    
    </li>
   

 }
 
  
    


    
  }
 


  
})

}



    render() {
        return (
            <div style={{display:"flex"}}>

<div id="mailbox-menu" className="col-md-2">
  <div style={{paddingTop:"20px",cursor:"pointer"}}
  onClick={()=>{this.props.getClickFromMailbox("compose")}}
  
  >

    <div id="composeEmailIcon">
    Compose<img style={{height:"20px"}} src="/assets/svg/edit.svg"></img>
    </div>
  </div>
<ul >
  <li
  onClick={()=>{
    this.setState({
      folder:"inbox"
    })
  }}
  >
    <img style={{height:"20px",    marginRight: "12px"}} src="/assets/images/inbox-icon-light.png"></img>
    Inbox
  </li>
  <li
   onClick={()=>{
    this.setState({
      folder:"sent"
    })
  }}
  >
  <img style={{height:"20px",    marginRight: "12px"}} src="/assets/images/sent-icon.png"></img>
    Sent
  </li>
  <li
  onClick={()=>{
    this.setState({
      folder:"drafts"
    })
  }}>
  <img style={{height:"20px",    marginRight: "12px"}} src="/assets/images/draft-icon.png"></img>
    Drafts
  </li>
  <li
  onClick={()=>{
    this.setState({
      folder:"important"
    })
  }}>
  <img style={{height:"20px",    marginRight: "12px"}} src="/assets/images/important-icon.png"></img>
    Important
  </li>
  <li
  onClick={()=>{
    this.setState({
      folder:"bin"
    })
  }}>
  <img style={{height:"20px",    marginRight: "12px"}} src="/assets/images/bin.png"></img>
   
    Bin
  </li>
</ul>
</div>



<div id="mailbox-component" className="col-md-10">


<div style={{marginTop:"10px",background:"transparent",marginLeft:"30px"}} className="mailbox-top-nav">


  {this.state.emailDetail===null? <img data-toggle="tooltip" data-placement="top" title="Refresh "  style={{height:"23px",marginRight:"30px",cursor:"pointer"}}
 src="/assets/svg/reload.svg"
 onClick={()=>{
   this.props.refreshMailList()
 
}}
 >
 </img>
 : <img  data-toggle="tooltip" data-placement="top" title="Back to Inbox" style={{height:"35px",marginRight:"30px"}}
 src="/assets/svg/backbtn.svg"
 
 onClick={()=>{
   this.setState({
     emailDetail:null
   })
 }}
  >
 
 
  </img>
 
}


 

 

</div>
  {this.state.emailDetail===null ?
 <div >


<ul className="mailbox-mails">
{this.prepareDataToDisplay()}
 </ul>
</div>
:
this.state.emailDetail
    }
</div>







  {/* <div>
    <section classname="content">
      <div classname="row">
        <div classname="col-md-3">
          <a href="compose.html" classname="btn btn-primary btn-block mb-3">Compose</a>
          <div classname="card">
            <div classname="card-header">
              <h3 classname="card-title">Folders</h3>
              <div classname="card-tools">
                <button type="button" classname="btn btn-tool" data-card-widget="collapse"><i classname="fas fa-minus">
                  </i></button><i classname="fas fa-minus">
                </i></div><i classname="fas fa-minus">
              </i></div><i classname="fas fa-minus">
              <div classname="card-body p-0">
                <ul classname="nav nav-pills flex-column">
                  <li classname="nav-item active">
                    <a href="#" classname="nav-link">
                      <i classname="fas fa-inbox"> Inbox
                        <span classname="badge bg-primary float-right">12</span>
                      </i></a><i classname="fas fa-inbox">
                    </i></li><i classname="fas fa-inbox">
                    <li classname="nav-item">
                      <a href="#" classname="nav-link">
                        <i classname="far fa-envelope"> Sent
                        </i></a><i classname="far fa-envelope">
                      </i></li><i classname="far fa-envelope">
                      <li classname="nav-item">
                        <a href="#" classname="nav-link">
                          <i classname="far fa-file-alt"> Drafts
                          </i></a><i classname="far fa-file-alt">
                        </i></li><i classname="far fa-file-alt">
                        <li classname="nav-item">
                          <a href="#" classname="nav-link">
                            <i classname="fas fa-filter"> Junk
                              <span classname="badge bg-warning float-right">65</span>
                            </i></a><i classname="fas fa-filter">
                          </i></li><i classname="fas fa-filter">
                          <li classname="nav-item">
                            <a href="#" classname="nav-link">
                              <i classname="far fa-trash-alt"> Trash
                              </i></a><i classname="far fa-trash-alt">
                            </i></li><i classname="far fa-trash-alt">
                          </i></i></i></i></i></ul><i classname="fas fa-inbox"><i classname="far fa-envelope"><i classname="far fa-file-alt"><i classname="fas fa-filter"><i classname="far fa-trash-alt">
                        </i></i></i></i></i></div><i classname="fas fa-inbox"><i classname="far fa-envelope"><i classname="far fa-file-alt"><i classname="fas fa-filter"><i classname="far fa-trash-alt">
                       
                      </i></i></i></i></i></i></div><i classname="fas fa-minus"><i classname="fas fa-inbox"><i classname="far fa-envelope"><i classname="far fa-file-alt"><i classname="fas fa-filter"><i classname="far fa-trash-alt">
                   
                      <div classname="card">
                        <div classname="card-header">
                          <h3 classname="card-title">Labels</h3>
                          <div classname="card-tools">
                            <button type="button" classname="btn btn-tool" data-card-widget="collapse"><i classname="fas fa-minus">
                              </i></button><i classname="fas fa-minus">
                            </i></div><i classname="fas fa-minus">
                          </i></div><i classname="fas fa-minus">
                          <div classname="card-body p-0">
                            <ul classname="nav nav-pills flex-column">
                              <li classname="nav-item">
                                <a href="#" classname="nav-link">
                                  <i classname="far fa-circle text-danger">
                                    Important
                                  </i></a><i classname="far fa-circle text-danger">
                                </i></li><i classname="far fa-circle text-danger">
                                <li classname="nav-item">
                                  <a href="#" classname="nav-link">
                                    <i classname="far fa-circle text-warning"> Promotions
                                    </i></a><i classname="far fa-circle text-warning">
                                  </i></li><i classname="far fa-circle text-warning">
                                  <li classname="nav-item">
                                    <a href="#" classname="nav-link">
                                      <i classname="far fa-circle text-primary">
                                        Social
                                      </i></a><i classname="far fa-circle text-primary">
                                    </i></li><i classname="far fa-circle text-primary">
                                  </i></i></i></ul><i classname="far fa-circle text-danger"><i classname="far fa-circle text-warning"><i classname="far fa-circle text-primary">
                                </i></i></i></div><i classname="far fa-circle text-danger"><i classname="far fa-circle text-warning"><i classname="far fa-circle text-primary">
                              
                              </i></i></i></i></div><i classname="fas fa-minus"><i classname="far fa-circle text-danger"><i classname="far fa-circle text-warning"><i classname="far fa-circle text-primary">
                            
                            </i></i></i></i></i></i></i></i></i></i></div><i classname="fas fa-filter"><i classname="far fa-trash-alt"><i classname="fas fa-minus"><i classname="far fa-circle text-danger"><i classname="far fa-circle text-warning"><i classname="far fa-circle text-primary">
               
                    <div classname="col-md-9">
                      <div classname="card card-primary card-outline">
                        <div classname="card-header">
                          <h3 classname="card-title">Inbox</h3>
                          <div classname="card-tools">
                            <div classname="input-group input-group-sm">
                              <input type="text" classname="form-control" placeholder="Search Mail" />
                              <div classname="input-group-append">
                                <div classname="btn btn-primary">
                                  <i classname="fas fa-search">
                                  </i></div><i classname="fas fa-search">
                                </i></div><i classname="fas fa-search">
                              </i></div><i classname="fas fa-search">
                            </i></div><i classname="fas fa-search">
                            
                          </i></div><i classname="fas fa-search">
                       
                          <div classname="card-body p-0">
                            <div classname="mailbox-controls">
                             
                              <button type="button" classname="btn btn-default btn-sm checkbox-toggle"><i classname="far fa-square">
                                </i></button><i classname="far fa-square">
                                <div classname="btn-group">
                                  <button type="button" classname="btn btn-default btn-sm"><i classname="far fa-trash-alt" /></button><i classname="far fa-trash-alt">
                                    <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-reply" /></button><i classname="fas fa-reply">
                                      <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-share" /></button><i classname="fas fa-share">
                                      </i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share">
                                
                                      <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-sync-alt" /></button><i classname="fas fa-sync-alt">
                                        <div classname="float-right">
                                          1-50/200
                                          <div classname="btn-group">
                                            <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-chevron-left" /></button><i classname="fas fa-chevron-left">
                                              <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-chevron-right" /></button><i classname="fas fa-chevron-right">
                                              </i></i></div><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                          
                                            </i></i></div><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                        
                                          </i></i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                        <div classname="table-responsive mailbox-messages">
                                          <table classname="table table-hover table-striped">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check1" />
                                                    <label htmlfor="check1">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment">
                                                </td><td classname="mailbox-date">5 mins ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check2" />
                                                    <label htmlfor="check2">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">28 mins ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check3" />
                                                    <label htmlfor="check3">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">11 hours ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check4" />
                                                    <label htmlfor="check4">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment">
                                                </td><td classname="mailbox-date">15 hours ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check5" />
                                                    <label htmlfor="check5">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">Yesterday</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check6" />
                                                    <label htmlfor="check6">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">2 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check7" />
                                                    <label htmlfor="check7">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">2 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check8" />
                                                    <label htmlfor="check8">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment">
                                                </td><td classname="mailbox-date">2 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check9" />
                                                    <label htmlfor="check9">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment">
                                                </td><td classname="mailbox-date">2 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check10" />
                                                    <label htmlfor="check10">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment">
                                                </td><td classname="mailbox-date">2 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check11" />
                                                    <label htmlfor="check11">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">4 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check12" />
                                                    <label htmlfor="check12">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment">
                                                </td><td classname="mailbox-date">12 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check13" />
                                                    <label htmlfor="check13">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star-o text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">12 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check14" />
                                                    <label htmlfor="check14">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">14 days ago</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div classname="icheck-primary">
                                                    <input type="checkbox" defaultvalue id="check15" />
                                                    <label htmlfor="check15">
                                                    </label></div>
                                                </td>
                                                <td classname="mailbox-star"><a href="#"><i classname="fas fa-star text-warning" /></a></td>
                                                <td classname="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                                <td classname="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td classname="mailbox-attachment"><i classname="fas fa-paperclip" /></td>
                                                <td classname="mailbox-date">15 days ago</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        
                                        </div>
                                      
                                      </i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                     
                                      <div classname="card-footer p-0">
                                        <div classname="mailbox-controls">
                                         
                                          <button type="button" classname="btn btn-default btn-sm checkbox-toggle"><i classname="far fa-square">
                                            </i></button><i classname="far fa-square">
                                            <div classname="btn-group">
                                              <button type="button" classname="btn btn-default btn-sm"><i classname="far fa-trash-alt" /></button><i classname="far fa-trash-alt">
                                                <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-reply" /></button><i classname="fas fa-reply">
                                                  <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-share" /></button><i classname="fas fa-share">
                                                  </i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share">
                                                 
                                                  <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-sync-alt" /></button><i classname="fas fa-sync-alt">
                                                    <div classname="float-right">
                                                     
                                                      <div classname="btn-group">
                                                        <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-chevron-left" /></button><i classname="fas fa-chevron-left">
                                                          <button type="button" classname="btn btn-default btn-sm"><i classname="fas fa-chevron-right" /></button><i classname="fas fa-chevron-right">
                                                          </i></i></div><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                                          
                                                        </i></i></div><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                                       
                                                      </i></i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                                  </i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                                </i></i></i></i></i></i></i></i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                               
                                </i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
                                
                              </i></i></i></i></i></i></i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
            
                </i></i></i></i></i></i></section><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
              </i></i></i></i></i></i></div><i classname="far fa-trash-alt"><i classname="fas fa-reply"><i classname="fas fa-share"><i classname="fas fa-sync-alt"><i classname="fas fa-chevron-left"><i classname="fas fa-chevron-right">
            </i></i></i></i></i></i> */}




            </div>

        )
    }
}
