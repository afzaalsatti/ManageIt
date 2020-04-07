import React, { Component } from 'react'

export default class Parts extends Component {
    render() {
        return (
            <div>
              

            <h5>Vendor Information</h5>

<text >Vendor Name</text>
            <input></input>
            <text >Vendor Address</text>
            <input></input>

            <h5>Parts Information</h5>

<text >Part ID</text>
            <input></input>
            <text >Part Name</text>
            <input></input>
           
            <h5>Expense Details</h5>
            <text >Amount</text>
            <input></input>
            
            <text for="paid">Status</text>

<select id="status">
<option value="paid">Paid</option>
<option value="pending">Pending</option>

</select>
           
            
            
           
            

          
         </div>
   
        )
    }
}
