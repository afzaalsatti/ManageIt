import React, { Component } from 'react'
import Mailbox from './mailbox'
import Compose from './compose'


export default class MailMainPage extends Component {


    constructor(props)
    {
        super(props);
        this.getMailsFromServer();
        this.state={
            all_mails:[],
            component:"",
            }


 this.changeComponent = this.changeComponent.bind(this);
 this.refreshMailList = this.refreshMailList.bind(this);
    }
    refreshMailList(){
        window.alert("Refreshing")
 this.getMailsFromServer()
    }
changeComponent(type){
    if(type==="compose")
    {
        this.setState({
            component:<Compose changeComponent={this.changeComponent}></Compose>
        })
    }
    else if(type==="mailbox"){
        this.getMailsFromServer()
    }

}
componentDidMount()
{
    this.setState({
        component:""
    })
}
    getMailsFromServer=()=>{
        let address="getAllEmails";
                let req_data={
              
                    
                    
                     
                
              
               
                     "company":"decideLater"
              
              
              
              
              
              
              
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
           
      this.setState({
          all_mails:data.result,
      component:  <Mailbox refreshMailList={this.refreshMailList} getClickFromMailbox={this.changeComponent} mails={data.result}></Mailbox>
      })
            

           
           
         
          
         }else{
       
          
           console.log("Operation Failed! Customer Details")
         }
       // `data` is the parsed version of the JSON returned from the above endpoint.
       console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
       }).catch((error) => {
       
       console.log("Unexpected error Try again...  ");
       });
       }
    render() {
        return (
            <div style={{backgroundImage:"url(/signupbg.jpg)"}}>
                {this.state.component}
            </div>
        )
    }
}
