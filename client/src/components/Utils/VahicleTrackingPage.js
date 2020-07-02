import React, { Component } from 'react'
import mapboxgl  from 'mapbox-gl';
import { Card } from 'react-bootstrap'
import './css/tracking.css'
import LoadiningModal  from '../Utils/LodingModal'
import { id } from 'date-fns/locale';
import history from '../../history'
var mounted=true;
var myLocation;
var gotVahicleDetails=false;
var gotDriverDetails=false;
var  gotCustomerDetails=false;
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmFsZXgyIiwiYSI6ImNqemNudGs4cDAyaGYzY3FiamVtd2h4ZmQifQ.YYt71bcR3ZdD6UgIs6EQog';
var  map;
var testVar=0;
var marker;
var reqInProcess=1;
var requestLoadingMessage="Searching For Captain";
var reqFailed=false;
var src,dest,fare,dis;
var rideID="";
var driverID="";
var testCords=[];
export default class VahicleTrackingPage extends Component {

    constructor(props) {
        super(props);
       
        if(this.props.location.data !== undefined)
        {
          
          
           src=this.props.location.data["src"];
             dest=this.props.location.data["dest"];
             dis=this.props.location.data["dis"]

             fare=dis*25;
            

        }
        else
        {
          src=[ "73.01920605585065","33.658527514640355"];
          dest=["72.94201871281325", "33.63254911983691"];
        }
        this.state = {
            pickupCords:src,
            dropoffCords:dest ,
        //   lng: this.props.pickupCords[0],
        //   lat: this.props.pickupCords[1],
          zoom: 5, showModal:false
        };

 
navigator.geolocation.getCurrentPosition(function(position) {

  myLocation=[position["coords"].longitude,position["coords"].latitude] ;
  testCords.push(myLocation)
  

  
// console.log(position["coords"].longitude )
// console.log(position["coords"].latitude )
//
});

      }
      
