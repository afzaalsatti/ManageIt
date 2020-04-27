import React from 'react'
import  './SlideDrawer/SlideDrawer.css'
import Home from './home'
import HireVahicle from '../Hire/HireVahicle'
import TransHistory from '../TransportationHistory/TransHistory'
import CareerPage from '../career/CareerPage'

export default class mainPage extends React.Component {
  
    constructor()
    {
super();
this.toggleSlideMenu=this.toggleSlideMenu.bind(this);
this.showHireMenu=this.showHireMenu.bind(this);
this.getMenuSelection=this.getMenuSelection.bind(this);
this.state={component:<Home></Home>};

    }

    
    showHireMenu()
    {
        if(document.getElementById("subMenu").style.display=="none")
        {
            document.getElementById("subMenu").style.display="block"
        }
        else{
            
            document.getElementById("subMenu").style.display="none"
        }

        if(this.state.component != <HireVahicle></HireVahicle>)
             {
                 this.setState({
                     component:<HireVahicle type="Buses"></HireVahicle>
                 });
             }
        
    }
    toggleSlideMenu()
    {
        
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
       
         if(pageToBeLoaded==="home")
         {
            if(this.state.component != <Home></Home>)
            {
                this.setState({
                    component:<Home></Home>
                });
            }
             
         }
         else 
         if(pageToBeLoaded==="hire")
         {
             
            if(this.state.component != <HireVahicle type="Buses"></HireVahicle>)
             {

                 this.setState({
                     component:<HireVahicle type="Buses"></HireVahicle>
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
         else 
         if(pageToBeLoaded==="hireCar")
         {
             
            if(this.state.component != <HireVahicle type="Cars"></HireVahicle>)
             {

                 this.setState({
                     component:<HireVahicle type="Cars"></HireVahicle>
                 });
             }


         }else
         if(pageToBeLoaded==="hireTruck")
         {
             
            if(this.state.component != <HireVahicle type="Trucks"></HireVahicle>)
             {

                 this.setState({
                     component:<HireVahicle type="Trucks"></HireVahicle>
                 });
             }


         }else if(pageToBeLoaded==="career")
         {
             
            if(this.state.component != <CareerPage ></CareerPage>)
             {

                 this.setState({
                     component:<CareerPage ></CareerPage>
                 });
             }


         }
         if(!pageToBeLoaded.includes("hire"))
         {
            
            document.getElementById("subMenu").style.display="none"
         }
         
        
        
    }
   render(){
     
      return(

        <div style={{height:"100%",width:"100%"}}>

<div className="topbar" >
<svg className="translate" style={{marginLeft:"15px"}} onClick={this.toggleSlideMenu} xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

  <div className="translateText"><text>ManageIt</text> </div>
             






<div className="topbarCorerPart">
 

<svg width="40%" width= "auto" style={{position:"inherit", width:"100px",marginRight:"25px"}} margin-right= "25px" fill="white" height="40%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm2.47-7.587a5.15 5.15 0 0 1-.548.61c-.206.195-.42.387-.64.578-.25.22-.418.37-.503.62-.09.26-.13.78-.14.78H8.08s.02-.48.06-.71a2.09 2.09 0 0 1 .19-.57c.09-.18.207-.34.348-.5A6.1 6.1 0 0 1 9.2 8.7c.156-.14.3-.268.436-.393s.253-.25.356-.382c.103-.13.184-.27.244-.42.06-.147.09-.312.09-.493 0-.4-.106-.702-.32-.913-.21-.21-.524-.32-.936-.32-.165 0-.93-.04-1.2.49-.075.142-.187.49-.187.68H6c.072-.598.178-.91.33-1.21.155-.308.366-.49.633-.7.267-.206.58-.33.94-.43.36-.105.75-.14 1.172-.14.463 0 .874.06 1.236.172.37.11.67.275.92.487.26.21.45.474.58.78.13.305.2.652.2 1.04 0 .28-.042.54-.14.78a2.81 2.81 0 0 1-.383.68zM8.997 14c-.32 0-.565-.094-.738-.284a1.006 1.006 0 0 1-.26-.704c0-.143.02-.276.06-.4a.923.923 0 0 1 .19-.32.868.868 0 0 1 .31-.215A1.11 1.11 0 0 1 8.99 12c.16 0 .3.026.426.077a.83.83 0 0 1 .312.215c.084.09.15.198.196.32.046.124.07.256.07.4 0 .28-.087.516-.26.704-.175.19-.42.284-.74.284z" fill-rule="evenodd"></path></svg>
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

                <li className="home-nav-item" onClick={this.showHireMenu}>
                <img src="/assets/images/booking_icon.png">
                </img>   
                <span>
                        Hire a Vahicle
                    </span>



               </li>
               <ul id="subMenu" style={{display:"none"}}>

<li className="home-nav-item" onClick={() => this.getMenuSelection("hireBus")}>
<i className="fa fa-home"></i>
  <span>Hire a bus</span>  
</li>
<li className="home-nav-item" onClick={() => this.getMenuSelection("hireCar")}>
<i className="fa fa-home"></i>
<span>Hire a Car</span>
    
</li>
<li className="home-nav-item" onClick={() => this.getMenuSelection("hireTruck")}>
<i className="fa fa-home"></i>
<span>Hire a Truck</span>
    
</li>
</ul>
               <li className="home-nav-item" onClick={() => this.getMenuSelection("history")}>



               <img src="/assets/images/history_icon.png">
                </img>         <span>
                       History
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
                <li className="home-nav-item" onClick={() => this.getMenuSelection("setting")}>
                <img src="/assets/images/settings_icon.png">
                </img>         <span>
                        Settings
                    </span>
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
