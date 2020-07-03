import React from 'react'
import  './SlideDrawer/SlideDrawer.css'
import Home from './home'
import HireVahicle from '../Hire/HireVahicle'
import TransHistory from '../TransportationHistory/TransHistory'
import CareerPage from '../career/CareerPage'
import Settings from '../Settings/UserSettings'
import BookBusTicket from '../Tickets/BookBusTicket'
import NotificationModal from '../../Utils/NotificationModal'
import Wallet from '../../EmployeeComponents/DriverWallet'


import history from "../../../history";
var notifications=[];

var requestLoadingMessage="";
var reqFailed=false;
var reqInProcess=1;

var mounted=true;
var details;

var sender;
var userData;


export default class mainPage extends React.Component {
  
    constructor(props)
    {
super(props);

this.toggleSlideMenu=this.toggleSlideMenu.bind(this);
this.showHireMenu=this.showHireMenu.bind(this);
this.getMenuSelection=this.getMenuSelection.bind(this);
this.replaceMainComponent=this.replaceMainComponent.bind(this);
mounted=true;
this.state={component:<Home replaceMainComponent={this.replaceMainComponent}></Home>,
showNotif:false,
noti_icon:"/assets/svg/notify.svg",
isAdmin:false,
isEmp:false
};



    }


    getNotifications=()=>{


        // "sender":"customer",

        // "userData":data.record




        let req_data;
        let address;
       
        
           
       
      
          address="getAllNotification";
          req_data={
        
               
               "sender":this.props.location.data["sender"],
               "id":this.props.location.data["userData"]["id"],
               "location":"b",

                
          
         
          
      
      
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
              console.log(data)
         
              if(status==='Success')
              {
               
               
               

               setTimeout(() => {

                    if(JSON.stringify(notifications) != JSON.stringify(data.result)) 
                {
                    
                    notifications=data.result;
                    this.setState({
                        noti_icon:"/assets/svg/new_notify.svg"
                    });
             
              
                    
                }
                if(mounted)
                {
                    this.getNotifications()
                }
                
               

                }, 5000);
                
               // history.push("");
              }else{
      
               
                console.log("Operation Failed!")
              }
            // `data` is the parsed version of the JSON returned from the above endpoint.
              // { "userId": 1, "id": 1, "title": "...", "body": "..." }
          }).catch((error) => {
            
            //   reqInProcess=reqInProcess+1;
            // this.RequestToServer(reqInProcess);
           console.log("Unexpected error Try again Retrying...  ");
           if(mounted)
           {
               this.getNotifications()
           }
           
         });
       



    }
    RequestToServer=()=>{
        
     
    }
    componentWillUnmount(){
      mounted=false;
      }
    componentDidMount(){


        if(this.props.location.data === undefined )
        {
            
           
            mounted = false;
          history.push("/signin")
        }
        else
        {
            if(this.props.location.data["sender"]==="Admin")
            {
                this.setState({
                    isAdmin:true
                })
            }

            if(this.props.location.data["sender"] !=="customer")
            {
                this.setState({
                    isEmp:true
                })
            }
            this.getNotifications();


        }
      



    }
    
    replaceMainComponent(data,comp)
    {
        if(comp==="BookBusTicket")
        {
            this.setState({
                component:<BookBusTicket  userData={this.props.location.data} details={data}></BookBusTicket>
            });
        }

    }
    
    showHireMenu()
    {
        

        if(this.state.component != <HireVahicle></HireVahicle>)
             {
                 this.setState({
                     component:<HireVahicle userData={this.props.location.data} type="Vahicle"></HireVahicle>
                 });
             }
        
    }
    toggleSlideMenu()
    {
       
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
        
        if(document.getElementById("right").style.display=="none")
        {
            document.getElementById("right").style.display="block"
        }
        else{
            
            document.getElementById("right").style.display="none"
        }
        
        
    }
    getMenuSelection(pageToBeLoaded)
    {
        this.toggleSlideMenu();
        if(pageToBeLoaded==="Admin")
         {
            
            history.push({
                pathname: '/AdminDashboard',
                data: this.props.location.data["userData"],
              })
            
             
         }
         else
         if(pageToBeLoaded==="home")
         {
            if(this.state.component != <Home ></Home>)
            {
                this.setState({
                    component:<Home replaceMainComponent={this.replaceMainComponent}></Home>
                });
            }
             
         }
         else 
         if(pageToBeLoaded==="hire")
         {
             
            if(this.state.component != <HireVahicle type="Buses"></HireVahicle>)
             {

                 this.setState({
                     component:<HireVahicle userData={this.props.location.data} type="Buses"></HireVahicle>
                 });
             }


         }else
         if(pageToBeLoaded==="history")
         {
             
            if(this.state.component != <TransHistory ></TransHistory>)
             {

                 this.setState({
                     component:<TransHistory ></TransHistory>
                 });
             }


         }
        
     else if(pageToBeLoaded==="career")
         {
             
            if(this.state.component != <CareerPage ></CareerPage>)
             {

                 this.setState({
                     component:<CareerPage ></CareerPage>
                 });
             }


         }
         else if(pageToBeLoaded==="setting")
         {
             
            if(this.state.component != <Settings ></Settings>)
             {

                 this.setState({
                     component:<Settings ></Settings>
                 });
             }


         }
         else if(pageToBeLoaded==="wallet")
         {
             
           

                 this.setState({
                     component:<Wallet ></Wallet>
                 });
             


         }
         
        
        
    }

    getModalBtnClick=type=>{
        this.setState({showNotif:false,noti_icon:"/assets/svg/notify.svg",})
        
       
      
      }

