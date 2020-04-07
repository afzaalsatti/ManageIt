import React, { Component } from 'react'

export default class maintinace extends Component {
    render() {
        return (
            <div>
              

               <h5>Workshop Information</h5>

 <text >Workshop Name</text>
               <input></input>
               <text >Workshop Address</text>
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
