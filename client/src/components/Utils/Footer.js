import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                  <div id="myFooter">
          <footer>
            <div className="Footercontainer">
              <div className="row">
                <div className="col-sm-3 myCols">
                  <div >
                  <h5>Get started</h5>
                  <ul style={{display:"grid"}}>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sign up</a>
                    </li>
                    <li>
                      <a href="#">Downloads</a>
                    </li>
                  </ul>
             
                    </div>
                    </div>
                <div className="col-sm-3 myCols">
                  <h5>About us</h5>
                  <ul style={{display:"grid"}}>
                    <li>
                      <a href="#">Company Information</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>Support</h5>
                  <ul style={{display:"grid"}}>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Help desk</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>Legal</h5>
                  <ul style={{display:"grid"}}>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social-login" style={{width:"9%",margin:"auto"}}>
           
            <ul className="socials">
              <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook" /></a></li>
              <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter" /></a></li>
              <li><a href="#"><i className="display-flex-center zmdi zmdi-google" /></a></li>
            </ul>
          </div>
             <div className="footer-copyright">
              <p>© 2020 All rights reserved </p>
            </div>
           
          </footer>
        </div>
   
            </div>
        )
    }
}
