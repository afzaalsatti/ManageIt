import React, { Component } from 'react'
import '../HRMTable.css'
import Table from './Bookings'
import Expenses from './Expenses'
import Earnings from './Earnings'
import HRMTable from '../HRMTable'
import Vahicles from './Vahicles'
import BusRoutes from './BusRoutes'


const HRMmenuOptions=['Customers','Staff','owners','Contractors'];
const InventrymenuOptions=['Earnings','Spent','Current'];

export default class TableDashboard extends Component {
    constructor(props)
    {
        super(props);
        this.state={tableNo:1}
    }

getTable=()=>{
    console.log(this.state.tableNo)
    if(this.state.tableNo===1)
    {
        return <Expenses></Expenses>
    }
    else
    if(this.state.tableNo===2)
    {
        return <Vahicles></Vahicles>
    }
    else
    if(this.state.tableNo===3)
    {
        return  <Table  address="getAllBookings" ></Table>
    }
    else
    if(this.state.tableNo===4)
    {
        return <HRMTable tableFor="hrm" menu={HRMmenuOptions}></HRMTable>
    }
    else
    if(this.state.tableNo===5)
    {
        return <Table  address="getAllExpenses" ></Table>
    }
    else
    if(this.state.tableNo===6)
    {
        return  <BusRoutes></BusRoutes>
    }
    else
    if(this.state.tableNo===7)
    {
        return <Earnings></Earnings>
        
        
        
    }
    
}







    render() {
        return (
            <div>
<div className="table-dash-topbar" style={{width:"fit-content",height:"40px",background:"#343A40",color:"white",textAlign:"center",display:"flex",margin:"auto",marginTop:"20px",cursor:"default"}}>

<div onClick={()=>{
    if(this.state.tableNo !== 1)
    {
        this.setState({
            tableNo:1
        });
    }
    
   
}}>
    <text>
        Expense
    </text>
    </div>
    <div
    onClick={()=>{
        if(this.state.tableNo !== 2)
        {
            this.setState({
                tableNo:2
            });
        }
        
       
    }}
    >
    <text>
        Vahicles
    </text>
    </div>
    <div onClick={()=>{
        if(this.state.tableNo !== 3)
        {
            this.setState({
                tableNo:3
            });
        }}}
        >
    <text>
    
        Bookings
    </text>
    </div>
    <div onClick={()=>{
        if(this.state.tableNo !== 4)
        {
            this.setState({
                tableNo:4
            });
        }}}>
    <text>
        Human Resource
    </text>
    </div>
     
    <div onClick={()=>{
        if(this.state.tableNo !== 5)
        {
            this.setState({
                tableNo:5
            });
        }}}>
    <text>
        Attendance
    </text>
    </div>
    <div onClick={()=>{
        if(this.state.tableNo !== 6)
        {
            this.setState({
                tableNo:6
            });
        }}}>
    <text>
        Routes
    </text>
    </div>
    <div onClick={()=>{
        if(this.state.tableNo !== 7)
        {
            this.setState({
                tableNo:3
            });
        }}}>
    <text>
        Earnings
    </text>
    </div>

</div>


<div>
{this.getTable()}

</div>



                {/* <Table  address="getAllBookings" ></Table>
                <Table  address="getAllExpenses" ></Table>
                <Table  address="getAllVahicles" ></Table> */}
                
            </div>
        )
    }
}
