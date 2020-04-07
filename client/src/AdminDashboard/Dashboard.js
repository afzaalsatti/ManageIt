import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Charts from './Chart'
import './css/adminlte.css'


var state=<Charts></Charts>
var height="100px";
export default class Dashboard extends Component {
    
    constructor()
    {
      super();
     
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
    render() {
        var comp='';
        try{
             comp=this.state.Component;
            
        }catch(e){}
       
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

      }

                <Footer></Footer>
            </div>
        )
    }
}
