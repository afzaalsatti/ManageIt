import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
// import Charts from './Chart'
import Charts from './Home/HomePage'
import './css/adminlte.css'
import history from '../history'

var state=<Charts></Charts>
var height="100px";
var userInfo;
export default class Dashboard extends Component {
    
    constructor(props)
    {
      super(props);

      userInfo=JSON.parse(localStorage.getItem("userInfo"));
      if(userInfo !== null)
{
        if( userInfo.sender==="customer" || userInfo.sender.toLowerCase()==="employee" || userInfo.sender.toLowerCase()==="captain")
        {
          window.alert("You are not allowed here Redirecting...")
          history.push("/Home")
        }
      }else{
        window.alert("Signin First Redirecting... ")
        history.push("/Signin")
      }
      
    //  window.alert(this.props.location.data["name"])
      this.handleToUpdate = this.handleToUpdate.bind(this);
      this.state={
          Component:<Charts></Charts>

      }
      height=(window.screen.height)-130 +"px";
    }
 




    componentDidMount()
    {

    }
handleToUpdate(someArg){ 
   
    console.log(someArg)
this.setState({Component:someArg });

}
    render() 
    {
        var comp='';
        try{
             comp=this.state.Component;
            
        }catch(e){}
       if(userInfo.sender==="owner" || userInfo.sender==="admin")
       {
        return (

            
            <div  >
                <div >
                <Header ></Header>
                </div>
               
<div>
<Menu handleToUpdate = {this.handleToUpdate}></Menu>
</div>
               
                <div  >
                {comp}
                </div>

      

                <Footer></Footer>
            </div>
        )

        }
        else
        {
            return (
                <div></div>
            )
        }


    }
}