checkDriverAvailibility=rData=>{


    let req_data;
    let address;
    address="getDriverstatus";
    req_data={
 
       
       
        
  
 
  
        "company":this.props.location.data["userData"]["company"],
        "driverId":this.props.location.data["userData"]["id"],
 
 
 
 
 
 
 
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
       if(data.result["status"]!=="active")
       {
           console.log("You have an active ride ! You cant Accept until previous finishes")
       }
       else
       {
        details=data.result;
        this.acceptRideInvitation(rData)


       }
      
        //history.push('/home');
      
   
       // history.push("");
      }else{
 
       
        console.log("Operation Failed! Vahicle Details(Driver End)")
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
   
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
   console.log("Unexpected error Try again...  ");
 });

}

      acceptRideInvitation=rData=>{
        

        // "type":this.props.location.data["sender"],
        // "id":this.props.location.data["userData"]["id"],


//we will get this when driver logs in
let empId=this.props.location.data["userData"]["id"]
let vahicleId="ICT-1234"
let company=this.props.location.data["userData"]["company"]

let ride_id=rData.rideId

let req_data;
let address;

if(reqInProcess<= 3)
{
    if(reqInProcess==1)
    {
        address="addBooking";
        req_data={
     
           
           
            
      
     
      
            "company":company,
            "ride_id":ride_id,
     "driverId":empId,
     
     "vahicleId":details["vahicleId"],
     "cords":details["position"],
     
     
     
     
          }
           
    }
    else if(reqInProcess==2)
    {
        address="updateHirePoolStatus";
        req_data={
     
           
           
            
      
     
      
            "company":company,
            "driverId":empId,
     "status":"riding",
     
     
     
     
     
     
          }
           
    }
    else 
    {
        address="updateNotificationStatus";
        req_data={
     
           
           
            
      
     
      
            "company":company,

            "rideId":ride_id,
     "status":"No",
     
     
     
     
     
     
          }
           
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
      console.log(status)
 
      if(status==='Success')
      {
        console.log("Success"+reqInProcess)
        reqInProcess++;
       this.acceptRideInvitation(rData);
        //history.push('/home');
      
   
       // history.push("");
      }else{
 
       
        console.log("Operation Failed!"+reqInProcess)
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
   
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
   console.log("Unexpected error Try again...  ");
 });
 
 


}
else
{
    

    let body=rData.body.split("-");
    


    let temp={
        "sender":"driver",
        "src":body[0].split(',').map(Number),
         "dest":body[1].split(',').map(Number),
         "date":body[2],
         "time":body[3],
         "driverId":empId,
         "company":company,
         "rideId":rData.rideId,
         "customerID":rData.from,
         "details":details,
         "fare":body[4],
         "name":this.props.location.data["userData"].name, 
         "phone":this.props.location.data["userData"].phone ,
         "dis":body[4]/25,
        };

    
     //  console.log( temp["src"])
    history.push({
        pathname: '/trackRide',
        data: temp,
      }
        )
   
}


  

   

  








      }
   render(){
     
      return(

        <div style={{height:"100%",width:"100%"}}>
<NotificationModal acceptRideInvitation={this.checkDriverAvailibility} getModalBtnClick={this.getModalBtnClick} showModal={this.state.showNotif} notifications={notifications}></NotificationModal>
<div className="topbar" >
    <svg className="translate" style={{marginLeft:"15px"}} onClick={this.toggleSlideMenu} xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>


  <div className="translateText"><text>ManageIt</text> </div>
             






<div className="topbarCorerPart">
<text id="userName">Welcome Afzaal !</text>

<svg width="40%" width= "auto" style={{position:"inherit", width:"60px",}} margin-right= "25px" fill="white" height="40%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm2.47-7.587a5.15 5.15 0 0 1-.548.61c-.206.195-.42.387-.64.578-.25.22-.418.37-.503.62-.09.26-.13.78-.14.78H8.08s.02-.48.06-.71a2.09 2.09 0 0 1 .19-.57c.09-.18.207-.34.348-.5A6.1 6.1 0 0 1 9.2 8.7c.156-.14.3-.268.436-.393s.253-.25.356-.382c.103-.13.184-.27.244-.42.06-.147.09-.312.09-.493 0-.4-.106-.702-.32-.913-.21-.21-.524-.32-.936-.32-.165 0-.93-.04-1.2.49-.075.142-.187.49-.187.68H6c.072-.598.178-.91.33-1.21.155-.308.366-.49.633-.7.267-.206.58-.33.94-.43.36-.105.75-.14 1.172-.14.463 0 .874.06 1.236.172.37.11.67.275.92.487.26.21.45.474.58.78.13.305.2.652.2 1.04 0 .28-.042.54-.14.78a2.81 2.81 0 0 1-.383.68zM8.997 14c-.32 0-.565-.094-.738-.284a1.006 1.006 0 0 1-.26-.704c0-.143.02-.276.06-.4a.923.923 0 0 1 .19-.32.868.868 0 0 1 .31-.215A1.11 1.11 0 0 1 8.99 12c.16 0 .3.026.426.077a.83.83 0 0 1 .312.215c.084.09.15.198.196.32.046.124.07.256.07.4 0 .28-.087.516-.26.704-.175.19-.42.284-.74.284z" fill-rule="evenodd"></path></svg>
<img id="notify_icon"   style={{width:"20px",height:"20px",marginRight:"50px"}} src={this.state.noti_icon}
onClick={()=>{
    this.setState({
        noti_icon:"/assets/svg/new_notify.svg",
        showNotif:true
    });
}}

></img>

    
  <img id="userprofile" src="/assets/images/userprofile.png"></img>

 
  </div>
  </div>
        <div  >
            
            <div id="right" className="shadow-lg p-3 mb-5 bg-white rounded"  style={{display: 'none'}}>
            <ul className="home-nav-ul" >

                
                <li className="home-nav-item" onClick={() => this.getMenuSelection("home")}>
                <img src="/assets/images/home_icon.png">
                </img>   
                  <span >
                        Home
                    </span>
                </li>

                <li className="home-nav-item" onClick={() => this.getMenuSelection("hire")}>
                <img src="/assets/images/booking_icon.png">
                </img>   
                <span>
                        Hire a Vahicle
                    </span>



               </li>
           


               <li className="home-nav-item" onClick={() => this.getMenuSelection("history")}>



               <img src="/assets/images/history_icon.png">
                </img>         <span>
                       History
                    </span>
                </li>

               


                <li className="home-nav-item" onClick={() => this.getMenuSelection("wallet")}>
                <img src="/assets/images/career_icon.png">
                </img>         <span>
                        My Wallet
                    </span>
                </li>
                <li className="home-nav-item" onClick={() => this.getMenuSelection("career")}>
                <img src="/assets/images/career_icon.png">
                </img>         <span>
                        Career
                    </span>
                </li>
                <li className="home-nav-item" onClick={() => this.getMenuSelection("partner")}>
                <img src="/assets/images/partners_icon.png"/>  

                    <span>
                        Our Partners
                    </span>
                </li>
                <li  className={this.state.isAdmin? "showOption home-nav-item":"hideOption home-nav-item" }  onClick={() => this.getMenuSelection("Admin")}>
                <img src="/assets/images/partners_icon.png"/>  

                    <span>
                        Admin Dashboard
                    </span>
                </li>
                <li className="home-nav-item" onClick={() => this.getMenuSelection("setting")}>
                <img src="/assets/images/settings_icon.png">
                </img>         <span>
                        Settings
                    </span>
                </li>
                <li className={this.state.isEmp? "showOption home-nav-item":"hideOption home-nav-item" }  onClick={() => this.getMenuSelection("home")}>
                
                  <span >
                        switch to customer
                    </span>
                    <input
              type="checkbox"
              
              id="customSwitch1"
              
              placeholder="Dark"
            />
                   
                </li>
            </ul>
        </div>
        </div>
        <div className="left">
      
        
{this.state.component}

{/* <HireVahicle></HireVahicle> */}
        
        </div>
    </div>
      )
    }
}
