import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './rideHistory.css'
import TransHistDetails from './TransHistDetails'
var pickupCords,dropoffCords;
var bookingHistory=[];
var booking={}
var menu = [
    {
      "_id": "order ID",
      "date": "11/2/2020",
      "time": "11;20pm",
      "charges": "PKR 250",
      "started":"yes",
      "finished":"yes",
      "cash":"PKR 200",
      "credit":"PKR 50",
      "rating":"4",
      "coordinates":[],
      "vahicleMake": "Toyota",
      "model": "Corolla 2018",
      "vahicle_number":"PGX 1122",
      "driver_name":"Nadeem Ashraf",
      "pickup": "G8 Islamaebad",
      "dropoff": "I9 Islamabad",
      "pickupCords": "73.084488,33.738045",
      "dropoffCords": "73.071442,33.626057"

    },
    {
      "_id": "order ID",
      "date": "11/2/2020",
      "time": "11;20pm",
      "charges": "PKR 250",
      "started":"yes",
      "finished":"yes",
      "cash":"PKR 200",
      "credit":"PKR 50",
      "rating":"4",
      "coordinates":[],
      "vahicleMake": "Toyota",
      "model": "Corolla 2018",
      "vahicle_number":"PGX 1122",
      "driver_name":"Nadeem Ashraf",
      "pickup": "G8 Islamaebad",
      "dropoff": "I9 Islamabad",
      "pickupCords": "73.084488,33.738045",
      "dropoffCords": "73.071442,33.626057"
    },
    {"_id": "order ID",
    "date": "11/2/2020",
    "time": "11;20pm",
    "charges": "PKR 250",
    "started":"yes",
    "finished":"yes",
    "cash":"PKR 200",
    "credit":"PKR 50",
    "rating":"4",
    "coordinates":[],
    "vahicleMake": "Toyota",
    "model": "Corolla 2018",
    "vahicle_number":"PGX 1122",
    "driver_name":"Nadeem Ashraf",
    "pickup": "G8 Islamaebad",
    "dropoff": "I9 Islamabad",
    "pickupCords": "73.084488,33.738045",
    "dropoffCords": "73.071442,33.626057"
    },
    {
      "_id": "order ID",
      "date": "11/2/2020",
      "time": "11;20pm",
      "charges": "PKR 250",
      "started":"yes",
      "finished":"yes",
      "cash":"PKR 200",
      "credit":"PKR 50",
      "rating":"4",
      "coordinates":[],
      "vahicleMake": "Toyota",
      "model": "Corolla 2018",
      "vahicle_number":"PGX 1122",
      "driver_name":"Nadeem Ashraf",
      "pickup": "G8 Islamaebad",
      "dropoff": "I9 Islamabad",
      "pickupCords": "73.084488,33.738045",
      "dropoffCords": "73.071442,33.626057"
    },
    {
      "_id": "order ID",
      "date": "11/2/2020",
      "time": "11;20pm",
      "charges": "PKR 250",
      "started":"yes",
      "finished":"yes",
      "cash":"PKR 200",
      "credit":"PKR 50",
      "rating":"4",
      "coordinates":[],
      "vahicleMake": "Toyota",
      "model": "Corolla 2018",
      "vahicle_number":"PGX 1122",
      "driver_name":"Nadeem Ashraf",
      "pickup": "G8 Islamaebad",
      "dropoff": "I9 Islamabad",
      "pickupCords": "73.084488,33.738045",
      "dropoffCords": "73.071442,33.626057"
    }
  ];
  var userId,userEmail;
// function (list_item) {
    
  
// }
export default class BookingHistory extends Component {
    
    constructor(props)
    {
        super(props);
        userId=this.props.userData["id"]
        userEmail=this.props.userData["email"]
this.getListItemCards=this.getListItemCards.bind(this);
this.showRideDetails=this.showRideDetails.bind(this);
this.BtnPressed=this.BtnPressed.bind(this);

this.state={component:""};

this.getBookingHistory();
    }