      getCustomerDetails=(id)=>
      {
      
      
      
          let req_data;
          let address;
          address="getCustomerDetails";
          req_data={
       
             
             
              
         
       
        
              "id":id
       
       
       
       
       
       
       
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
              
      
      
        
              document.getElementById("dname").innerHTML=data.customerName;
            
              document.getElementById("phone").innerHTML=data.phone;
            
            gotCustomerDetails=true;
            
              //history.push('/home');
            
         
             // history.push("");
            }else{
       
             
              console.log("Operation Failed! Customer Details")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
          console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
          //   reqInProcess=reqInProcess+1;
          // this.RequestToServer(reqInProcess);
         console.log("Unexpected error Try again...  ");
       });
      }
      getDriverDetails=(id,company)=>
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
              
      
      
        
              document.getElementById("dname").innerHTML=data.driverName;
            
              document.getElementById("phone").innerHTML=data.phone;
            
            gotDriverDetails=true;
            
              //history.push('/home');
            
         
             // history.push("");
            }else{
       
             
              console.log("Operation Failed! Driver Details")
            }
          // `data` is the parsed version of the JSON returned from the above endpoint.
          console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }).catch((error) => {
         
          //   reqInProcess=reqInProcess+1;
          // this.RequestToServer(reqInProcess);
         console.log("Unexpected error Try again...  ");
       });
      }

      getVahicleDetails=(vh_id,company)=>
{


//   brand: "HONDA"
// buyer_emp_id: "12364-8734344-1"
// color: "WHITE"
// company: "decideLater"
// entry_date: "6/29/2020"
// entry_time: "17:33:26"
// number: "ICT-2107"
// owner: "5ef9df96ca8ab93f3070f4eb"
// payment_status: "no estimate"
// price: "no estimate"
// reg_year: "2020"
// type: "Car"
// vah_model: "CIVIC"
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
        

  
         document.getElementById("VmakeModel").innerHTML=data.v_details["color"]+" "+data.v_details["brand"]+" "+data.v_details["vah_model"]+" "+data.v_details["reg_year"];
      
         document.getElementById("Vnumber").innerHTML=data.v_details["number"];
      
      gotVahicleDetails=true;
      
      
        //history.push('/home');
      
   
       // history.push("");
      }else{
 
       
        console.log("Operation Failed! Vahicle Details")
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
   
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
   console.log("Unexpected error Try again...  in GET VAHICLE DETAILS ");
 });
}

      getCordsFromServer=()=>{

        
       
        let data;
        let address;
        if(this.props.location.data !== undefined)
        {
          navigator.geolocation.getCurrentPosition(function(position) {

           
            myLocation=[position["coords"].longitude,position["coords"].latitude] ;
            console.log("Adding Location 2 : "+myLocation)
          // console.log(position["coords"].longitude )
          // console.log(position["coords"].latitude )
          
          });
        
        if( this.props.location.data["sender"]==="driver" )
        {
       
         
         document.getElementById("dname").innerHTML= this.props.location.data["name"];
          document.getElementById("phone").innerHTML= this.props.location.data["phone"]
          if(!gotVahicleDetails)
          {
            document.getElementById("fare").innerHTML="RS "+ this.props.location.data["fare"]
            this.getVahicleDetails( this.props.location.data["details"]["vahicleId"],  this.props.location.data["company"] )
          }
         
          driverID=this.props.location.data["driverId"]
          testCords.push(myLocation)
         
          
          address="setDriverlocation"
        
           data={
   
            "rideId":this.props.location.data["rideId"],
            "cords":testCords,
           
          }
           
           


          
        
        }else
        {



          address="getDriverlocation"
           data={
   
            "rideId":rideID,
           
          }
           
            
        }
        const options={
          method:"POST",
          headers:{
              'Content-type':"application/json"
              
          },
          body:JSON.stringify(data)
      }

        fetch("/"+address,options).then(response=>{
          return response.json();
    }).then(data=>{
        let status=data.status;
        
   
        if(status==='Success')
        {
        
          
                
    setTimeout(() => { 

      
      if(data.bookingStatus!=="booked" && data.bookingStatus!=="searching"){
      if(mounted)
      {
        this.checkBookingStatus();
      }
    }
     
  // var el = document.createElement('div');
  // el.className = 'tracking_marker';


  // // make a marker for each feature and add to the map
  // new mapboxgl.Marker(el)
 if(this.props.location.data["sender"]==="driver")
 {
  marker.setLngLat(myLocation)
    
  .addTo(map);

  map.flyTo({
    center:myLocation ,
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });

    if(!gotCustomerDetails)
    {

      this.getCustomerDetails(this.props.location.data["customerID"])
    }

 }
 else
 {
  testCords=data.cords;
  driverID=data.driverId;
 
 if(!gotVahicleDetails)
          {

            this.getVahicleDetails(data.vahicleId,data.company)
          }
          if(!gotDriverDetails)
          {

            this.getDriverDetails(driverID,data.company)
          }
 if(testCords.length>1)
 {
  this.setState({showModal:false});
  marker.setLngLat(testCords[testCords.length-1])
    
     .addTo(map);
 
     map.flyTo({
       center:testCords[testCords.length-1] ,
       essential: true // this animation is considered essential with respect to prefers-reduced-motion
       });

        //  map.on('load', function() {
        // map.addSource('route', {
        // 'type': 'geojson',
        // 'data': {
        // 'type': 'Feature',
        // 'properties': {},
        // 'geometry': {
        // 'type': 'LineString',
        // 'coordinates': testCords
           
        // }
        // }
        // });
        // map.addLayer({
        // 'id': 'route',
        // 'type': 'line',
        // 'source': 'route',
        // 'layout': {
        // 'line-join': 'round',
        // 'line-cap': 'round'
        // },
        // 'paint': {
        // 'line-color': '#888',
        // 'line-width': 8
        // }
        // });
        // });

     
 }
 else{
   console.log("Ride is not Booked Yet")
 }
}
   

if(mounted)
{
      this.getCordsFromServer();
}

     
  
  
  }, 2000);

  


         
        }else{
         
          if(mounted)
          {
          this.getCordsFromServer();}
          console.log("Error in fetch driver Location!")
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
      if(mounted)
      {
      this.getCordsFromServer();}
     console.log("Unexpected error Try again...");
   });

        }
        
      }
      componentDidMount() {
        
    // const { lng, lat, zoom } = this.state;

     map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.state.pickupCords,
//       pitch: 60, // pitch in degrees
// bearing: -60, // bearing in degrees
      zoom:20
    });

    var markerjson = {
        type: 'FeatureCollection',
        features: [
            
            {
          type: 'Point',
          geometry: {
            type: 'Point',
            coordinates: this.state.pickupCords
          },
          properties: {
            'marker-color': '#3bb2d0',
      'marker-size': 'large',
      'marker-symbol': 'rocket'
          }
          
        }
        ]
      };
    //   map.on('load', function() {
    //     map.addSource('route', {
    //     'type': 'geojson',
    //     'data': {
    //     'type': 'Feature',
    //     'properties': {},
    //     'geometry': {
    //     'type': 'LineString',
    //     'coordinates': [
    //         [ "73.01920605585065","33.658527514640355"],


    // ["73.0184764949986", "33.65849179380938"],
    // ["73.01757527276959", "33.658313189431944"],
    // ["73.01628781244244", "33.658027421656975"],
    // ["73.0127687542149", "33.65734871938782"],
    // ["73.01173878595318", "33.655686266763944"],
    // ["73.01126671716656", "33.65515043505014"],
    // ["73.0109663097569", "33.654686044866125"],
    // ["73.01066590234723", "33.65515043505014"],
    // ["73.00903511926617", "33.65565054475346"],
    // ["73.00791932031598", "33.65761523330819"],
    // ["73.00611099275133", "33.65943699534039"],
    // ["73.00546726258776", "33.66144221373574"],
    // ["73.00392231019518", "33.662299480189816"],
    // ["72.99868663819811", "33.661263615482646"],
    // ["72.99175581010363", "33.65862031799072"],
    // ["72.98697074922106", "33.65508388760189"],

    // ["72.97811051731765", "33.65258329355696"],
    // ["72.97158738499343", "33.64791233923181"],
    // [" 72.9568674219197", "33.644875641146605"],
    // [" 72.9508674219197", "33.63794442311159"],
    // ["72.94201871281325", "33.63254911983691"],
    
    //     ]
    //     }
    //     }
    //     });
    //     map.addLayer({
    //     'id': 'route',
    //     'type': 'line',
    //     'source': 'route',
    //     'layout': {
    //     'line-join': 'round',
    //     'line-cap': 'round'
    //     },
    //     'paint': {
    //     'line-color': '#888',
    //     'line-width': 8
    //     }
    //     });
    //     });


        if(this.props.location.data !== undefined)
        {
          let src,dest;
          
           src=this.props.location.data["src"];
             dest=this.props.location.data["dest"];
          
         
          var el = document.createElement('div');
          el.className = 'tracking_marker tracking_src_marker ' ;
       
           new mapboxgl.Marker(el)
            .setLngLat(src)
            .addTo(map);
  
            var el = document.createElement('div');
          el.className = 'tracking_marker tracking_dest_marker ';
       
           new mapboxgl.Marker(el)
            .setLngLat(dest)
            .addTo(map);
        }

       
     


    markerjson.features.forEach(function(mark) {
    
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'tracking_marker';
     
        marker= new mapboxgl.Marker(el);
        // make a marker for each feature and add to the map
        marker
          .setLngLat(src)
         
          .addTo(map);
      });

      

    //   while(count<)
    //   setTimeout(() => { 
    //       let count=1;
        
    //     var el = document.createElement('div');
    //     el.className = 'marker';
     
      
    //     // make a marker for each feature and add to the map
    //     new mapboxgl.Marker(el)
    //       .setLngLat(testCor)
         
    //       .addTo(map);
    
    
    // }, 2000);



