import React, { Component } from 'react'
import mapboxgl  from 'mapbox-gl';
import { Card } from 'react-bootstrap'
import './css/tracking.css'
import LoadiningModal  from '../Utils/LodingModal'
import { id } from 'date-fns/locale';

var myLocation;

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

 }
 else
 {
  testCords=data.cords;
  driverID=data.driverId;
 
 if(testCords.length>1)
 {
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
   
   
      this.getCordsFromServer();
    

     
  
  
  }, 2000);

  


         
        }else{
         
          window.alert("Erroe in fetch driver Location!")
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
     
     window.alert("Unexpected error Try again...");
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
  this.getCordsFromServer();

}
updateNotification=()=>{
let address,req_data;
  address="sendRideInvitation";
    req_data={
  
         
         
          
    
   
    
      "company":"decideLater",
"rideId":rideID,

"body":"Ride has been Cancelled by "+this.props.location.data["sender"],

  
"type":"Ride cancel Notification",
"to":driverID,
"isActive":"Yes"
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
    
      console.log("Operation Sucessful" +reqInProcess)
      
     
    
    }else{
    
     
      window.alert("Operation Failed!")
    
    }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
    
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
    window.alert("Unexpected error Try again...  ");
    });
}
cancelBooking=()=>{
  let req_data;
  let address;
  address="cancelBooking";
  req_data={

       
       
        
  
 "sender":this.props.location.data["sender"],
  
    "company":"decideLater",
    
    "ride_id":rideID,
    



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
  console.log("Operation Sucessful" +reqInProcess)
  
 

}else{

 
  window.alert("Operation Failed!")

}
// `data` is the parsed version of the JSON returned from the above endpoint.
console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
}).catch((error) => {

//   reqInProcess=reqInProcess+1;
// this.RequestToServer(reqInProcess);
window.alert("Unexpected error Try again...  ");
});

}
RequestToServer=()=>{
        
         
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

"body":src+"-"+dest+"-"+
"Date"+"-"+"Time"+"-"+

dis*25,

  
"type":"Ride Invitation",
"isActive":"Yes"


    }
    
  } else
    if(reqInProcess==1)
  {
      requestLoadingMessage= <text> Finding Your Captain... </text>
    
      address="addBooking";
      req_data={

       "sender":"customer",
        "company":"decideLater",
        "ride_id":"1",
        "cust_id":this.props.location.data["cust_id"],
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
          this.RequestToServer();
         // history.push("");
        }else{

         
          window.alert("Operation Failed!")
        }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
      reqFailed=true;
      this.setState({showModal:true})
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
     window.alert("Unexpected error Try again...  "+reqInProcess);
   });
  
  }
  else
  {
    this.getCordsFromServer();
      
      this.setState({showModal:false});
      


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

this.cancelBooking();

                 }}
                  
                    // make a marker for each feature and add to the map
                    
                  
                  >Cancel Ride</button>
                  
              </div>
                  <text className="date" >Ride Fare</text>
             
                  <text className="moveToRight ">this.props.details.charges</text>
                  <hr></hr>
              
                  <img
                                          className="rideHistoryAddIcon"
                                          style={{marginLeft: '5px'}}
                                          src="/assets/images/credit.png"
                                          alt
                                        />
                  <text className="date rideDetailCard" >Credit Pay </text>
             
                  <text className="moveToRight rideDetailCard">this.props.details.credit</text>
                  <br></br>
                  <img
                                          className="rideHistoryAddIcon"
                                          style={{marginLeft: '5px'}}
                                          src="/assets/images/cash.png"
                                          alt
                                        />
                  <text className="date rideDetailCard" >Cash Pay</text>
             
                  <text className="moveToRight rideDetailCard">this.props.details.cash</text>
              
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
                   <text style={{marginLeft:"37px"}} className="date rideDetailCard">this.props.details.driver_name</text>
        <text style={{color:"blue"}} className="moveToRight rideDetailCard">rating</text>
                   <br></br>
                   <text style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">this.props.details.vahicleMake this.props.details.model</text>
     <br></br>
              
                   <text style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">this.props.details.vahicle_number</text>
              
                
                  
              
               </div>
                     </div>
                     <hr></hr>
                     </Card>
         
    
    
         
    
          
    
    
          
      
          
          
          </div>
      
        )
    }
}
