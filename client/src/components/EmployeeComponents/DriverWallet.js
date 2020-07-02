import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './css/driver_wallet.css'


var total=0,pending=0,cleared=0,withdrawn=0,canceled=0;
var earnings;
var filteredearnings=[];
function RenderRow (props) {
    console.log(props.data)
    return props.keys.map((key, index)=>{
        
        
   return <td style={{    borderStyle: "dashed"}}className={ key==="status" && props.data[key]==="pending" ? "yellowText" :key==="status" && props.data[key]==="cleared"?"greenText": key==="status" && props.data[key]==="canceled"?"redText":"" } key={props.data[key]}>{props.data[key]}</td>
    })
   }


export default class DriverWallet extends Component {
    constructor(props)
        {
            super(props);
            this.state={
                dataFetched:false
            }
            if(earnings === undefined)
            {
                this.getDriverEarnings()
            }
            
            
        }

        filterEarningTable=(type)=>{

            filteredearnings=[];
            if(type==="everything")
            {
                filteredearnings=earnings
            }
            else
            {
earnings.forEach(earning => {
if(type.includes(earning.type) || type.includes(earning.status))
{
    filteredearnings.push(earning)
}



    
});
            }


this.setState({
    dataFetched:true
})



        }

        export2csv=()=> {
            let data = "";
            const tableData = [];
            const rows = document.querySelectorAll("table tr");
            for (const row of rows) {
              const rowData = [];
              for (const [index, column] of row.querySelectorAll("th, td").entries()) {
                // To retain the commas in the "Description" column, we can enclose those fields in quotation marks.
                if ((index + 1) % 3 === 0) {
                  rowData.push('"' + column.innerText + '"');
                } else {
                  rowData.push(column.innerText);
                }
              }
              tableData.push(rowData.join(","));
            }
            data += tableData.join("\n");
            const a = document.createElement("a");
            a.href = URL.createObjectURL(new Blob([data], { type: "text/csv" }));
            a.setAttribute("download", "data.csv");
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        //This method will get keys Headings
         getKeys = ()=>{

            let temp=Object.keys(earnings[0]);
           temp.splice(0,4)
           temp.splice(2,2)
           temp.splice(2, 0, 'amount')
           temp.splice(3, 0, 'type')
           temp.splice(4, 0, 'status')
           //  temp.splice(3,1)
          //  temp.splice(6, 0, 'status')

            return temp;
        }
          GetHeader=()=>{
                
            var keys = this.getKeys();
            
            return keys.map((key, index)=>{
             
          return <th style={{background:"aliceblue"}} key={keys[index]}>{keys[index]}</th>}
          )
         }
        
        
          GetRowsData  = ()=>{
            var items = earnings;
           if(filteredearnings[0]!=undefined)
           {
            items = filteredearnings;
           }
        
            
            
            var keys = this.getKeys();
           
            return items.map((row, index)=>{
               
            return <tr className={row.type==="withdrawn"?"redText":"asjdhakhdkas"} id={index}><RenderRow key={index} data={row} keys={keys}/></tr>
            })
        }
getDriverEarnings=()=>{
total=0;
    let address="getEarnings";
    let req_data={
        "id":"1"
    }



    const options={
        method:"POST",
        headers:{
            'Content-type':"application/json"
            
        },
        body:JSON.stringify(req_data)
    }
    

    fetch("/"+address,options).then(response=>{
        return response.json();
  }).then(data=>{
      let status=data.status;
     
 
      if(status==='Success')
      {
       
        earnings= data.earnings;
       
        earnings.forEach(earning => {
           
            if(earning.type==="withdrawn")
            {
withdrawn=withdrawn+parseFloat(earning.amount);
            }
            else if(earning.type==="earning")
            {
                
            total=total+parseFloat(earning.amount);
                if(earning.status==="pending")
                {
                    pending=pending+parseFloat(earning.amount);
                }
                else if(earning.status==="cleared")
                {
    
                    cleared=cleared+parseFloat(earning.amount);
                }
                else
                {
                    canceled=canceled+parseFloat(earning.amount);

                }
            }
           
            
    
});
     
console.log(earnings)
document.getElementById("total").innerHTML="RS"+total;
document.getElementById("pending").innerHTML="RS"+pending;
cleared=cleared-withdrawn;
document.getElementById("cleared").innerHTML="RS"+cleared;
document.getElementById("withdrawn").innerHTML="RS"+withdrawn;
document.getElementById("expected").innerHTML="RS"+(cleared+pending);
document.getElementById("canceled").innerHTML="RS"+(canceled);

this.setState({
    dataFetched:true
})
       // history.push("");
      }else{

       
        console.log("Operation Failed!")
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
      // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  }).catch((error) => {
    
    //   reqInProcess=reqInProcess+1;
    // this.RequestToServer(reqInProcess);
   console.log("Unexpected error Try again Retrying...  ");
   
   
 });

}



    render() {


        
        return (
        <div style={{margin:"50px"}}>
                


<div className="box-row p-b-100">
  <article className="db-new-content js-db-cont">
    <header className="db-new-header">
      <h1 className="alt">
        Earnings
        <span className="money-expected">
          Expected Earnings: <b className="js-active-orders"><span id="expected">RS 0</span></b>
        </span>
      </h1>
    </header>
    <div className="db-stats-standard cf js-db-stats ">
      <span ><small>Net Income</small> <span id="total">RS 0</span></span>
      <a href=""><small>Withdrawn</small><span id="withdrawn">RS0</span></a>
      <a href=""><small>Canceled</small><span id="canceled">RS0</span></a>
      <a   href=""><small>Pending Clearance</small><span  id="pending">RS0</span></a>
      <span ><small>Available for Withdrawal</small><span id="cleared">RS0</span></span>
    </div>
    <div className="revenues-actions js-revenues-actions p-b-10 cf">
      <text>WITHDRAW</text>
      <div id="Earnings-component"><div className="earnings-package" data-reactroot><section className="withdraw-buttons-list"><button data-hint="No Earnings to Withdraw" className="withdraw-button paypal hint--top disabled btn-standard" disabled><i />Paypal Account</button><form method="post" className="js-verify-btn" action acceptCharset="UTF-8"><input type="hidden" name="authenticity_token" defaultValue="X/gzmZ6U4K0Ob84MBYuhHKOKmT/4q06Y+pi1dajKUf8=" /><button type="submit" data-hint="New! Bank Transfer withdrawals. Click the button to learn more." className="withdraw-button local_bank_transfer hint--top btn-standard"><i />Bank Transfer</button></form><form method="post" className="js-verify-btn" action acceptCharset="UTF-8"><input type="hidden" name="authenticity_token" defaultValue="X/gzmZ6U4K0Ob84MBYuhHKOKmT/4q06Y+pi1dajKUf8=" />
         </form></section></div></div>
    </div>
    <div className="revenues-actions cf">
      <text>SHOW</text>
      <div style={{    display: "inline-flex",
    marginLeft: "30px"}}>
      <div className="dd-wrap js-ddown-transactions"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a className="dropdown-toggle max-width" data-toggle="dropdown">EVERYTHING</a>
            <ul onClick={(event)=>{
                event= event || window.event;
                 
                 var target =event.target || event.srcElement; 
                this.filterEarningTable(target.innerHTML.toLowerCase());

            }} className="dropdown-menu  " role="menu" style={{top: '-2px', width: 177}}>
              <li>
                <a data-type="transactions" data-val="all">
                  <span className="text-inner">EVERYTHING</span>
                </a>
              </li>
              <li>
                <a data-type="transactions" data-val="withdrawn">
                  <span className="text-inner">WITHDRAWN</span>
                </a>
              </li>
              <li>
                <a data-type="transactions" data-val="pending_clearance">
                  <span className="text-inner">PENDING CLEARANCE</span>
                </a>
              </li>
              <li>
                <a data-type="transactions" data-val="canceled_revenues">
                  <span className="text-inner">CANCELED REVENUES</span>
                </a>
              </li>
              <li>
                <a data-type="transactions" data-val="cleared">
                  <span className="text-inner">CLEARED</span>
                </a>
              </li>
              <li>
                <a data-type="transactions" data-val="revenue_purchases">
                  <span className="text-inner">USED FOR PURCHASES</span>
                </a>
              </li>
            </ul>
          </div>
        </div></div>


                       
      <div className="dd-wrap js-ddown-years"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a className="dropdown-toggle max-width" data-toggle="dropdown">2020</a>
            <ul className="dropdown-menu  " role="menu" style={{top: '-2px', width: 72}}>
              <li>
                <a data-type="years" data-val={2020}>
                  <span className="text-inner">2020</span>
                </a>
              </li>
              <li>
                <a data-type="years" data-val={2019}>
                  <span className="text-inner">2019</span>
                </a>
              </li>
            </ul>
          </div>
        </div></div>
      <div className="dd-wrap js-ddown-months"><div className="filter-select cf ">
          <div className="fake-dropdown" style={{visibility: 'visible'}}>
            <a className="dropdown-toggle max-width" data-toggle="dropdown" >All months</a>
            <ul className="dropdown-menu  " role="menu" style={{top: '-2px', width: 117}}>
              <li>
                <a data-type="months" data-val={13}>
                  <span className="text-inner">All months</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={1}>
                  <span className="text-inner">January</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={2}>
                  <span className="text-inner">February</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={3}>
                  <span className="text-inner">March</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={4}>
                  <span className="text-inner">April</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={5}>
                  <span className="text-inner">May</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={6}>
                  <span className="text-inner">June</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={7}>
                  <span className="text-inner">July</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={8}>
                  <span className="text-inner">August</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={9}>
                  <span className="text-inner">September</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={10}>
                  <span className="text-inner">October</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={11}>
                  <span className="text-inner">November</span>
                </a>
              </li>
              <li>
                <a data-type="months" data-val={12}>
                  <span className="text-inner">December</span>
                </a>
              </li>
            </ul>
          </div>
        </div></div>
    
        </div>
      <a href="#" className="csv-export js-revenues-csv-export" onClick={()=>{
          this.export2csv()
      }} >Export to CSV</a>
      <div className="csv-export-notif hidden" />
    </div>
   </article>
</div>

<hr></hr>

<Card>
<table style={{height: 'auto', overflow:'scroll' }}  id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                    {earnings!=undefined ? <this.GetHeader></this.GetHeader> : ""}
                
                </tr>
              </thead>
              <tbody >
              
              {earnings!=undefined ? <this.GetRowsData></this.GetRowsData> : ""}

</tbody>
              <tfoot>
                
              </tfoot>
            </table>
</Card>
</div>

          
        )
    }
}
