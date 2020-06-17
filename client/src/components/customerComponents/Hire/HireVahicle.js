import React, { Component } from 'react'
import './hire.css'
import history from "../../../history";
export default class HireVahicle extends Component {
    render() {
        return (
          <div>
            <div className="WidgetContainer">
              <div id="widget_block">
                <div id="widget_inner_block">
                  <div id="widget_header">
                    <div id="widget_header1">
                      <span>Travelling Together Is Easy</span>
                    </div>
                    <div id="widget_header2">
                      <span>
                        Hire {this.props.type} at your convenience
                      </span>
                    </div>
                  </div>
                  <div id="widget_autocomplete">
                    <div id="src_city_block">
                      <div className="autocomplete_container_block">
                        <span className="autocomplete_container_label">
                          CITY OF HIRE
                        </span>
                        <div className="autocomplete_block">
                          <img
                            className="autocomplete_img"
                            src="/assets/svg/tickets.svg"
                            alt
                          />
                          <input
                            className="SourceCity autocomplete_input"
                            placeholder="eg: Islamabad"
                            type="text"
                          />
                          <ul
                            className="autocomplete_ul"
                            style={{ width: "108%", display: "none" }}
                          >
                            <li className="noresult_li autocomplete_li">
                              <i>No results</i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="pick_up_block">
                      <div className="autocomplete_container_block">
                        <span className="autocomplete_container_label">
                          STARTING POINT
                        </span>
                        <div className="autocomplete_block">
                          <img
                            className="autocomplete_img"
                            src="/assets/svg/boarding-dropping.svg"
                            alt
                          />
                          <input
                            className="StartingPoint autocomplete_input"
                            placeholder="eg: Railway Station"
                            type="text"
                          />
                          <ul
                            className="autocomplete_ul"
                            style={{ width: "151.64%", display: "none" }}
                          >
                            <li className="noresult_li autocomplete_li">
                              <i>No results</i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="dest_city_block">
                      <div className="autocomplete_container_block">
                        <span className="autocomplete_container_label">
                          DESTINATION - Local or Outstation
                        </span>
                        <div className="autocomplete_block">
                          <img
                            className="autocomplete_img"
                            src="/assets/svg/distance.svg"
                            alt
                          />
                          <input
                            className="DestinationCity autocomplete_input"
                            placeholder="eg: Airport/Islamabad"
                            type="text"
                          />
                          <ul
                            className="autocomplete_ul"
                            style={{ width: "151.64%" }}
                          >
                            <li className="noresult_li autocomplete_li">
                              <i>No results</i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="hire_btn_container">
                      <button id="hire_btn"
                      onClick={()=>{
                        history.push({
                          pathname: '/trackRide',
                          customNameData: "Test",
                        }
                          )
                      }}
                      
                      
                      >HIRE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bannerSeparator"
              id="list_steps"
              style={{ position: "relative", top: "-180px" }}
            >
              <div className="liststeps red">
                <div className="main-headd">How it works :</div>
                <ol>
                  <li>
                    <div style={{ display: "flex" }}>
                      <div className="circle">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          1
                        </p>
                      </div>
                      <div>
                        <span>You give us your trip details.</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex" }}>
                      <div className="circle">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          2
                        </p>
                      </div>
                      <div>
                        <span>
                          We work with the best operators to get you the best
                          prices.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex" }}>
                      <div className="circle">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          3
                        </p>
                      </div>
                      <div>
                        <span>
                          Select the operator of your choice and go on your
                          trip.
                        </span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
         

            <div
              className="featuresContainer container whitebox marketing"
              id="marketing"
              style={{ marginTop: "-60px" }}
            >
              <div className="keyfeatures mainHeadKey">KEY FEATURES</div>
              <div className="row">
                <div className="w-33 fl">
                  <img
                    className="img-circle"
                    src="/assets/images/Inventory.png"
                    alt="inventory"
                  />
                  <h2>Inventory</h2>
                  <p>Access to leading vehicle providers in your city.</p>
                </div>
                <div className="w-33 fl">
                  <img
                    className="img-circle"
                    src="/assets/images/vehicle.png"
                    alt="vehicle images"
                  />
                  <h2>Choose your vehicle</h2>
                  <p>Look at vehicle images before making a choice</p>
                </div>
                <div className="w-33 fl">
                  <img
                    className="img-circle"
                    src="/assets/images/fees.png"
                    alt="no hidden costs"
                  />
                  <h2>Zero booking fees</h2>
                  <p>Transparent all inclusive pricing. No hidden cost.</p>
                </div>
              </div>
            </div>

            <div className="clr" style={{ paddingBottom: 65 }} />

            <div className="trustServiceContainer container whitebox">
              <div className="roww">
                <i className="icon icon-trust-unit-big" />{" "}
                <span className="trustHeading">TRUSTED SERVICE</span>
              </div>
              <div className="roww">
                <div className="w-25 fl borderRight">
                  <img
                    className="trust_img-circle"
                    src="/assets/images/well_maintained.png"
                    alt="inventory"
                  />
                  <h3 className="header3">WELL MAINTAINED</h3>
                  <div className="trustmaintext">
                    We promise to provide you with a neat and well-maintained
                    bus with a reliable driver.
                  </div>
                </div>
                <div className="w-25 fl borderRight">
                  <img
                    className="img-circle"
                    src="/assets/images/on_time.png?v=1"
                    alt="inventory"
                  />
                  <h3 className="header3">ON TIME</h3>
                  <div className="trustmaintext">
                    We value your time, which is why we make sure that your bus
                    will arrive as scheduled.
                  </div>
                </div>
                <div className="w-25 fl borderRight">
                  <img
                    className="trust_img-circle"
                    src="/assets/images/verified_payment.png?v=1"
                    alt="inventory"
                  />
                  <h3 className="header3">VERIFIED PAYMENT</h3>
                  <div className="trustmaintext">
                    Our payment system allows you to pay for your rented vehicle
                    in a secure and safe way.
                  </div>
                </div>
                <div className="w-25 fl">
                  <img
                    className="trust_img-circle"
                    src="/assets/images/service_guarantee.png?v=1"
                    alt="inventory"
                  />
                  <h3 className="header3">SERVICE GUARANTEE</h3>
                  <div className="trustmaintext">
                    If you are not satisfied with our service, we promise to
                    refund 20% of your payment back to you.
                  </div>
                </div>
              </div>
            </div>
            <div className="clr" style={{ paddingBottom: 65 }} />

            <div className="opContainer container whitebox">
              <div className="home-content operatorContainer">
                <div className="subHeading">
                  <h5 className="main-title mainHead">
                    Interested in becoming an operator
                  </h5>
                  <div className="trustmaintext">
                    Interested in becoming Captain ?{" "}
                    <span
                      onClick={()=>{
                      
                        history.push('/registercaptain');
                      }}
                      className="operatorBtnClick"
                    >
                      Click here
                    </span>{" "}
                    if you are an operator who is in the hire/rental business
                    and would like to be onboarded.
                  </div>
                </div>
                <div className="subHeading2">
                  <h4 className="main-title">
                    Have Travel Plans, Just Hire a Vahicle
                  </h4>
                  <div className="subHeadingBody">
                    ManageIt has launched a platform for hiring buses using which
                    you can hire a vehicle as per your requirement. Have to goto
                    a place where no trains or buses operate? Use ManageIt to rent
                    a vehicle for your group of friends, family or colleagues,
                    say goodbye to all your tensions and just rent any type of
                    bus (Ac/Non Ac) and reach your destination in a jiffy.
                    Renting a bus is always easy and smooth on ManageIt, you can
                    go ahead and hire a bus and reward yourself a luxurious
                    journey. ManageIt has enlisted many recommended top rated
                    operators in order to deliver hassle free travel experiences
                    happening all-round the year. Have Travel Plans? Just Rent a
                    Bus!
                    <br />
                    You can rent a bus for one-way and return trips as well as
                    for local or outstation journeys. Buses are more economical
                    than renting multiple cars, and provide you comfort and ease
                    during travel.
                    <br />
                    <br />
                    Get transparent pricing from multiple operators in your
                    city, choose the operator of your choice and go on your
                    trip.
                    <br></br>
                  </div>
                </div>
                      <div className="w-90 discriptionContainer">
                  
                  <div>
                    Whatsoever is the occasion or festival, MangeIt provides a
                    convenient option to rent any vehicle of your choice and
                    have a comfortable trip. Your personal travel contentment is
                    taken as a special priority by ManageIt, just plan your
                    occasion well and your journey is already taken care of.
                    Whether it is corporate travel, Marriage, Vacation,
                    Pilgrimage, Holiday and Outing or just a weekend gateway;
                    renting is always easy. Go ahead and hire a personal
                    transport and let travel get simpler!
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
