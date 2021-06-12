import React, { Component } from "react";
import logoESI from "../images/esi_whiteOff.png";
import "../css/Header.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class Header extends Component {
  render() {
    return (
      <div className="head text-left">
        <div className="logo">
          <img
            src={logoESI}
            alt="logo_ESI"
            width="50"
            style={{ margin: "8px" }}
          />
        </div>
        <div className="dpgr">
          <p>DPGR</p>
        </div>
        <div className="profil">
          <p>Bonjour, User</p>
          <i className="fa fa-fw fa-user" style={{ fontSize: "1.75em" }} />
          <i className="fa fa-fw fa-angle-down" style={{ fontSize: "1em" }} />
        </div>
      </div>
    );
  }
}

export default Header;