// this.getCordsFromServer()
if(this.props.location.data !== undefined)
{
if( this.props.location.data["sender"]==="driver" )
{

  this.updateBookingCords();

}else
{

  this.RequestToServer();
}
}
    
  

    
    
}

updateBookingCords=()=>{
  if(mounted)
  {
    this.getCordsFromServer();
  }
  

}

updateNotification=()=>{

let address,req_data;
  address="sendRideInvitation";
  let to,from;
  
  if(this.props.location.data["sender"]==="driver")
  {
    to=this.props.location.data["customerID"];
    from=driverID;

  }
  else
  {
    to=driverID;
    from=this.props.location.data["email"];
  }
    req_data={
  
         
         
          
    
   
    
      "company":"decideLater",
"rideId":rideID,

"body":"Ride has been Cancelled by "+this.props.location.data["sender"],

  
"type":"Ride cancel Notification",
"to":to,
"from":from,
"isActive":"Yes"

    }

    console.log("RED DATA UPDATE");
    console.log(req_data);

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
      this.updateHirePool();
      console.log("Finishing Booking Notification Updated")
      
     
    
    }else{
    
     this.updateNotification()
     console.log("Finishing Booking Notification Update Failed")
    
    }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
      this.updateNotification()
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
    console.log("Unexpected error Try again... RIDE CANCEL ");
    });
}

