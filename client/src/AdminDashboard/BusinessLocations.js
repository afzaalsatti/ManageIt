import React, { Component } from 'react'
import mapboxgl  from 'mapbox-gl';
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmFsZXgyIiwiYSI6ImNqemNudGs4cDAyaGYzY3FiamVtd2h4ZmQifQ.YYt71bcR3ZdD6UgIs6EQog';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  var companyInfo;
  var  map;
 class BusinessLocations extends Component {
    constructor(props) {
        super(props);
        companyInfo=JSON.parse(localStorage.getItem("companyInfo"));
        this.getCompanyBranches()
        this.state = {
          stores:this.props.stores,
          locations:[],
          lng: "73.0479",
          lat: "33.6844",
          zoom: 8,
        }
      }
      componentDidUpdate()
      {
        let locations=this.state.locations;
       
      let i=0;
      
        locations.forEach(function(marker) {
       
          
              // create a HTML element for each feature
              var el = document.createElement('div');
              el.className = 'marker';
              
          
            let location=locations[i].location.split(",")
              // make a marker for each feature and add to the map
               let popup = new mapboxgl.Popup({offset: 25})
      .setText("Branch Name : "+ locations[i].name +"\n                  "+"Branch Email : "+ locations[i].email);
              new mapboxgl.Marker(el) 
                .setLngLat(location)
                .setPopup(popup)
                .addTo(map);
  
                i=i+1;
            });
      }
      componentDidMount() {
        const { lng, lat, zoom } = this.state;
    
         map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [this.state.lng,this.state.lat],
       
          zoom:5
        });
     
    
    
    
    
    
    
   
    map.on('click', function(e) {
      
     console.log(e.lngLat.wrap())
      });
   
    
        
    
         map.on('move', () => {
          const { lng, lat } = map.getCenter();
    
          this.setState({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
          });
        });
    
    
     
    
        
    
    
        
      }
      getCompanyBranches=()=>{
        let address="getAllBranchesLocation";
             
        let req_data={
          "parent":companyInfo["parent"]
        }
       const options={
         method:"POST",
         headers:{
             'Content-type':"application/json"
             
         },
         body:JSON.stringify(req_data)
      }
      
      console.log(address)
      fetch("/"+address,options).then(response=>{
         return response.json();
      }).then(data=>{
       let status=data.status;
      
      
       if(status==='Success')
       {

        console.log(data.result)
         this.setState({
          locations:data.result
         })
       
      
      
        
      
      //this.prepareDataToDisplay();
        
      
        
       }
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      }).catch((error) => {
      
      
      //   reqInProcess=reqInProcess+1;
      // this.RequestToServer(reqInProcess);
      //this.notifyError("Unexpected error Try again...  ");
      });
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
              
        <div id="BranchLocationmapDiv" style={{ width: "90%",height: "500px", margin:"50px"}} ref={el => this.mapContainer = el} />
      
                {/* <Map
        google={this.props.google}
        zoom={5.8}
        style={mapStyles}
        initialCenter={{ lat: 30.3753, lng: 69.3451}}
       
      >
          {this.displayMarkers()}
      </Map>
             */}

</div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ''
  })(BusinessLocations);