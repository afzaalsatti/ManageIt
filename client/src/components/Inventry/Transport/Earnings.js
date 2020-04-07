import React, { Component } from 'react'
import HRMTable from '../../../AdminDashboard/HRMTable'
const data=[
    {'Name': 'Abc', 'role': 15, 'email': 'Bangalore','password': 'Bangalore', 'roe': 15, 'eail': 'Banalore','pssword': 'Bangalore','test':'1','test1':'2'},
];
const InventrymenuOptions=['Earnings','Spent','Current'];


export default class Earnings extends Component {
    render() {
        return (
            <div>
                  <HRMTable menu={InventrymenuOptions} data={data}></HRMTable> 
            </div>
        )
    }
}
