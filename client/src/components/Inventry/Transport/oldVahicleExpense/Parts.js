import React, { Component } from 'react'

export default class Parts extends Component {
    render() {
        return (
            <div style={{background:"lightgray"}}>
              

            <h5 style={{background:"gray"}}>Vendor Information</h5>
            <div style={{display: "flex",
    width: "65%",
    margin: "auto"}}>

<div  style={{width:'48%',marginRight:"10px"}} className="form-group">
<text htmlFor="inputName" >Vendor Name </text>
<input  style={{margin:"0px"}}placeholder="Enter Vendor Name"  type="text" id="ven_name" className="form-control" />
   
</div>
<div  style={{width:'48%'}} className="form-group">
<text htmlFor="inputName" >Vendor Address</text>
<input  style={{margin:"0px"}}placeholder="Enter Vendor Address"  type="text" id="ven_add" className="form-control" />
</div>
</div>
 
             


            <h5 style={{background:"gray"}}>Parts Information</h5>
            <div style={{display: "flex",
    width: "65%",
    margin: "auto"}}>

<div  style={{width:'48%',marginRight:"10px"}} className="form-group">
<text htmlFor="inputName" >Part ID </text>
<input  style={{margin:"0px"}}placeholder="Enter Part ID"  type="text" id="part_id" className="form-control" />
   
</div>
<div  style={{width:'48%'}} className="form-group">
<text htmlFor="inputName" >Part Name</text>
<input  style={{margin:"0px"}}placeholder="Enter Part Name"  type="text" id="part_name" className="form-control" />
</div>
</div>

            <h5 style={{background:"gray"}}>Expense Details</h5>
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