updateHirePool=()=>{
  let address,req_data;
    address="updateHirePoolStatus";
      req_data={
    
           
           
            
      
     
      
        "company":"decideLater",
        "driverId":driverID,
        "status":"active",
  
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
      
        mounted=false;
        window.alert("Booking finished ")
        console.log("Finishing Booking HirePool Updated")
        let sender="customer"
        let userData={};
        userData["name"]=this.props.location.data["name"]
       
        userData["email"]=this.props.location.data["email"]
        if(this.props.location.data["sender"]!=="customer")
        {
          sender="employee"
          userData["status"]=this.props.location.data["status"]
          userData["phone"]=this.props.location.data["phone"]
          userData["job_id"]=this.props.location.data["job_id"]
          userData["company"]=this.props.location.data["company"]
          userData["id"]=this.props.location.data["driverId"]
          
    
        }
        else
        {
          userData["id"]=this.props.location.data["email"]
        }
        let temp={
          "sender":sender,
          "userData":userData
           
          };
    
        history.push({
          pathname: '/home',
          data: temp,
        });
        
       
      
      }else{
      
        this.updateHirePool()
       
        console.log("Finishing Booking Hirepool Update Failed")
      
      }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      }).catch((error) => {
      
        this.updateHirePool()
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
      console.log("Unexpected error Try again... Update Hire Pool ");
      });
  }
  
 


