import React, { Component } from 'react'
import Home from './Home'
export default class HomePage extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          component:<Home getDetails={this.getDetails()}></Home>
        }
      }

      getDetails=(type,data)=>{

      }
    render() {
        return (
            <div>
                {this.state.component}
                
            </div>
        )
    }
}
