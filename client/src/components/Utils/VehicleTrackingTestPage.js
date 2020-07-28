import React, { Component } from 'react'
import mapboxgl  from 'mapbox-gl';
import { Card } from 'react-bootstrap'
import './css/tracking.css'
import LoadiningModal  from '../Utils/LodingModal'
import history from '../../history'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
var src,dest,fare,dis,to_loc,from_loc;
var rideID="";
var driverID="";
var company="";
var testCords=[];
var index=0;
var testData=[
    "73.08765500335615,33.706934847656456",
"73.08768853096883,33.70688018091882",
"73.08774686901491,33.70683555498475",
"73.08775960950773,33.706812126360106",
"73.08777704386632,33.706775309937",
"73.08776229171674,33.70675634389469",
"73.08768786041658,33.70672733699837",
" 73.08761141745966,33.70668828923783",
"73.08756984321992,33.706664860573014",
"73.08751888124864,33.70663362234329",
"73.08746255485933,33.7066157719212",
"73.08740622847002,33.70657895541394",
"73.08735660760324,33.706544370195765",
"73.08726407139223,33.706504206699115",
"73.0871876284353,33.706468505797446",
"73.08708972780626,33.70641495441712",
"73.08699853269975,33.70637032824135",
"73.08683894126337,33.706276613196714",
"73.08674506394784,33.706237565231305",
"73.08676652161996,33.706213020786784",
"73.08678932039659,33.706175088449676",
"73.08680407254617,33.70615723793229",
"73.08681346027772,33.70612042122848",
"73.08661900012414,33.70602224327451",
"73.08643929212015,33.70591737124513",
"73.08631725160997,33.705849315923544",
"73.08622605650346,33.7058069207779",
"73.08616771845739,33.705760062961005",
"73.08605439512651,33.705706511138935",
"73.08600410370748,33.70568196654271",
"73.08591315429842,33.705636224321886",
"73.08580452483332,33.70558601941733",
"73.08573746960795,33.70554250847629",
"73.08561408799326,33.70548003118911",
"73.08554166834986,33.70545660219468",
"73.08541158121264,33.70539635617971,",
"33.70522454323824,73.08507898729479",
"73.08435948472655,33.70484075204978",
"73.0838646171633,33.70458079948581",
"73.08325837024208,33.70424152847424",
"73.08288286097999,33.70409425827976",
"73.08272997506614,33.704370947527615",
"73.08247248300071,33.70470565107178",
"73.08223913081642,33.704973412968066",
"73.08210502036567,33.70525456206083",
"73.08172146447654,33.7056517393696,",
"73.08199504979606,33.705763305698966",
"73.08242420323845,33.70602660166171",
"73.08276216157432,33.70618279380056 ",

]


export default class VehicleTrackingTestPage extends Component {

    constructor(props) {
        super(props);
       
         src=[73.08681346027772,33.70612042122848]
 dest=[73.08276216157432,33.70618279380056]
        this.state = {
            pickupCords:src,
            dropoffCords:dest ,
        //   lng: this.props.pickupCords[0],
        //   lat: this.props.pickupCords[1],
          zoom: 5, showModal:false
        };

 


      }
      notifySuccess=(message)=>  {
      
      

        toast.success(message,  {containerId: 'A'});
      
        
      };
      
       notifyWarning=(message)=>  {
            
            
      
        toast.warning(message,  {containerId: 'A'});
      
        
      };
       notifyError=(message)=>  {
            
           
      
        toast.error(message,  {containerId: 'A'});
      
        
      };
      getCustomerDetails=(id)=>
      {
      
      
      
        document.getElementById("dname").innerHTML="Afzaal Shoukat";
            
              document.getElementById("phone").innerHTML="03155855616";
      }
      getDriverDetails=(id,company)=>
      {
      
      
      
         
      }

      getVahicleDetails=()=>
{


   

document.getElementById("VmakeModel").innerHTML="White"+" "+"Honda"+" "+"Civic"+" "+"2019";
      
document.getElementById("Vnumber").innerHTML="ICT 2136";

}

      getCordsFromServer=()=>{
if(index<testData.length){
        let element=testData[index]
            let myLocation=element.split(",")
            setTimeout(() => { 
if(index==22)
{
    window.alert("Reached at pickup location")
}
                console.log("")
                marker.setLngLat([parseFloat(myLocation[0]),parseFloat(myLocation[1])])
                  
                .addTo(map);
              
                map.flyTo({
                  center:[parseFloat(myLocation[0]),parseFloat(myLocation[1])] ,
                  essential: true // this animation is considered essential with respect to prefers-reduced-motion
                  });
              
                 
               
              
                 
              
           
              index=index+1;
              this.getCordsFromServer()
                   
                
                
                }, 2000);
       
       
            }
            else
            {
                window.alert("Ride completed")
                history.push("/home")
            }
      
       
        
      }



      showTracking=()=>{
        
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


        
          let src,dest;
          
          src=[73.08681346027772,33.70612042122848]
          dest=[73.08276216157432,33.70618279380056]
          
         
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
        

       
     
     let veh_src=testData[0].split(",");
     

            markerjson.features.forEach(function(mark) {
    
                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'tracking_marker';
             
                marker= new mapboxgl.Marker(el);
                // make a marker for each feature and add to the map
                marker
                  .setLngLat([parseFloat(veh_src[0]),parseFloat(veh_src[1])])
                 
                  .addTo(map);
              });
   

              

this.getCordsFromServer()



    
  

    
    
}


finishBooking=(status)=>{
  

}




    render() {
        return (
            <div>
               <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_RIGHT} />
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
             
                  <text id="fare" className="moveToRight ">RS 200</text>
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
             
                  <text className="moveToRight rideDetailCard">RS 200.0</text>
              
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

                   <text id="dname" style={{marginLeft:"37px"}} className="date rideDetailCard">"Afzaal Shoukat"</text>
        <text id="rating" style={{color:"blue"}} className="moveToRight rideDetailCard">5</text>
                   <br></br>
                   <text id="phone" style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">03155855616</text>
                   <br></br>
                   <text id="VmakeModel" style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">Honda civic</text>
     <br></br>
              
                   <text id="Vnumber" style={{marginLeft:"30px", fontSize:"13px"}} className="date rideDetailCard">ICT 1234</text>
              
                
                  
              
               </div>
                     </div>
                     <hr></hr>
                     </Card>
         
    
    
         
    
          
    
    
          
      
          
          
          </div>
      
        )
    }
}
