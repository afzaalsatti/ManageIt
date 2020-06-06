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
   






map.on('click', function(e) {
   
     marker.setLngLat(e.lngLat.wrap())
      .addTo(map);
test(e.lngLat.wrap());

  });

    


 

    


    
  }

    
  render() {
    const { lng, lat, zoom } = this.state;
    
   
    return (
        
        
          
       
        <div id="TransHistmapDiv" style={{    width: "100%",height: "100%", marginLeft: "2%"}} ref={el => this.mapContainer = el}  />
      
       
      
    
      

      

     

      


      
  
      
      
     
    );
  }
}


