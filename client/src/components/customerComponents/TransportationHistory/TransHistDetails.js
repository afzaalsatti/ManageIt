import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl';
import './TransHistDetails.css'
import * as turf from '@turf/turf'
import { Card } from 'react-bootstrap'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmFsZXgyIiwiYSI6ImNqemNudGs4cDAyaGYzY3FiamVtd2h4ZmQifQ.YYt71bcR3ZdD6UgIs6EQog';

var  map;
var rating = "";
export default class TransHistDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
        pickupCords:this.props.pickupCords,
        dropoffCords:this.props.dropoffCords,
      lng: this.props.pickupCords[0],
      lat: this.props.pickupCords[1],
      zoom: 8
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

     map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.state.pickupCords,
      zoom:8
    });
//   

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
        color: 'red',
        size: 'large',
        symbol: 'rocket',

        description: 'Pick Up'
      }
      
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: this.state.dropoffCords
      },
      properties: {
        title: 'Mapbox',
        description: 'Drop Off'
      }
    }]
  };

  markerjson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
      
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });




var origin = this.state.pickupCords;
 

var destination =this.state.dropoffCords;
 
// A simple line from origin to destination.
var route = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'LineString',
'coordinates': [origin, destination]
}
}
]
};
 
// A single point that animates along the route.
// Coordinates are initially set to origin.
var point = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {},
'geometry': {
'type': 'Point',
'coordinates': origin
}
}
]
};
 
// Calculate the distance in kilometers between route start/end point.
var lineDistance = turf.length(route.features[0], {units: 'kilometers'});
 
var arc = [];
 
// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var steps = 500;
 
// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistance; i += lineDistance / steps) {
var segment = turf.along(route.features[0], i, {units: 'kilometers'});
arc.push(segment.geometry.coordinates);
}
 
// Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = arc;
 
// Used to increment the value of the point measurement against the route.
var counter = 0;


map.on('load', function() {
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
    'type': 'geojson',
    'data': route
    });
     
    map.addSource('point', {
    'type': 'geojson',
    'data': point
    });
     
    map.addLayer({
    'id': 'route',
    'source': 'route',
    'type': 'line',
    'paint': {
    'line-width': 2,
    'line-color': '#007cbf'
    }
    });
     
    map.addLayer({
    'id': 'point',
    'source': 'point',
    'type': 'symbol',
    'layout': {
    'icon-image': 'airport-15',
    'icon-rotate': ['get', 'bearing'],
    'icon-rotation-alignment': 'map',
    'icon-allow-overlap': true,
    'icon-ignore-placement': true
    }
    });
     
    function animate() {
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc.
    point.features[0].geometry.coordinates =
    route.features[0].geometry.coordinates[counter];
     
    // Calculate the bearing to ensure the icon is rotated to match the route arc
    // The bearing is calculate between the current point and the next point, except
    // at the end of the arc use the previous point and the current point
    try{
        point.features[0].properties.bearing = turf.bearing(
            turf.point(
            route.features[0].geometry.coordinates[
            counter >= steps ? counter - 1 : counter
            ]
            ),
            turf.point(
            route.features[0].geometry.coordinates[
            counter >= steps ? counter : counter + 1
            ]
            ) );
    }
    catch(e)
    {

    }
   
     
    // Update the source with this new data.
    map.getSource('point').setData(point);
     
    // Request the next frame of animation so long the end has not been reached.
    if (counter < steps) {
    requestAnimationFrame(animate);
    }
     
    counter = counter + 1;
    }
     
    // document.getElementById('replay').addEventListener('click', function() {
    
    // // Set the coordinates of the original point back to origin
    // point.features[0].geometry.coordinates = origin;
     
    // // Update the source layer
    // map.getSource('point').setData(point);
     
    // // Reset the counter
    // counter = 0;
     
    // // Restart the animation.
    // animate(counter);
    // });
     
    // Start the animation.
    animate(counter);
    });

    
