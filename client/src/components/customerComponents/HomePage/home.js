import React, { Component } from 'react'
import './css/home.css'
export default class home extends Component {
    render() {
        return (
            <div >
 <div id="welcome_image_div" >

     <img src="/assets/imageSlider/test3.jpg"></img>
</div>

                <div id="search_div" className="clearfix md5">
            
  <section id="search">
    <div className="clearfix search-wrap">
      <div className="fl search-box clearfix" style={{borderColor: 'rgb(210, 210, 210)'}}>
        <span className="fl icon-city icon">
        </span>
        <div className="contentBar">

          <input type="text" id="src" className="db" data-message="Please enter a source city" tabIndex={1} autoComplete="off" />
          <label htmlFor="src" className="db" style={{left: '15%'}}>FROM</label>
          <div className="error-message-fixed "> </div>
        </div>
      </div>
      <span className="icon-doublearrow icon" id="togglebtn" />
      <div className="fl search-box">
        <span className="fl icon-city icon" style={{marginLeft: 13}}>
        </span>
        <div>
          <input type="text" id="dest" className="db" data-message="Please enter a destination city" tabIndex={2} autoComplete="off" />
          <label htmlFor="dest" style={{left: '21%'}} className="db">TO</label>
          <div className="error-message-fixed "> </div>
        </div>
      </div>
      <div className="fl search-box date-box gtm-onwardCalendar">
        <span className="fl icon-calendar_icon-new icon-onward-calendar icon">
    
        </span>
        <div>
          <input type="text" type="date" id="onward_cal" className="db"  style={{backgroundColor:"#f1f1f1"}} />
          <label htmlFor="onward_cal" className="db text-trans-uc">Onward Date</label>
          
        </div>
      </div>
      <div className="fl search-box date-box gtm-returnCalendar">
        <span className="fl icon-calendar_icon-new icon-return-calendar icon">
        </span>
        <div>
          <input type="date" id="return_cal" className="db text-trans-uc " style={{backgroundColor:"#f1f1f1"}} tabIndex={4} data-caleng />
          <label htmlFor="return_cal" className="db text-trans-uc tal">Return Date</label>
        </div>
         </div>
      <button id="search_btn" className="fl button">Search Buses</button>
    </div>
  </section>
</div>





<div className="main-body">
  <div className="promiseMain">
    <div className="header">
      <div className="img2_Hero" />
      <span className="fl">
        <div className="Title_hero">Introducing On-Time Guarantee</div>
        <div className="subtext_hero">Leave on time, everytime</div>
      </span>
      <span className="fr">
        
      </span>             
    </div>
    <div className="subHeader">
      <span className="img3_hero" />
      <span className="Herotext1">Look for buses with </span>
      <span className="img4_Hero" />
      <span className="text">tag while booking your journey, </span>
    </div>
    <div className="info_hero">
      <div className="titl_hero"> Bus on time </div>
      <div className="value_hero">Get 25% refund</div>
      <div className="text_hero">If bus departure is delayed by 30 mins from boarding point. </div>
    </div> 
    <div className="info_hero2">
      <div className="titl_hero"> No bus cancellation </div>
      <div className="value_hero">Get 150% refund</div>
      <div className="text_hero">Bus is cancelled without an alternate arrangement.</div>
    </div> 
    <div className="info_hero2">
      <div className="titl_hero"> Alternate assurance </div>
      <div className="value_hero">Get 300% refund</div>
      <div className="text_hero">Bus breaks down with no alternate arrangement within 6 hours. </div>
    </div>
  </div></div>
 

 

  <div class="main-body">
  <div class="mybustracker">
    <div class="header">
        <div class="img1_Tmb"></div>
            <div class="sub_container_Tmb">
              <div class="Title_Tmb">TRACK MY BUS - Smarter  Way To Travel</div>
              <div class="subtext_Tmb">Track your bus with our ‘Track My Bus’ feature and know the exact location in real-time.Stay informed and keep your family informed!</div>
              <div class="links_Tmb"> <a href="https://www.redbus.in/info/track-my-bus" class="know_more">Know more</a></div>
             </div>

    </div>
    <div class="path_Tmb"></div>
  <div class="info_Tmb">
         <div class="titl_Tmb"> BUSES</div>
         <div class="value_Tmb">10,000</div>
         <div class="text_Tmb">Total buses currently being tracked</div>
        </div> 
  <div class="info_Tmb">
         <div class="titl_Tmb"> ROUTES</div>
         <div class="value_Tmb">60,000</div>
         <div class="text_Tmb">Total routes covered by live tracking</div>
        </div> 
  <div class="info_Tmb">
         <div class="titl_Tmb"> USERS</div>
         <div class="value_Tmb">40,000</div>
         <div class="text_Tmb">Total users using Track My Bus feature</div>
        </div> 
 </div>

</div>


            </div>
        )
    }
}

























// import React from 'react'
// import MainPage from './mainPage.js'
// import SlideDrawer from './SlideDrawer/SlideDrawer.css'
// import Backdrop from './SlideDrawer/Backdrop.js'

// export default class home extends React.Component {
  
//     constructor()
//     {
// super();
// this.toggleSlideMenu=this.toggleSlideMenu.bind(this);
// this.showHireMenu=this.showHireMenu.bind(this);
// this.getMenuSelection=this.getMenuSelection.bind(this);

