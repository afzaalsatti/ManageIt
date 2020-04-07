import React, { Component } from 'react'
import HRMTable from '../../AdminDashboard/HRMTable'
const data=[
    {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','Attendance': 'Present'},
    {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','Attendance': 'Present'},
    {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','Attendance': 'Absent'},
    {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','Attendance': 'Present'}];
    
    const HRMmenuOptions=['Todays','Yesterdays','custom'];
export default class AttendanceTable extends Component {
    render() {
        return (
            <div>
                 <HRMTable   menu={HRMmenuOptions}data={data}></HRMTable>
        
            </div>
        )
    }
}