//     var geojson = {
//         'type': 'FeatureCollection',
//         'features': [
//         {
//         'type': 'Feature',
//         'geometry': {
//         'type': 'LineString',
//         'coordinates': [[0, 0]]
//         }
//         }
//         ]
//         };
//         var speedFactor = 30; // number of frames per longitude degree
// var animation; // to store and cancel the animation
// var startTime = 0;
// var progress = 0; // progress = timestamp - startTime
// var resetTime = false; // indicator of whether time reset is needed for the animation

//     map.on('load', function() {
//         map.addSource('line', {
//         'type': 'geojson',
//         'data': geojson
//         });

//         map.addLayer({
//             'id': 'line-animation',
//             'type': 'line',
//             'source': 'line',
//             'layout': {
//             'line-cap': 'round',
//             'line-join': 'round'
//             },
//             'paint': {
//             'line-color': '#ed6498',
//             'line-width': 5,
//             'line-opacity': 0.8
//             }
//             });

//             startTime = performance.now();
 
//             animateLine();
             
//             // click the button to pause or play
//             // pauseButton.addEventListener('click', function() {
//             // pauseButton.classList.toggle('pause');
//             // if (pauseButton.classList.contains('pause')) {
//             // cancelAnimationFrame(animation);
//             // } else {
//             // resetTime = true;
//             // animateLine();
//             // }
//             // });
             
//             // reset startTime and progress once the tab loses or gains focus
//             // requestAnimationFrame also pauses on hidden tabs by default
//             document.addEventListener('visibilitychange', function() {
//             resetTime = true;
//             });
             
//             // animated in a circle as a sine wave along the map.
//             function animateLine(timestamp) {
//             if (resetTime) {
//             // resume previous progress
//             startTime = performance.now() - progress;
//             resetTime = false;
//             } else {
//             progress = timestamp - startTime;
//             }
             
//             // restart if it finishes a loop
//             if (progress > speedFactor * 360) {
//             startTime = timestamp;
//             geojson.features[0].geometry.coordinates = [];
//             } else {
//             var x = progress / speedFactor;
//             // draw a sine wave with some math.
//             var y = Math.sin((x * Math.PI) / 90) * 40;
//             // append new coordinates to the lineString
//             geojson.features[0].geometry.coordinates.push([x, y]);
//             // then update the map
//             map.getSource('line').setData(geojson);
//             }
//             // Request the next frame of the animation.
//             animation = requestAnimationFrame(animateLine);
//             }
//             });
     map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });


 

    


    
  }

  render() {
    const { lng, lat, zoom } = this.state;
    if(rating==="")
    { for(var i=0;i<this.props.details.rating;i++)
      {
       rating=rating+"★";
       
     }}
   
    return (
      <div>
        <div  className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div id="TransHistmapDiv" style={{    width: "90%",height: "300px", marginLeft: "2%"}} ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      
      

        <Card style={{ marginLeft: "15px"}} id="rideHistoryCard" >
                  <div>
          <div className="historytopdiv">
          
              <text className="date" >Ride Fare</text>
         
              <text className="charges ">{this.props.details.charges}</text>
              <hr></hr>
          
              <img
                                      className="rideHistoryAddIcon"
                                      style={{marginLeft: '5px'}}
                                      src="/assets/images/credit.png"
                                      alt
                                    />
              <text className="date rideDetailCard" >Credit Pay </text>
         
              <text className="charges rideDetailCard">{this.props.details.credit}</text>
              <br></br>
              <img
                                      className="rideHistoryAddIcon"
                                      style={{marginLeft: '5px'}}
                                      src="/assets/images/cash.png"
                                      alt
                                    />
              <text className="date rideDetailCard" >Cash Pay</text>
         
              <text className="charges rideDetailCard">{this.props.details.cash}</text>
          
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
               <text style={{marginLeft:"37px"}} className="date rideDetailCard">{this.props.details.driver_name}</text>
    <text style={{color:"blue"}} className="charges rideDetailCard">{rating}</text>
               <br></br>
               <text style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">{this.props.details.vahicleMake}{this.props.details.model}</text>
 <br></br>
          
               <text style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">{this.props.details.vahicle_number}</text>
          
            
              
          
           </div>
                 </div>
                 <hr></hr>
                 </Card>
     


     

      


      
  
      
      
      </div>
    );
  }
}


