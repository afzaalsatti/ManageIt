import React, { Component } from 'react'
import {Line} from 'react-chartjs2';
var label;
var data;
export default class LineChart extends Component {
    constructor(props){
        super(props)
        label=this.props.label;
        data=this.props.data;

    }
    getLineChart=()=>{
        const data={

            labels:label,
            datasets:[
                {
                    label:"Label",
                    data:data
                }
            ]
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
