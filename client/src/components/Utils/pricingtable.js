import React from 'react'
import  '../components/Home.css'
import Jello from 'react-reveal/Jello';
class PricingTable extends React.Component{
    
    render()
    {
        return(
           
            <div class="pricing-table is-comparative">
               <Jello>
              <div className="margin-class">
               
            <div class="pricing-plan is-features">
              <div class="plan-header">FREE</div>
              <div class="plan-price"><span class="plan-price-amount">$0/month</span></div>
              <div class="plan-items">
                <div class="plan-item">2 Branches</div>
                <div class="plan-item">No Sub-Domain</div>
                <div class="plan-item">Limited Analysis</div>
                <div class="plan-item">Email Boxes</div>
              </div>
              <div class="plan-footer">
              <button  className="pricingbtn">Try for free</button>
              </div>
            </div>
            </div>
            </Jello>
            <Jello>
            {/* second pricr card */}
            <div className="margin-class">
            <div class="pricing-plan is-features">
              <div class="plan-header basic">BASIC</div>
              <div class="plan-price"><span class="plan-price-amount">$24/month</span></div>
              <div class="plan-items">
                <div class="plan-item">5 Branches</div>
                <div class="plan-item">Sub-Domain</div>
                <div class="plan-item">unLimited Analysis</div>
                <div class="plan-item">Email Boxes</div>
              </div>
              <div class="plan-footer">
              <button className="pricingbtn">SignUp</button>
              </div>
            </div>
            </div>
            </Jello>

             {/* Third pricr card */}
             <Jello>
             <div className="margin-class">
            <div class="pricing-plan is-features">
              <div class="plan-header professional">PROFESSIONAL</div>
              <div class="plan-price"><span class="plan-price-amount">$99/month</span></div>
              <div class="plan-items">
                <div class="plan-item">10 Branches</div>
                <div class="plan-item">Sub-Domain</div>
                <div class="plan-item">unLimited Analysis</div>
                <div class="plan-item">Email Boxes</div>
              </div>
              <div class="plan-footer">
              <button className="pricingbtn">SignUp</button>
              </div>
            </div>
            </div>
            </Jello>
 {/* FORTH pricr card */}
<Jello>
 <div className="margin-class">
            <div class="pricing-plan is-features">
              <div class="plan-header enterprise">ENTERPRISE</div>
              <div class="plan-price"><span class="plan-price-amount">$200/month</span></div>
              <div class="plan-items">
                <div class="plan-item">15 Branches</div>
                <div class="plan-item">Sub-Domains</div>
                <div class="plan-item">unLimited Analysis</div>
                <div class="plan-item">Email Boxes</div>
              </div>
              <div class="plan-footer">
              <button className="pricingbtn">SignUp</button>
              </div>
            </div>
            </div>
            </Jello>
          </div>
          
           
        );
    }
}
export default PricingTable;