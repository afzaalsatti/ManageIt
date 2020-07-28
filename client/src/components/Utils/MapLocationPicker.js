import React, { Component } from 'react'

import mapboxgl  from 'mapbox-gl';
// import '../customerComponents/TransportationHistory/TransHistDetails.css'
import MapboxGeocoder from "mapbox-gl-geocoder";
import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Card } from 'react-bootstrap'
import './maplocator.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmFsZXgyIiwiYSI6ImNqemNudGs4cDAyaGYzY3FiamVtd2h4ZmQifQ.YYt71bcR3ZdD6UgIs6EQog';

var  map;
var marker;

var rating = "";
var test;
export default class MapLocationPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
      lng: 73.222,
      lat: 33.333,
      zoom: 8,
      showModal:this.props.showModal
    };
    test=this.props.setCords;
  }

 
  componentDidMount() {
    const { lng, lat, zoom } = this.state;

     map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [73.222,33.333],
      zoom:8
    });
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
   marker= new mapboxgl.Marker(el);
    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
      });
    map.addControl(
        geocoder
        );
   



map.on("load", ()=> {
 this.getAllVehicleLocation()
})


map.on('click', function(e) {
   
     marker.setLngLat(e.lngLat.wrap())
      .addTo(map);
test(e.lngLat.wrap());

  });

    


 

    


    
  }

    getAllVehicleLocation=()=>{

      let address="getAllVehicleLocation";
      let req_data={
    
         
         
          
    
    
    
        
    
    
    
    
    
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
    
    
      if(status==='Success')
      {
        
        let locations=data.result;
        
        let i=0;
      
        locations.forEach(function(marker) {
       
          
              // create a HTML element for each feature
              var el = document.createElement('div');
              el.className = 'tracking_marker';
              
          
            let location=locations[i].location.split(",")
              // make a marker for each feature and add to the map
                   new mapboxgl.Marker(el) 
                .setLngLat(location)
                .addTo(map);
  
                i=i+1;
            });
     
       
      }else{
    
       
       
       
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    }).catch((error) => {
    
    
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
 
    });
    

    }
  render() {
    const { lng, lat, zoom } = this.state;
    
   
    return (
        
        <div>
          
       
        <div id="TransHistmapDiv" style={{    width: "100%",height: "100%", marginLeft: "2%"}} ref={el => this.mapContainer = el}  />
      
       </div>
      
    
      

      

     

      


      
  
      
      
     
    );
  }
}


