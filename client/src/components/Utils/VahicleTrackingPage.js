import React, { Component } from 'react'
import mapboxgl  from 'mapbox-gl';
import { Card } from 'react-bootstrap'
import './css/tracking.css'
import LoadiningModal  from '../Utils/LodingModal'
import { id } from 'date-fns/locale';


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmFsZXgyIiwiYSI6ImNqemNudGs4cDAyaGYzY3FiamVtd2h4ZmQifQ.YYt71bcR3ZdD6UgIs6EQog';
var  map;
var testVar=0;
var marker;
var reqInProcess=1;
var requestLoadingMessage="";
var reqFailed=false;
var testCords=[
     

    [ "73.01920605585065","33.658527514640355"],
    ["73.0184764949986", "33.65849179380938"],
    ["73.01757527276959", "33.658313189431944"],
    ["73.01628781244244", "33.658027421656975"],
    ["73.0127687542149", "33.65734871938782"],
    ["73.01173878595318", "33.655686266763944"],
    ["73.01126671716656", "33.65515043505014"],
    ["73.0109663097569", "33.654686044866125"],
    ["73.01066590234723", "33.65515043505014"],
    ["73.00903511926617", "33.65565054475346"],
    ["73.00791932031598", "33.65761523330819"],
    ["73.00611099275133", "33.65943699534039"],
    ["73.00546726258776", "33.66144221373574"],
    ["73.00392231019518", "33.662299480189816"],
    ["72.99868663819811", "33.661263615482646"],
    ["72.99175581010363", "33.65862031799072"],
    ["72.98697074922106", "33.65508388760189"],

    ["72.97811051731765", "33.65258329355696"],
    ["72.97158738499343", "33.64791233923181"],
    [" 72.9568674219197", "33.644875641146605"],
    [" 72.9508674219197", "33.63794442311159"],
    ["72.94201871281325", "33.63254911983691"],


    

]
export default class VahicleTrackingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickupCords:testCords[0],
            dropoffCords:["73.444","31.22"] ,
        //   lng: this.props.pickupCords[0],
        //   lat: this.props.pickupCords[1],
          zoom: 5, showModal:false
        };


        
      }

      testMethod=()=>{

       
        const data={
   
            "email":"afzaalsatti74@gmail.com",
            "password":"123"
          }
           
            const options={
                method:"POST",
                headers:{
                    'Content-type':"application/json"
                    
                },
                body:JSON.stringify(data)
            }
            fetch("/signin",options).then(response=>{
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
       
       
       marker.setLngLat(testCords[testVar])
         
          .addTo(map);

          map.flyTo({
            center:testCords[testVar] ,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
          testVar++;
         
          if(testVar<testCords.length)
          {
            this.testMethod();
          }

           
        
        
        }, 2000);
    
        
    
    
               
              }else{
               
                window.alert("Invalid Credentials!")
              }
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
          }).catch((error) => {
           
           window.alert("Unexpected error Try again...");
         });
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
      map.on('load', function() {
        map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
            [ "73.01920605585065","33.658527514640355"],


    ["73.0184764949986", "33.65849179380938"],
    ["73.01757527276959", "33.658313189431944"],
    ["73.01628781244244", "33.658027421656975"],
    ["73.0127687542149", "33.65734871938782"],
    ["73.01173878595318", "33.655686266763944"],
    ["73.01126671716656", "33.65515043505014"],
    ["73.0109663097569", "33.654686044866125"],
    ["73.01066590234723", "33.65515043505014"],
    ["73.00903511926617", "33.65565054475346"],
    ["73.00791932031598", "33.65761523330819"],
    ["73.00611099275133", "33.65943699534039"],
    ["73.00546726258776", "33.66144221373574"],
    ["73.00392231019518", "33.662299480189816"],
    ["72.99868663819811", "33.661263615482646"],
    ["72.99175581010363", "33.65862031799072"],
    ["72.98697074922106", "33.65508388760189"],

    ["72.97811051731765", "33.65258329355696"],
    ["72.97158738499343", "33.64791233923181"],
    [" 72.9568674219197", "33.644875641146605"],
    [" 72.9508674219197", "33.63794442311159"],
    ["72.94201871281325", "33.63254911983691"],
    
        ]
        }
        }
        });
        map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#888',
        'line-width': 8
        }
        });
        });


        if(this.props.location.data !== undefined)
        {
          let src=this.props.location.data["src"];
          let dest=this.props.location.data["dest"];
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
          .setLngLat(testCords[0])
         
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



this.testMethod()
    
  

    
    
}
RequestToServer=()=>{
        
         
  let req_data;
  let address;
  let d = new Date();
  if(reqInProcess<= 3)
  {
     
 
  if(reqInProcess==1)
  {
    address="sendRideInvitation";
    req_data={

       
      "company":"decideLater",
      "ride_id":id,
      "cust_id":"Customer101",
      "to":this.props.location.data["dest"],
      "from":this.props.location.data["src"],
      "distance":this.props.location.data[2],
      "fare":this.props.location.data[2]*25,
      "driverId":"nil",
      "vahicleId":"nil",
      "cords":"nil",
      "rating":"nil",
      "status":"searching"
        
  
 
  
 






      }
  } else
    if(reqInProcess==3)
  {
      requestLoadingMessage= <text> Finding Your Captain... </text>
    
      address="sendRideInvitation";
      req_data={
  
         
         
          
    
   
    
          "company":"decideLater",
"rideId":"Ride ID",

"to":this.props.location.data["dest"],
      "from":this.props.location.data["src"],
      
      "fare":this.props.location.data[2]*25,
"type":"Ride Invitation"



        }
         
  
      }
   
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
