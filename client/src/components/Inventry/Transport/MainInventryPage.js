import React, { Component } from 'react'
import AddExpenseDetails from './AddExpenseDetails'
import AddNewVahicle from './AddNewVahicle'
import AddOldVahicleExpense from './AddOldVahicleExpense'
import Earnings from './Earnings'
import OtherExpense from './OtherExpense'




export default class MainInventryPage extends Component {
  
    constructor()
    {
      super();
      this.handleToUpdate = this.handleToUpdate.bind(this);
      this.state={
          Component:''
      }
    }
    handleToUpdate(someArg){ 
        this.setState({Component:someArg });
        
        }
    render() {
        var comp='';
        try{
            
             comp=this.state.Component;
            
        }catch(e){}
       
        return (
            <div style={{overflow: 'scroll'}}>
               
                 { comp==='1' ?
        <AddNewVahicle></AddNewVahicle>:
        comp==='2'?
        <AddOldVahicleExpense  ></AddOldVahicleExpense>:
        comp==='3'?
        <OtherExpense  ></OtherExpense>:
        
        <AddExpenseDetails handleToUpdate = {this.handleToUpdate}></AddExpenseDetails>
       
        

      }

              
               
            </div>
        )
    }
}
