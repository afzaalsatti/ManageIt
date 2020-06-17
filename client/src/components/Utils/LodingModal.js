import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './loadingModal.css'
export default class LodingModal extends Component {
    constructor(props)
    {
        super(props);

    }
    render() {
        return (
            <div>
                  <Modal style={{backdropFilter: "blur(5px)"}} show={this.props.showModal} >
        
        <Modal.Body >
       <div>
      <svg className={this.props.reqFailed?"hideElement":"showElement"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto',float:'left'}} width="25px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#3c0f0f">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.4201183431952662s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(27.692307692307693 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#f91a10">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.3017751479289938s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(55.38461538461539 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#e46b43">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.1834319526627217s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(83.07692307692308 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#edb195">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.0650887573964496s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(110.76923076923077 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#2aa7c9">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.9467455621301774s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(138.46153846153845 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#06628d">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.8284023668639052s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(166.15384615384616 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#04284d">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.7100591715976331s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(193.84615384615384 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#3c0f0f">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.5917159763313609s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(221.53846153846155 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#f91a10">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.4733727810650887s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(249.23076923076923 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#e46b43">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.35502958579881655s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(276.9230769230769 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#edb195">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.23668639053254434s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(304.61538461538464 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#2aa7c9">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.11834319526627217s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(332.3076923076923 50 50)">
    <rect x="44.5" y={11} rx="5.5" ry="11.16" width={11} height={36} fill="#06628d">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="0s" repeatCount="indefinite" />
    </rect>
  </g>
</svg>


<text className={this.props.reqFailed?"hideElement":"showElement"}>{this.props.displayText} </text>

<text className={this.props.reqFailed?"showElement":"hideElement"}>Operation Failed</text>
       </div>
      
    </Modal.Body  >


       <Modal.Footer className={this.props.reqFailed?"showElementBtn":"hideElement"} >

       <button
       id="retryRequest"
       style={{
        background: "#196EDE",
        color: "white",
        width: "30%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
        this.props.getModalBtnClick(1)
        
      }}>Retry</button>
      
      <button
      id="cancelRequest"
       style={{
        background: "#196EDE",
        color: "white",
        width: "30%",
        margin: "auto",
        height: "35px",
    borderRadius: "8px"
       }}
       
       onClick={()=>{
        this.props.getModalBtnClick(2)
        
      }}>Cancel</button>
     
       </Modal.Footer>
      </Modal>
            </div>
        )
    }
}
