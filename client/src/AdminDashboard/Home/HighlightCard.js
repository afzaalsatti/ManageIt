import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class HighlightCard extends Component {
    constructor(props)
    {
        super(props);
       
    }
    render() {
        return (
            
            <div style={{display:"flex",width:"80%",margin:"auto",marginBottom:"40px"}}>
            <Card className="home_detail_card">
                <Card.Body  style={{margin:"0px",padding:"0px"}}>
                    <div style={{marginTop:"15px"}}>
                        <text style={{fontSize:"larger",marginLeft:"10px"}}>
                        {Object.keys(this.props.data)[0]}
                        </text>
                        <img src="/signinimage.jpg">
                        </img>
                       <br></br>
                        <text style={{fontSize:"larger",fontWeight: 600,marginLeft:"10px"}}>
                        {this.props.data[Object.keys(this.props.data)[0]]}
                        </text>
                        
                    </div>
                    <div>
                    <img className="graph-image" src="/assets/images/ADDetail1.png"></img>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{background:'#1ED897'}} className="home_detail_card">
                <Card.Body  style={{margin:"0px",padding:"0px"}}>
                    <div style={{marginTop:"15px"}}>
                        <text style={{fontSize:"larger",marginLeft:"10px"}}>
                        {Object.keys(this.props.data)[1]}
                        </text>
                        <img src="/signinimage.jpg">
                        </img>
                       <br></br>
                        <text style={{fontSize:"larger",fontWeight: 600,marginLeft:"10px"}}>
                        {this.props.data[Object.keys(this.props.data)[1]]}
                        </text>
                        
                    </div>
                    <div>
                    <img className="graph-image" src="/assets/images/ADDetail2.png"></img>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{background:'#2196F3'}} className="home_detail_card">
                <Card.Body  style={{margin:"0px",padding:"0px"}}>
                    <div style={{marginTop:"15px"}}>
                        <text style={{fontSize:"larger",marginLeft:"10px"}}>
                        {Object.keys(this.props.data)[2]}
                        </text>
                        <img src="/signinimage.jpg">
                        </img>
                       <br></br>
                        <text style={{fontSize:"larger",fontWeight: 600,marginLeft:"10px"}}>
                        {this.props.data[Object.keys(this.props.data)[2]]}
                        </text>
                        
                    </div>
                    <div>
                    <img className="graph-image" src="/assets/images/ADDetail3.png"></img>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{background:"#FFAF02"}}className="home_detail_card">
                <Card.Body  style={{margin:"0px",padding:"0px"}}>
                    <div style={{marginTop:"15px"}}>
                        <text style={{fontSize:"larger",marginLeft:"10px"}}>
                           {Object.keys(this.props.data)[3]}
                        </text>
                        <img src="/signinimage.jpg">
                        </img>
                       <br></br>
                        <text style={{fontSize:"larger",fontWeight: 600,marginLeft:"10px"}}>
                        {this.props.data[Object.keys(this.props.data)[3]]}
                        </text>
                        
                    </div>
                    <div>
                    <img className="graph-image" src="/assets/images/ADDetail4.png"></img>
                    </div>
                </Card.Body>
            </Card>
                    
                     
                     
                     
                     
                     
                     
                     
                            </div>
                 
        )
    }
}