//     }

    
//     showHireMenu()
//     {
//         if(document.getElementById("subMenu").style.display=="none")
//         {
//             document.getElementById("subMenu").style.display="block"
//         }
//         else{
            
//             document.getElementById("subMenu").style.display="none"
//         }
        
//     }
//     toggleSlideMenu()
//     {
        
//         if(document.getElementById("right").style.display=="none")
//         {
//             document.getElementById("right").style.display="block"
//         }
//         else{
            
//             document.getElementById("right").style.display="none"
//         }
        
        
//     }
//     getMenuSelection(pageToBeLoaded)
//     {
//          console.log(pageToBeLoaded);
//          if(!pageToBeLoaded.includes("hire"))
//          {
//             document.getElementById("subMenu").style.display="none"
//          }
         
        
        
//     }
//    render(){
     
//       return(

//         <div style={{height:"100%",width:"100%"}}>

// <div className="topbar">
// <svg className="translate" style={{marginLeft:"15px"}} onClick={this.toggleSlideMenu} xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

//   <div className="translateText"><text>ManageIt</text> </div>
             






// <div className="topbarCorerPart">
 

// <svg width="40%" width= "auto" style={{position:"inherit", width:"100px",marginRight:"25px"}} margin-right= "25px" fill="white" height="40%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm2.47-7.587a5.15 5.15 0 0 1-.548.61c-.206.195-.42.387-.64.578-.25.22-.418.37-.503.62-.09.26-.13.78-.14.78H8.08s.02-.48.06-.71a2.09 2.09 0 0 1 .19-.57c.09-.18.207-.34.348-.5A6.1 6.1 0 0 1 9.2 8.7c.156-.14.3-.268.436-.393s.253-.25.356-.382c.103-.13.184-.27.244-.42.06-.147.09-.312.09-.493 0-.4-.106-.702-.32-.913-.21-.21-.524-.32-.936-.32-.165 0-.93-.04-1.2.49-.075.142-.187.49-.187.68H6c.072-.598.178-.91.33-1.21.155-.308.366-.49.633-.7.267-.206.58-.33.94-.43.36-.105.75-.14 1.172-.14.463 0 .874.06 1.236.172.37.11.67.275.92.487.26.21.45.474.58.78.13.305.2.652.2 1.04 0 .28-.042.54-.14.78a2.81 2.81 0 0 1-.383.68zM8.997 14c-.32 0-.565-.094-.738-.284a1.006 1.006 0 0 1-.26-.704c0-.143.02-.276.06-.4a.923.923 0 0 1 .19-.32.868.868 0 0 1 .31-.215A1.11 1.11 0 0 1 8.99 12c.16 0 .3.026.426.077a.83.83 0 0 1 .312.215c.084.09.15.198.196.32.046.124.07.256.07.4 0 .28-.087.516-.26.704-.175.19-.42.284-.74.284z" fill-rule="evenodd"></path></svg>
//   <img id="userprofile" src="/assets/images/userprofile.png"></img>
//   </div>
//   </div>
//         <div  >
            
//             <div id="right" className="shadow-lg p-3 mb-5 bg-white rounded"  style={{display: 'none'}}>
//             <ul className="home-nav-ul" >

                
//                 <li className="home-nav-item" onClick={() => this.getMenuSelection("home")}>
//                 <i className="fa fa-home"></i>    
//                   <span >
//                         Home
//                     </span>
//                 </li>

//                 <li className="home-nav-item" onClick={this.showHireMenu}>
//                 <i className="fa fa-home"></i>      <span>
//                         Hire a Vahicle
//                     </span>



//                </li>
//                <ul id="subMenu" style={{display:"none"}}>

// <li className="home-nav-item" onClick={() => this.getMenuSelection("hireBus")}>
// <i className="fa fa-home"></i>
//   <span>Hire a bus</span>  
// </li>
// <li className="home-nav-item" onClick={() => this.getMenuSelection("hireCar")}>
// <i className="fa fa-home"></i>
// <span>Hire a Car</span>
    
// </li>
// <li className="home-nav-item" onClick={() => this.getMenuSelection("hireTruck")}>
// <i className="fa fa-home"></i>
// <span>Hire a Truck</span>
    
// </li>
// </ul>
//                <li className="home-nav-item" onClick={() => this.getMenuSelection("history")}>



//                 <i className="fa fa-home"></i>      <span>
//                        History
//                     </span>
//                 </li>
//                 <li className="home-nav-item" onClick={() => this.getMenuSelection("career")}>
//                 <i className="fa fa-home"></i>      <span>
//                         Career
//                     </span>
//                 </li>
//                 <li className="home-nav-item" onClick={() => this.getMenuSelection("partner")}>
//                 <i className="fa fa-home"></i>      <span>
//                         Our Partners
//                     </span>
//                 </li>
//                 <li className="home-nav-item" onClick={() => this.getMenuSelection("setting")}>
//                 <i className="fa fa-home"></i>      <span>
//                         Settings
//                     </span>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         <div className="left">
//             smdzxm.z,xmc
//             zXC
//         </div>
//     </div>
//       )
//     }
// }
