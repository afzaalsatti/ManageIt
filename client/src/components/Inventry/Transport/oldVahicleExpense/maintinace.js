import React, { Component } from 'react'

export default class maintinace extends Component {
    render() {
        return (
            <div style={{background:"lightgray"}}>
                  <h5 style={{background:"gray"}}>Info About Vahicle</h5>
               <div  style={{width:'48%',margin:"auto"}} className="form-group">
              <text htmlFor="inputName">Vahicle Number</text>
              <input  style={{margin:"0px"}} placeholder="Enter Vahicle Number " type="text" id="vh_num" className="form-control" />
            </div>
           

               <h5 style={{background:"gray"}}>Workshop Information</h5>

               <div style={{display: "flex",
    width: "65%",
    margin: "auto"}}>

<div  style={{width:'48%',marginRight:"10px"}} className="form-group">
<text htmlFor="inputName" >Workshop Name</text>
<input  style={{margin:"0px"}}placeholder="Enter Workshop name"  type="text" id="ws_name" className="form-control" />
   
</div>
<div  style={{width:'48%'}} className="form-group">
<text htmlFor="inputName" >Workshop Address</text>
<input  style={{margin:"0px"}} placeholder="Enter Workshop Address" type="text" id="ws_add" className="form-control" />
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
