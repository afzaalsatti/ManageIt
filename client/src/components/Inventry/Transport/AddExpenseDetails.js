import React, { Component } from "react";
import {
    Card, Button
  } from 'react-bootstrap';
export default class AddExpenseDetails extends Component {
  render() {
    var handleToUpdate  =   this.props.handleToUpdate;
    return <div>
 <div className="main">
  <section className="sign-in">
    <div className="container">
      <div className="signin-content">
       
        <div className="signin-form" style={{width:'100%',textAlign:"center"}}>
          <h2  className="form-title">Add Expense Details</h2>
      


          <Card style={{  display:'inline-block',marginLeft:'10px'}}>
  <Card.Img variant="top" src="/assets/imageSlider/test.jpg" />
  <Card.Body>
    <Card.Title>New Vehicle</Card.Title>
    <Card.Text>
    New Vahicle refers to buying new vahicle.
    
    </Card.Text>
    <Button  onClick={() => handleToUpdate('1')} variant="primary">Add Expense</Button>
  </Card.Body>
</Card>
         
<Card style={{ display:'inline-block',marginLeft:'10px'}}>
  <Card.Img variant="top" src="/assets/imageSlider/test1.jpg" />
  <Card.Body>
    <Card.Title>Old Vehicle</Card.Title>
    <Card.Text>
     Add some Expense details on old vahicle
     
    </Card.Text>
    <Button  onClick={() => handleToUpdate('2')} variant="primary">Add Expense</Button>
  </Card.Body>
</Card>

<Card style={{  display:'inline-block',marginLeft:'10px'}}>
  <Card.Img variant="top"src="/assets/imageSlider/test1.jpg" />
  <Card.Body>
    <Card.Title>Other Expenses</Card.Title>
    <Card.Text>
     If Expenses are of other type enter here
    </Card.Text>
    <Button  onClick={() => handleToUpdate('3')} variant="primary">Add Expense</Button>
  </Card.Body>
</Card>




{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/signinimage.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}


         
        </div>
      </div>
    </div>
  </section>
</div>



    </div>;
  }
}