    getDriverDetails=(id,company,count)=>
    {
    
    
    
        let req_data;
        let address;
        address="getDriverDetails";
        req_data={
     
           
           
            
       
     
      
            "company":company,
            "id":id,
     
     
     
     
     
     
     
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
            
    
    
            
          
          bookingHistory[count].driver_name=data.driverName;
          bookingHistory[count].phone=data.phone;
          
            
          }else{
     
           
            console.log("Operation Failed! Driver Details")
          }
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      }).catch((error) => {
       
        
       console.log("Unexpected error Try again...  ");
     });
    }

    getVahicleDetails=(vh_id,company,count)=>
{
  
  




  let req_data;
  let address;
  address="getVahicleDetails";
  req_data={

     
     
      
 


      "company":company,
      "number":vh_id,







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
      
     
      
      bookingHistory[count].vahicleMake=data.v_details["brand"]+"  ";
      bookingHistory[count].model=data.v_details["vah_model"]+"  "+data.v_details["reg_year"];
      bookingHistory[count].vahicle_number=data.v_details["number"];

   
    
   
    
    
    }else{

     
      console.log("Operation Failed! Vahicle Details")
    }
  // `data` is the parsed version of the JSON returned from the above endpoint.
  console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
}).catch((error) => {
 
  
 console.log("Unexpected error Try again...  in GET VAHICLE DETAILS ");
});
}
prepareDataForDisplay=(rides)=>{
  let count=0;
//   company: "decideLater"
// cords: (12) [null, Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// cust_id: "1"
// date: "7/1/2020"
// distance: "0"
// driverId: "5efc9d7ecb25952dc0384484"
// fare: "0"
// from: "72.7707022399893,33.459119468548835"
// rating: "nil"
// ride_id: "5efc9e8414172c12f0652ff7"
// status: "cancel(customer)"
// time: "9;32:12"
// to: "72.7707022399893,33.459119468548835"
// vahicleId: "ICT-220"
// __v: 0
// _id: "5efc9e8414172c12f0652ff7"

rides.forEach(ride => {
  ride.cords.splice(0, 1);

  bookingHistory.push(  {
    "company":ride.company,
    "cords":ride.cords,
   "dropoffCords":ride.to,
   "time":ride.time,
   "status":ride.status,
   "ride_id":ride.ride_id,
   "rating":ride.rating,
   "pickupCords":ride.from,
   "charges":ride.fare,
   "distance":ride.distance,
   "date":ride.date,
   "pickup": "Islamabad",
    "dropoff": "Islamabad",
  })


  let company=ride.company;

  this.getDriverDetails(ride.driverId,company,count)
  this.getVahicleDetails(ride.vahicleId,company,count)
  count++;
  
  
});

console.log("<<<<<<<<<<<<<<<History>>>>>>>>>>>>>>>>>>")
console.log(bookingHistory)
this.setState({
  component:this.getListItemCards()
})

}

getBookingHistory=()=>{




 let address="getBookingHistory";
  let req_data={

       
      
       "id":userEmail,
      

        
  
 
  


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
   
   
   bookingHistory=[];

   this.prepareDataForDisplay(data.BookingHistory)
    
   // history.push("");
  }else{

   
    console.log("Operation Failed!")
  }
// `data` is the parsed version of the JSON returned from the above endpoint.
  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
}).catch((error) => {

//   reqInProcess=reqInProcess+1;
// this.RequestToServer(reqInProcess);
console.log("Unexpected error Try again Retrying... History Booking  " +error);


});



}


    showRideDetails = list_item => e => {
        dropoffCords=bookingHistory[list_item].dropoffCords;
        pickupCords=bookingHistory[list_item].pickupCords;
        
        dropoffCords = dropoffCords.split(','); // split string on comma space
        pickupCords = pickupCords.split(','); // split string on comma space

        this.setState({
            component: <TransHistDetails dropoffCords={dropoffCords} pickupCords={pickupCords} details={bookingHistory[list_item]} ></TransHistDetails>
        });
      
       
    }
    BtnPressed=function(){

       
        if(this.state.component.type==TransHistDetails)
        {
            this.setState({
                 component:this.getListItemCards()
                });

        }

    }

    reverseGeocode=(cords)=>{
      const openGeocoder = require('node-open-geocoder');
      cords=cords.split(",")
      openGeocoder()
    .reverse(cords[0], cords[1])
    .end((err, res) => {
if(err)
{
  console.log(err)
}
else
{
  
  console.log(res)

}


    })

    
    }
    
    getListItemCards=function(){
        
          
          return bookingHistory.map((key, index)=>{
            
         
            
          return  <li   onClick={this.showRideDetails(index)} >
          <Card id="rideHistoryCard" >
                  <div>
          <div className="historytopdiv">
          
              <text className="date" >{key.date}</text>
              <text className="time">{key.time}</text>
              <text className="moveToRight">RS {key.charges}</text>
              <br></br>
          
           </div>
           <div className="historymiddlediv">
           <img
                                      className="rideHistoryAddIcon"
                                      style={{marginLeft: '5px'}}
                                      src="/assets/svg/tickets.svg"
                                      alt
                                    />
               <text className="rideHistoryAddress">{key.pickup}</text>
          
          
               <br></br>
              <svg id ="rideHistoryLineSperator"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={50} height={50} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M82.56,6.88v158.24h6.88v-158.24z" /></g></g></svg>
          
                                    <img
                                     className="rideHistoryAddIcon"
                                     
                                      src="/assets/svg/boarding-dropping.svg"
                                      alt
                                    />
               <text className="rideHistoryAddress">{key.dropoff}</text>
          
           </div>
                 </div>
          
                 </Card>
                  </li>
         } )

       };
    render() {
        return (
            <div>
                <div id="rideHistoryHeading">
             <svg onClick={this.BtnPressed} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#3498db" /><path d="M121.77734,75.85469c-15.31875,0 -30.60391,0 -45.92266,0c3.89688,-3.89687 7.79375,-7.79375 11.69063,-11.69062c9.00312,-9.00313 -5.00547,-22.91094 -14.04219,-13.87422c-9.50703,9.50703 -19.01406,19.01406 -28.52109,28.52109c-3.82969,3.82969 -3.72891,10.17891 0.06719,13.94141c9.50703,9.50703 19.01406,19.01406 28.52109,28.52109c9.00312,9.00313 22.91094,-5.00547 13.87422,-14.04219c-3.86328,-3.86328 -7.76016,-7.76016 -11.62344,-11.62344c15.25156,0 30.50312,0 45.75469,0c12.79922,0 12.9,-19.75312 0.20156,-19.75312z" fill="#ffffff" /></g></g></svg>
     <h5 >Your Vahicle Booking History</h5>
                </div>


              

<ul id="rideHistoryList" >

    {this.state.component}
    {/* <TransHistDetails></TransHistDetails> */}
</ul>
                



                
            </div>
        )
    }
}




