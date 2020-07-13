import React, { Component } from 'react'
import Home from './Home'
import SalesDetails from './SalesDetails'
import UserAquisition from './UserAquisition'
import RideDetails from './RideDetails'
import Expense from './ExpenseDetails'
var userInfo;
var companyInfo;
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={isLoading:true}
        userInfo=JSON.parse(localStorage.getItem("userInfo"));
        companyInfo=JSON.parse(localStorage.getItem("companyInfo"));
        
        
if(userInfo !== null)
{
        if( userInfo.sender==="customer" || userInfo.sender.toLowerCase()==="employee" || userInfo.sender.toLowerCase()==="captain")
        {
          window.alert("You are not allowed here Redirecting...")
        }
      }else{
        window.alert("Signin First Redirecting... ")
      }
     // this.getCompanyInfo();
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
        }else
        if(type==="new_users")
        {

            this.setState ({
                component:<UserAquisition backBtnPressed={this.backBtnPressed} data={data}></UserAquisition>
              })
        }
        else if(type==="rides")
        {
          this.setState ({
            component:<RideDetails backBtnPressed={this.backBtnPressed} data={data}></RideDetails>
          })
        }
        else if(type==="expense")
        {
          this.setState ({
            component:<Expense backBtnPressed={this.backBtnPressed} data={data}></Expense>
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
