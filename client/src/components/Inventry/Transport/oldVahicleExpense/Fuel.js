import React, { Component } from 'react'

export default class Fuel extends Component {
    render() {
        return (
            <div style={{background:"lightgray"}}>
              

            


           
            <h5 style={{background:"gray"}}>Expense Details</h5>
            <div  style={{width:'48%',margin:"auto"}} className="form-group">
              <text htmlFor="inputName">Fuel in liters</text>
              <input  style={{margin:"0px"}} placeholder="Enter Quantity of Fuel(in liters) " type="text" id="fuel_quan" className="form-control" />
            </div>
            <div style={{display: "flex",
    width: "65%",
    margin: "auto"}}>

<div  style={{width:'48%',marginRight:"10px"}} className="form-group">
<text htmlFor="inputName" >Amount </text>
<input  style={{margin:"0px"}}placeholder="Enter Expense Amount"  type="text" id="amount" className="form-control" />
   
</div>
<div  style={{width:'48%'}} className="form-group">
<text htmlFor="inputName" >Status</text>
<select id="status" className="form-control">
  <option value="paid">Paid</option>
  <option value="pending">Pending</option>

</select>
</div>
</div>
 
           
            
            
           
            

          
         </div>
   
        )
    }
}
