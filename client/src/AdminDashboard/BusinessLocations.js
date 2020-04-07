import React, { Component } from 'react'
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
 class BusinessLocations extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores:this.props.stores
        }
      }
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
    render() {
        return (
            <div>
                <Map
        google={this.props.google}
        zoom={5.8}
        style={mapStyles}
        initialCenter={{ lat: 30.3753, lng: 69.3451}}
       
      >
          {this.displayMarkers()}
      </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAAjGjQ7hOR7394Peup9wR2l4zFHLCmqJE'
  })(BusinessLocations);