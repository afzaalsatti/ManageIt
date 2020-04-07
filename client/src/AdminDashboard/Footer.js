import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <strong>
            Copyright © 2020 <a href="">ManageIt</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.0.2
          </div>
        </footer>
      </div>
    );
  }
}
