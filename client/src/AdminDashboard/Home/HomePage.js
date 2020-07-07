import React, { Component } from 'react'
import Home from './Home'
import SalesDetails from './SalesDetails'
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.getDetails = this.getDetails.bind(this);
        this.backBtnPressed = this.backBtnPressed.bind(this);
        this.state = {
          component:<Home getDetails={this.getDetails}></Home>
        }
       
      }

      backBtnPressed(){
        this.setState ({
            component:<Home getDetails={this.getDetails}></Home>
          })
      }
      
      getDetails(type,data){

        if(type==="sales")
        {

            this.setState ({
                component:<SalesDetails backBtnPressed={this.backBtnPressed} data={data}></SalesDetails>
              })
        }
          
       

      }
    render() {
        return (
           <div>
{this.state.component}

              
                
            </div>
        )
    }
}
