import React, { Component } from 'react'
import './css/home.css'
import "../career/jobs.css"
import { Card } from 'react-bootstrap'
import Footer from '../../Utils/Footer'
import MapLocationPicker from '../../Utils/MapLocationPicker'

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


var pageLoaded=1;
var from_cord="Select from map",to_cord="Select from map";
var click;
var fetchTickets;

export default class home extends Component {

  constructor(props) {
    super(props);




    this.state = {
      images: [
        "/assets/imageSlider/test.jpg",
        "/assets/imageSlider/test1.jpg",
        "/assets/imageSlider/test3.jpg"
      ],
      selectedImage: "/assets/imageSlider/test.jpg",
      showModal:false,
      tickets:[]
    };

    this.setCords = this.setCords.bind(this);
    this.searchTickets=this.searchTickets.bind(this);
     this.bookTicket=this.bookTicket.bind(this);

    
  }
  bookTicket = index => e =>
    {
      let data=[]
      data["id"]=fetchTickets[index]._id;
      data["company"]=fetchTickets[index].company;
      data["to"]=fetchTickets[index].to;
      data["tittle"]=fetchTickets[index].tittle;
      data["from"]=fetchTickets[index].from;
      data["date"]=fetchTickets[index].dep_date;
      data["driver_Id"]=fetchTickets[index].driver_id;
      data["vahicle_Id"]=fetchTickets[index].vh_id;
      data["fare"]=fetchTickets[index].fare;
      data["booked_seats"]=fetchTickets[index].booked_seats;
      data["cust_id"]="CustomerID";
      data["cust_email"]="Customer email";
     


this.props.replaceMainComponent(data,"BookBusTicket")
      
    }
  searchTickets()
  {
    let to=document.getElementById("dest").value;
    let from=document.getElementById("src").value;
    let dept_date=document.getElementById("onward_cal").value;
    window.alert("Contecting")
        
    const req_data={
    
     
      
     
      "to":"73.30079257202033,33.23656743872422",
      "from":"73.0645865173326,33.19290819746557",
      "dept_date":"2020-06-17"




    }
     
      const options={
          method:"POST",
          headers:{
              'Content-type':"application/json"
              
          },
          body:JSON.stringify(req_data)
      }
      fetch("/getTickets",options).then(response=>{
          return response.json();
    }).then(data=>{
        let status=data.status;
        console.log(data.result)
   
        if(status==='Success')
        {
        
          window.alert("Operation Sucessful")
          fetchTickets=data.result;
          
let temp=  data.result.map((key,index)=>{
  return  <li style={{listStyle:"none"}}>

<Card className="JobAdsCard">
      <div className="historymiddlediv">
      <img
          className="company_logo"
           src="/assets/svg/tickets.svg">
          </img>
          <text id ="jobTitle" className="rideHistoryAddress">{data.result[index].title}</text>
   
          <text id ="endDate" className="moveToRight">
              <span style={{marginRight:"15px",color:"red"}}>
Departure Date
                  </span>
                  <span>
                  {data.result[index].dep_date}
                  </span>
          </text>
   
   <br></br>
   
   <text  style={{    marginLeft: "12px"}}>
              <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Issue Date
                  </span>
                  <span style={{    fontSize: "12px"}}>
                  {data.result[index].arv_date}
                  </span>
          </text>
         
          </div>
          
         
          <div>
          <text  style={{    marginLeft: "70px"}}>
              <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
Fare
                  </span>
                  <span style={{    fontSize: "12px"}}>
{data.result[index].fare} PKR
                  </span>
          </text>
          <br>
          </br>

          <text style={{    fontSize: "12px", marginLeft: "70px"}} >
          <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
              Company Name
              </span>
              {data.result[index].company}
              
          </text>
          <br></br>
          <text style={{    fontSize: "12px", marginLeft: "70px"}} >
          <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
              Contact Email
              </span>
              {data.result[index].email}
              
          </text>
          <br></br>
          <br></br>
          <text style={{    fontSize: "12px", marginLeft: "70px"}} >
          <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
              Vahicle Number
              </span>
              {data.result[index].vh_id}
              
          </text>
          <br></br>
          <text style={{    fontSize: "12px", marginLeft: "70px"}} >
          <span style={{marginRight:"10px",color:"green",    fontSize: "12px"}}>
             Available Seats
              </span>
              {data.result[index].booked_seats}
              
          </text>
          
          
          <button id="JobsAddListButton" className="moveToRight"  onClick={this.bookTicket(index)} >
          {/* onClick={this.props.showJobDetails(data.result[index])} */}
              Buy Now
          </button>
          </div>
      </Card>
    

      </li>
});

          this.setState({
            tickets:temp  
        
          })
       
        }else{
         
          window.alert("Operation Failed!")
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
     
     window.alert("Unexpected error Try again...  "+error);
   });


  }

  setCords(a){
if(click==="from")
{
  from_cord=a.lng+","+a.lat;
  window.alert("from   "+from_cord)
}
else{
  to_cord=a.lng+","+a.lat;
  window.alert("to   "+to_cord)
}
   


  }
  componentDidMount() {
   
    setInterval(() => {
      this.setState(prevState => {
        if (prevState.selectedImage === this.state.images[0]) {
          return {
            selectedImage: this.state.images[1]
          };
        }else
        if (prevState.selectedImage === this.state.images[1]) {
          return {
            selectedImage: this.state.images[2]
          };
        } else {
          return {
            selectedImage: this.state.images[0]
          };
        }
      });
    }, 2000);
  }

 
    render() {
        return (
<div>
 {/* <div id="buyTicketComponent">

 </div> */}

          <div id="homeComponent">
            <Modal  style={{backdropFilter: "blur(5px)"}} show={this.state.showModal} >
        
        <Modal.Body style={{background:"#3d3d3e"}}>
        <MapLocationPicker setCords={this.setCords}>

</MapLocationPicker >
    </Modal.Body  >
       <Modal.Footer style={{background:"#3d3d3e"}}>
       <button
       style={{
        background: "#196EDE",
        color: "white",
        width: "40%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
         document.getElementById("src").value=from_cord;
         document.getElementById("dest").value=to_cord;
         this.setState({
          showModal:false
      });
      }}>Confirm Location</button>
       </Modal.Footer>
      </Modal>
            

            
            <h1 className="book_ticket_heading">Booking  Tickets Became so easy!</h1>
            <div id="welcome_image_div">
              <img src={this.state.selectedImage}></img>
            </div>

            <div id="search_div" className="clearfix md5">
              <section id="search">
                <div className="clearfix search-wrap">
                  <div
                    className="fl search-box clearfix"
                    style={{ borderColor: "rgb(210, 210, 210)" }}
                  >
                    <span className="fl icon-city icon"></span>
                    <div className="contentBar">
                    <img
                            className="autocomplete_img"
                            src="/assets/svg/tickets.svg"
                            alt
                          />
                      <input
                        type="text"
                        id="src"
                        className="db"
                        data-message="Please enter a source city"
                        tabIndex={1}
                        autoComplete="off"
                        onClick={ ()=>{
                          click="from";
                         (this.state.showModal==false && pageLoaded >1)?
                          
                            this.setState({
                              showModal:true
                            }) 
                            
                            :
                           pageLoaded=2
                        }
                          }
                          
                          
                        placeholder="FROM*"
                      />
                      
                      <div className="error-message-fixed "> </div>
                    </div>
                  </div>
                  <span className="icon-doublearrow icon" id="togglebtn" />
                  <div className="fl contentBar search-box">
                    
                    <div className="contentBar">
                    <img
                            className="autocomplete_img"
                            src="/assets/svg/distance.svg"
                            alt
                            style={{    marginTop :"10px"}}
                          />
                      <input
                        type="text"
                        id="dest"
                        className="db"
                        data-message="Please enter a destination city"
                        tabIndex={2}
                        autoComplete="off"
                        onClick={ ()=>{
                          click="to";
                         (this.state.showModal==false && pageLoaded >1)?
                          
                            this.setState({
                              showModal:true
                            }) 
                            
                            :
                           pageLoaded=2
                        }
                      }
                        placeholder="To*"
                      />
                      
                      <div className="error-message-fixed "> </div>
                    </div>
                  </div>
                  <div className="fl search-box date-box gtm-onwardCalendar">
                    <span className="fl icon-calendar_icon-new icon-onward-calendar icon"></span>
                    <div style={{backgroundColor:"#f1f1f1"}}>
                    <text htmlFor="onward_cal" className="date_text">
                        Onward Date *
                      </text>
                      <input
                        type="text"
                        type="date"
                        id="onward_cal"
                        className=" date_input"
                        style={{ backgroundColor: "#f1f1f1" }}
                      />
                      
                    </div>
                  </div>
                  <div className="fl search-box date-box gtm-returnCalendar">
                    <span className="fl icon-calendar_icon-new icon-return-calendar icon"></span>
                    <div style={{backgroundColor:"#f1f1f1"}}>
                    <text
                        htmlFor="return_cal"
                        className="date_text"
                      >
                        Return Date
                      </text>
                      <input
                        type="date"
                        id="return_cal"
                        className=" date_input"
                        style={{ backgroundColor: "#f1f1f1" }}
                        tabIndex={4}
                        data-caleng
                      />
                      
                    </div>
                  </div>
                  <button id="search_btn" className="fl button" onClick={this.searchTickets}>
                    Search Buses
                  </button>
                </div>
              </section>
            </div>
<div className={this.state.tickets.length == 0 ? "hideBottomDiv" : "showBottomDiv"}>
  <button  style={{float: "right",
    color: "red",
    marginRight: "5px",
    background: "white",
    border: "none",
}}
onClick={()=>{
  this.setState({tickets:[]})
}}

>
    close
  </button>
  <br></br>
<h5 style={{    textAlign: "center"}}>Available Tickets(Based on your Search)</h5>
 {this.state.tickets}
</div>
<div className={this.state.tickets.length == 0 ? "showBottomDiv" : "hideBottomDiv"}>
            <div className="main-body">
              <div className="promiseMain">
                <div className="header">
                  <div className="img2_Hero" />
                  <span className="fl">
                    <div className="Title_hero">
                      Introducing On-Time Guarantee
                    </div>
                    <div className="subtext_hero">Leave on time, everytime</div>
                  </span>
                  <span className="fr"></span>
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
                  <div className="text_hero">
                    If bus departure is delayed by 30 mins from boarding point.{" "}
                  </div>
                </div>
                <div className="info_hero2">
                  <div className="titl_hero"> No bus cancellation </div>
                  <div className="value_hero">Get 150% refund</div>
                  <div className="text_hero">
                    Bus is cancelled without an alternate arrangement.
                  </div>
                </div>
                <div className="info_hero2">
                  <div className="titl_hero"> Alternate assurance </div>
                  <div className="value_hero">Get 300% refund</div>
                  <div className="text_hero">
                    Bus breaks down with no alternate arrangement within 6
                    hours.{" "}
                  </div>
                </div>
              </div>
            </div>

            <div class="main-body">
              <div class="mybustracker">
                <div class="header">
                  <div class="img1_Tmb"></div>
                  <div class="sub_container_Tmb">
                    <div class="Title_Tmb">
                      TRACK MY BUS - Smarter Way To Travel
                    </div>
                    <div class="subtext_Tmb">
                      Track your bus with our ‘Track My Bus’ feature and know
                      the exact location in real-time.Stay informed and keep
                      your family informed!
                    </div>
                    <div class="links_Tmb">
                      {" "}
                      <a
                       
                        class="know_more"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="path_Tmb"></div>
                <div class="info_Tmb">
                  <div class="titl_Tmb"> BUSES</div>
                  <div class="value_Tmb">10,000</div>
                  <div class="text_Tmb">
                    Total buses currently being tracked
                  </div>
                </div>
                <div class="info_Tmb">
                  <div class="titl_Tmb"> ROUTES</div>
                  <div class="value_Tmb">60,000</div>
                  <div class="text_Tmb">
                    Total routes covered by live tracking
                  </div>
                </div>
                <div class="info_Tmb">
                  <div class="titl_Tmb"> USERS</div>
                  <div class="value_Tmb">40,000</div>
                  <div class="text_Tmb">
                    Total users using Track My Bus feature
                  </div>
                </div>
              </div>
            </div>
            <div class="border-separator"></div>

            <div id="advantage_div">
              <section>
                <div className="aw main-body">
                  <div className="ah heading-1 main-header-family rest1 animate">
                    <div className="dib">
                      <img
                        src="//s1.rdbuz.com/web/images/home/promise.png"
                        height={100}
                      />
                    </div>
                    <div className="promise-head-main">
                      {" "}
                      We promise to deliver
                    </div>
                  </div>
                  <div className="ad rest1 animate"></div>
                  <div
                    className="clearfix aa our-promise-blocks"
                    id="advantage"
                  >
                    <div className="fl cardAdv rest1 appear-first aa-25 animate">
                      <div className="imgCont rest1 animate">
                        <img
                          src="//s3.rdbuz.com/web/images/home/maximum_choices.png"
                          height={90}
                        />
                      </div>
                      <div className="tilleBlock rest1 animate">
                        MAXIMUM CHOICE
                      </div>
                      <div className="second-level-heading ">
                        We give you the widest number of travel options across
                        thousands of routes.
                      </div>
                    </div>
                    <div className="fl cardAdv rest1 appear-second aa-25 animate">
                      <div className="imgCont rest1 animate">
                        <img
                          src="//s1.rdbuz.com/web/images/home/customer_care.png"
                          height={100}
                        />
                      </div>
                      <div className="tilleBlock rest1 animate">
                        SUPERIOR CUSTOMER SERVICE
                      </div>
                      <div className="second-level-heading ">
                        We put our experience and relationships to good use and
                        are available to solve your travel issues.
                      </div>
                    </div>
                    <div className="fl cardAdv rest1 appear-third aa-25 animate">
                      <div className="imgCont rest1 animate">
                        <img
                          src="//s1.rdbuz.com/web/images/home/lowest_Fare.png"
                          height={90}
                        />
                      </div>
                      <div className="tilleBlock rest1 animate">
                        LOWEST PRICES
                      </div>
                      <div className="second-level-heading ">
                        We always give you the lowest price with the best
                        partner offers.
                      </div>
                    </div>
                    <div className="fl cardAdv rest1 appear-fourth aa-25 animate">
                      <div className="imgCont rest1 animate">
                        <img
                          src="//s2.rdbuz.com/web/images/home/benefits.png"
                          height={90}
                        />
                      </div>
                      <div className="tilleBlock rest1 animate">
                        UNMATCHED BENEFITS
                      </div>
                      <div className="second-level-heading ">
                        We take care of your travel beyond ticketing by
                        providing you with innovative and unique benefits.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div class="border-separator"></div>

            <div id="awards_div" className="main-body">
              <section>
                <div className="aw">
                  <div className="ah heading-1 main-header-family rest1 main-head animate">
                    Awards &amp; Recognition
                  </div>
                  <div className="clearfix ac awards-main">
                    <div className="fl rest1 appear-first animate">
                      <a
                        href="http://www.business-standard.com/article/companies/bs-annual-awards-saluting-the-spirit-of-entrepreneurship-114033100015_1.html"
                        target="_blank"
                      >
                        <div>
                          <div className="imgCont">
                            <img src="//s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" />
                          </div>
                          <div className="second-level-heading label-1">
                            Most Innovative Company
                          </div>
                          <div className="second-level-heading label-2"></div>
                        </div>
                      </a>
                    </div>
                    <div className="fl rest1 appear-second animate">
                      <a
                        href="https://thebrandtrustreport.wordpress.com/tag/redbus-in/"
                        target="_blank"
                      >
                        <div style={{ marginTop: 35 }}>
                          <div className="imgCont">
                            <img src="//s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png" />
                          </div>
                          <div className="second-level-heading label-1">
                            Most Trusted Brand
                          </div>
                          <div className="second-level-heading label-2"></div>
                        </div>
                      </a>
                    </div>
                    <div className="fl rest1 appear-third animate">
                      <a
                        href="https://eyefortravelblog.blogspot.in/2014/04/winners-of-mobile-innovation-in-travel.html"
                        target="_blank"
                      >
                        <div>
                          <div className="imgCont">
                            <img src="//s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png" />
                          </div>
                          <div className="second-level-heading label-1">
                            Mobile Innovation Award
                          </div>
                          <div className="second-level-heading label-2"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="border-separator"></div>

            <div
              className="main-body"
              style={{ textAlign: "center", backgroundColor: "#F1F1F1" }}
            >
              <section id="stats_div">
                <div>
                  <div className="stats-header heading-1 main-header-family rest1 animate">
                    The numbers are growing!
                  </div>
                  <div className="clearfix stats-v-holder">
                    <div className="fll">
                      <div>
                        <div className="sp rest1 animate">CUSTOMERS</div>
                        <div className="sv rest1 animate">17 M</div>
                        <div className="common-desc second-level-heading rest1 animate">
                          redBus is trusted by over 17 million happy customers
                          globally
                        </div>
                      </div>
                    </div>
                    <div className="fll">
                      <div>
                        <div className="sp rest1 animate">OPERATORS</div>
                        <div className="sv rest1 animate">2300</div>
                        <div className="common-desc second-level-heading rest1 animate">
                          network of over 2300 bus operators worldwide
                        </div>
                      </div>
                    </div>
                    <div className="fll">
                      <div>
                        <div className="sp rest1 animate">BUS TICKETS</div>
                        <div className="sv rest1 animate">180+ M</div>
                        <div className="common-desc second-level-heading rest1 animate">
                          Over 180 million trips booked using redBus
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="border-separator"></div>
            <div className="seo-section clearfix ">
              <div className="main-body ">
                <div className="operator-footer-list clearfix">
                  {" "}
                  <ul className="container clearfix">
                    {" "}
                    <h6 className="seo-header">Top Operators</h6>{" "}
                    <li>
                      <a href="https://www.redbus.in/travels/srs-travels-srs.aspx">
                        SRS Travels
                      </a>
                    </li>{" "}
                    <li>
                      <a href="https://www.redbus.in/travels/evacay-bus.aspx ">
                        Evacay Bus
                      </a>
                    </li>{" "}
                    
                    <li>
                      <a href="https://www.redbus.in/travels/yamani-travels.aspx">
                        Yamani Travels
                      </a>
                    </li>{" "}
                    <li>
                      <a href="https://www.redbus.in/travels/arthi-travels.aspx">
                        Arthi Travels
                      </a>
                    </li>{" "}
                  </ul>
                  <div className="more-link">
                    <a
                      href="/travels/operators-directory.aspx"
                      className="more-link site-links"
                      target="_blank"
                    >
                      All Operators &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-separator"></div>
        
            </div>
      
        <Footer>
          
        </Footer>
        
          </div>
        
          </div>
        );
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