// import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'
// import './rideHistory.css'
// import TransHistDetails from './TransHistDetails'
// var pickupCords,dropoffCords;
// var menu = [
//     {
//       "_id": "order ID",
//       "date": "11/2/2020",
//       "time": "11;20pm",
//       "charges": "PKR 250",
//       "started":"yes",
//       "finished":"yes",
//       "cash":"PKR 200",
//       "credit":"PKR 50",
//       "rating":"4",
//       "coordinates":[],
//       "vahicleMake": "Toyota",
//       "model": "Corolla 2018",
//       "vahicle_number":"PGX 1122",
//       "driver_name":"Nadeem Ashraf",
//       "pickup": "G8 Islamaebad",
//       "dropoff": "I9 Islamabad",
//       "pickupCords": "73.084488,33.738045",
//       "dropoffCords": "73.071442,33.626057"

//     },
//     {
//       "_id": "order ID",
//       "date": "11/2/2020",
//       "time": "11;20pm",
//       "charges": "PKR 250",
//       "started":"yes",
//       "finished":"yes",
//       "cash":"PKR 200",
//       "credit":"PKR 50",
//       "rating":"4",
//       "coordinates":[],
//       "vahicleMake": "Toyota",
//       "model": "Corolla 2018",
//       "vahicle_number":"PGX 1122",
//       "driver_name":"Nadeem Ashraf",
//       "pickup": "G8 Islamaebad",
//       "dropoff": "I9 Islamabad",
//       "pickupCords": "73.084488,33.738045",
//       "dropoffCords": "73.071442,33.626057"
//     },
//     {"_id": "order ID",
//     "date": "11/2/2020",
//     "time": "11;20pm",
//     "charges": "PKR 250",
//     "started":"yes",
//     "finished":"yes",
//     "cash":"PKR 200",
//     "credit":"PKR 50",
//     "rating":"4",
//     "coordinates":[],
//     "vahicleMake": "Toyota",
//     "model": "Corolla 2018",
//     "vahicle_number":"PGX 1122",
//     "driver_name":"Nadeem Ashraf",
//     "pickup": "G8 Islamaebad",
//     "dropoff": "I9 Islamabad",
//     "pickupCords": "73.084488,33.738045",
//     "dropoffCords": "73.071442,33.626057"
//     },
//     {
//       "_id": "order ID",
//       "date": "11/2/2020",
//       "time": "11;20pm",
//       "charges": "PKR 250",
//       "started":"yes",
//       "finished":"yes",
//       "cash":"PKR 200",
//       "credit":"PKR 50",
//       "rating":"4",
//       "coordinates":[],
//       "vahicleMake": "Toyota",
//       "model": "Corolla 2018",
//       "vahicle_number":"PGX 1122",
//       "driver_name":"Nadeem Ashraf",
//       "pickup": "G8 Islamaebad",
//       "dropoff": "I9 Islamabad",
//       "pickupCords": "73.084488,33.738045",
//       "dropoffCords": "73.071442,33.626057"
//     },
//     {
//       "_id": "order ID",
//       "date": "11/2/2020",
//       "time": "11;20pm",
//       "charges": "PKR 250",
//       "started":"yes",
//       "finished":"yes",
//       "cash":"PKR 200",
//       "credit":"PKR 50",
//       "rating":"4",
//       "coordinates":[],
//       "vahicleMake": "Toyota",
//       "model": "Corolla 2018",
//       "vahicle_number":"PGX 1122",
//       "driver_name":"Nadeem Ashraf",
//       "pickup": "G8 Islamaebad",
//       "dropoff": "I9 Islamabad",
//       "pickupCords": "73.084488,33.738045",
//       "dropoffCords": "73.071442,33.626057"
//     }
//   ];
// // function (list_item) {
    
  
// // }
// export default class BookingHistory extends Component {
    
