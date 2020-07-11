import React, { Component } from 'react'
import HRMTable from '../../../AdminDashboard/HRMTable'

const InventrymenuOptions=['Earnings','Spent','Current'];


export default class Earnings extends Component {
    render() {
        return (
            <div>
                  <HRMTable menu={InventrymenuOptions} tableFor="earnings"></HRMTable> 
            </div>
        )
    }
}
