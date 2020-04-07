import React, { Component } from 'react'
import './BookSeat.css';
var bookings=[]
export default class BookSeat extends Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'L1','L2','L3',
          'L4','L5','L6',
          'L7','L8','L9',
          'L10','L11','L12','L13'
          ,'L14','L15',

          'R1','R2','R3',
          'R4','R5','R6',
          'R7','R8','R9',
          'R10','R11','R12'
          ,'R13','R14','R15'
          
        ],
        seatAvailable: [
         
        ],
        seatReserved: []
      }
    }
    componentDidMount()
    {

let list1='L1,L2,L3,L4,R1,R2,R3,R4,R5,R6';
var ar = list1.split(','); // split string on comma space

let list2='L10,L12,L13,L14,R11,R12,R13,R14,R15,R16';
var ar1 = list2.split(','); // split string on comma space
this.setState({
  seatAvailable:ar,
  seatReserved:ar1
 
})






    }
    onClickData(seat) {
    
      if(this.state.seatReserved.indexOf(seat) > -1 ) {

        if(bookings.indexOf(seat)>-1)
        {
         bookings= bookings.filter(res => res != seat)
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      }
      else{
        window.alert("Not allowed")
      }
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
        bookings.push(seat)
        
      }
    }
    
    render() {
      return (
        <div>
          
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />

            <button style={{visibility:"hidden"}} onClick={this.props.BookSeatListener(bookings,this.state.seatAvailable,this.state.seatReserved)}>Confirm & Proceed</button>
        </div>
      )
    }
  }
  
 
  class DrawGrid extends React.Component {

    constructor()
    {
      super();
      this.filterSeats=this.filterSeats.bind(this);
    }
     filterSeats( row,side)
    {
      let bool=false;
   if (side==1)
    {
      bool=row.substring(0,1)=='L';
    }else{
      bool=row.substring(0,1)=='R';
    }
     
     if( bool)
     
     {
    
       return  <div
              
        className="seat"
           key={row} onClick = {e => this.onClickSeat(row)}>
            
             <img  className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available' }src='/assets/images/seatbelt.png'></img>
             
           

           
           
           
           </div>}
           else
           {
            return 
           }
           
      
    }
    render() {
      return (
         <div className="bookseat-container">
          
          <div className="grid">
            
                  { this.props.seat.map( row =>
                      this.filterSeats(row,1)
                   
                      ) }


                </div>
            
                <div className="grid">
            
            { this.props.seat.map( row =>
            
                this.filterSeats(row,2)
                
              
             
             
                ) }


          </div>
          <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } />
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res} , </li> )}
            
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="left">
          <h4>Reserved Seats: ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res} , </li>) }
          </ul>
        </div>
      )
    }
  }
  
  
  