//     constructor()
//     {
//         super();
// this.getListItemCards=this.getListItemCards.bind(this);
// this.showRideDetails=this.showRideDetails.bind(this);
// this.BtnPressed=this.BtnPressed.bind(this);

// this.state={component:this.getListItemCards()};
//     }


// getBookingHistory=()=>{

//  let address="getBookingHistory";
//   let req_data={

       
      
//        "id":"1",
      

        
  
 
  


//   }

//   const options={
//     method:"POST",
//     headers:{
//         'Content-type':"application/json"
        
//     },
//     body:JSON.stringify(req_data)
// }


// fetch("/"+address,options).then(response=>{
//     return response.json();
// }).then(data=>{
//   let status=data.status;


//   if(status==='Success')
//   {
   
   
//    console.log(data.BookingHistory)

 
    
//    // history.push("");
//   }else{

   
//     console.log("Operation Failed!")
//   }
// // `data` is the parsed version of the JSON returned from the above endpoint.
//   // { "userId": 1, "id": 1, "title": "...", "body": "..." }
// }).catch((error) => {

// //   reqInProcess=reqInProcess+1;
// // this.RequestToServer(reqInProcess);
// console.log("Unexpected error Try again Retrying...  ");


// });



// }


//     showRideDetails = list_item => e => {
//         dropoffCords=menu[list_item].dropoffCords;
//         pickupCords=menu[list_item].pickupCords;
        
//         dropoffCords = dropoffCords.split(','); // split string on comma space
//         pickupCords = pickupCords.split(','); // split string on comma space

//         this.setState({
//             component: <TransHistDetails dropoffCords={dropoffCords} pickupCords={pickupCords} details={menu[list_item]} ></TransHistDetails>
//         });
      
       
//     }
//     BtnPressed=function(){

       
//         if(this.state.component.type==TransHistDetails)
//         {
//             this.setState({
//                  component:this.getListItemCards()
//                 });

//         }

//     }
    
//     getListItemCards=function(){
        
          
//           return menu.map((key, index)=>{
            
         
            
//           return  <li   onClick={this.showRideDetails(index)} >
//           <Card id="rideHistoryCard" >
//                   <div>
//           <div className="historytopdiv">
          
//               <text className="date" >{key.date}</text>
//               <text className="time">{key.time}</text>
//               <text className="moveToRight">{key.charges}</text>
//               <br></br>
          
//            </div>
//            <div className="historymiddlediv">
//            <img
//                                       className="rideHistoryAddIcon"
//                                       style={{marginLeft: '5px'}}
//                                       src="/assets/svg/tickets.svg"
//                                       alt
//                                     />
//                <text className="rideHistoryAddress">{key.pickup}</text>
          
          
//                <br></br>
//               <svg id ="rideHistoryLineSperator"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={50} height={50} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M82.56,6.88v158.24h6.88v-158.24z" /></g></g></svg>
          
//                                     <img
//                                      className="rideHistoryAddIcon"
                                     
//                                       src="/assets/svg/boarding-dropping.svg"
//                                       alt
//                                     />
//                <text className="rideHistoryAddress">{key.dropoff}</text>
          
//            </div>
//                  </div>
          
//                  </Card>
//                   </li>
//          } )

//        };
//     render() {
//         return (
//             <div>
//                 <div id="rideHistoryHeading">
//              <svg onClick={this.BtnPressed} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#3498db" /><path d="M121.77734,75.85469c-15.31875,0 -30.60391,0 -45.92266,0c3.89688,-3.89687 7.79375,-7.79375 11.69063,-11.69062c9.00312,-9.00313 -5.00547,-22.91094 -14.04219,-13.87422c-9.50703,9.50703 -19.01406,19.01406 -28.52109,28.52109c-3.82969,3.82969 -3.72891,10.17891 0.06719,13.94141c9.50703,9.50703 19.01406,19.01406 28.52109,28.52109c9.00312,9.00313 22.91094,-5.00547 13.87422,-14.04219c-3.86328,-3.86328 -7.76016,-7.76016 -11.62344,-11.62344c15.25156,0 30.50312,0 45.75469,0c12.79922,0 12.9,-19.75312 0.20156,-19.75312z" fill="#ffffff" /></g></g></svg>
//      <h5 >Your Vahicle Booking History</h5>
//                 </div>


              

// <ul id="rideHistoryList" >

//     {this.state.component}
//     {/* <TransHistDetails></TransHistDetails> */}
// </ul>
                



                
//             </div>
//         )
//     }
// }