checkBookingStatus=()=>{

  
     mounted=false;
    window.alert("Booking finished <checkBookingStatus>")
    let sender="customer"
    let userData={};
    userData["name"]=this.props.location.data["name"]
  
    userData["email"]=this.props.location.data["email"]
    if(this.props.location.data["sender"]!=="customer")
    {
      sender="employee"
      userData["status"]=this.props.location.data["status"]
      userData["phone"]=this.props.location.data["phone"]
      userData["job_id"]=this.props.location.data["job_id"]
      userData["company"]=this.props.location.data["company"]
      userData["id"]=this.props.location.data["driverId"]
      

    }
    else
    {
      userData["id"]=this.props.location.data["email"]
    }
    let temp={
      "sender":sender,
      "userData":userData
       
      };

    history.push({
      pathname: '/home',
      data: temp,
    });
    
  
 

  
  
 


}
finishBooking=(status)=>{
  mounted=false;

  let req_data;
  let address;
  address="finishBooking";
  if(this.props.location.data["sender"]==="driver")
  {
    rideID=this.props.location.data["rideId"]
  }
  req_data={

       
       
        
  
 "sender":this.props.location.data["sender"],
  
    "company":"decideLater",
    
    "ride_id":rideID,
    "status":status
    



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
this.updateNotification();

  console.log("Finishing Booking Booking Updated")
  
 

}else{
this.finishBooking(status);
 
  console.log(" Finishing Booking Booking Update Failed!")

}
// `data` is the parsed version of the JSON returned from the above endpoint.
console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
}).catch((error) => {

  this.finishBooking(status);
//   reqInProcess=reqInProcess+1;
// this.RequestToServer(reqInProcess);
console.log("Unexpected error Try again... RIDE CANCEL ");
});

}
RequestToServer=()=>{
  if(testCords.length>1)
  {
       if(this.props.location.data["dest"]===testCords[testCords.length-1])  
       {
         window.alert("Ride Completed");
       }
       else{
        console.log("current location"+testCords[testCords.length-1]);
        console.log("Destination"+this.props.location.data["dest"]);
       }

  }
  let req_data;
  let address;
  let d = new Date();
  if(reqInProcess<= 2)
  {
     
 
  if(reqInProcess==2)
  {
    address="sendRideInvitation";
    req_data={
  
         
         
          
    
   
    
      "company":"decideLater",
"rideId":rideID,
"from":this.props.location.data["email"],

"body":src+"-"+dest+"-"+
"Date"+"-"+"Time"+"-"+

dis*25,

  "to":"All Drivers",
"type":"Ride Invitation",
"isActive":"Yes"


    }
    
    
  } else
    if(reqInProcess==1)
  {
    
    let date=new Date();

      document.getElementById("fare").innerHTML="RS "+dis*25;
      requestLoadingMessage= <text> Finding Your Captain... </text>
    
      address="addBooking";
      req_data={

       "sender":"customer",
        "company":"decideLater",
        "date":date.getMonth()+1+"/"+date.getDay()+"/"+date.getFullYear(),
        "time":date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
        "ride_id":"1",
        "cust_id":this.props.location.data["email"],
        "to":dest.toString(),
        "from":src.toString(),
        "distance":dis,
        "fare":dis*25,
        "driverId":"nil",
        "vahicleId":"nil",
        "cords":"nil",
        "rating":"nil",
        "status":"searching"
          
    
   
    
   
  
  
  
  
  
  
        }
         
  
      }
   
      console.log("REQ BODY : "+req_data)
      const options={
          method:"POST",
          headers:{
              'Content-type':"application/json"
              
          },
          body:JSON.stringify(req_data)
      }
      this.setState({showModal:true})
      fetch("/"+address,options).then(response=>{
          return response.json();
    }).then(data=>{
        let status=data.status;
        console.log(status)
   
        if(status==='Success')
        {
        
          if(reqInProcess===1)
          {
            rideID=data.id;
          }
          console.log("Operation Sucessful" +reqInProcess)
          //history.push('/home');
          reqInProcess++;
          if(mounted)
          {
          this.RequestToServer();
          }
         // history.push("");
        }else{

         
          console.log("Operation Failed!")
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
      reqFailed=true;
      this.setState({showModal:true})
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
     console.log("Unexpected error Try again...  "+reqInProcess);
   });
  
  }
  else
  {
    if(mounted)
    {
    this.getCordsFromServer();
    }
      
      


  }
}
getModalBtnClick=type=>{
  this.setState({showModal:false})
  if(type===1)
  {

     reqFailed=false;
      this.RequestToServer();
  }
 

}


    render() {
        return (
            <div>
              <LoadiningModal getModalBtnClick={this.getModalBtnClick} reqFailed={reqFailed} displayText={requestLoadingMessage} showModal={this.state.showModal}></LoadiningModal>
    
            <div id="TransHistmapDiv" style={{    width: "90%",height: "300px", marginLeft: "2%",marginTop:"50px"}} ref={el => this.mapContainer = el} className="absolute top right left bottom" />
          
          
    
            <Card style={{ marginLeft: "15px"}} id="rideHistoryCard" >
                      <div>
              <div className="historytopdiv">
              
              <div>
                  <button  className ="dangerBtn" 
                  
                  
                 onClick={()=>{

this.finishBooking("cancel");

                 }}
                  
                    // make a marker for each feature and add to the map
                    
                  
                  >Cancel Ride</button>
                  
              </div>
                  <text className="date" >Ride Fare</text>
             
                  <text id="fare" className="moveToRight ">this.props.details.charges</text>
                  <hr></hr>
              
                  <img
                                          className="rideHistoryAddIcon"
                                          style={{marginLeft: '5px'}}
                                          src="/assets/images/credit.png"
                                          alt
                                        />
                  <text className="date rideDetailCard" >Credit Pay </text>
             
                  <text className="moveToRight rideDetailCard">RS 0.0</text>
                  <br></br>
                  <img
                                          className="rideHistoryAddIcon"
                                          style={{marginLeft: '5px'}}
                                          src="/assets/images/cash.png"
                                          alt
                                        />
                  <text className="date rideDetailCard" >Cash Pay</text>
             
                  <text className="moveToRight rideDetailCard">RS 0.0</text>
              
               </div>
               <hr></hr>
               <div className="historymiddlediv">
               <img
                                          className="rideHistoryAddIcon"
                                          id="userprofile"
                                          style={{marginLeft: '5px'}}
                                          src="/assets/images/userprofile.png"
                                          alt
                                        />

                   <text id="dname" style={{marginLeft:"37px"}} className="date rideDetailCard">this.props.details.driver_name</text>
        <text id="rating" style={{color:"blue"}} className="moveToRight rideDetailCard">rating</text>
                   <br></br>
                   <text id="phone" style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">Driver Phone</text>
                   <br></br>
                   <text id="VmakeModel" style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">this.props.details.vahicleMake this.props.details.model</text>
     <br></br>
              
                   <text id="Vnumber" style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">this.props.details.vahicle_number</text>
              
                
                  
              
               </div>
                     </div>
                     <hr></hr>
                     </Card>
         
    
    
         
    
          
    
    
          
      
          
          
          </div>
      
        )
    }
}
