import React, { Component } from "react";
//import { slide as Menu } from "react-burger-menu";
import "../css/Sidebar.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class Sidebar extends Component {
  render() {
    return (
      <SideNav
        className="sn"
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle className="toggle" />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="concours">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Concours</NavText>
          </NavItem>
          <NavItem eventKey="inscription">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Inscription</NavText>
          </NavItem>
          <NavItem eventKey="suivi">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Suivi</NavText>
          </NavItem>
          <NavItem eventKey="stage">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Stage</NavText>
          </NavItem>
          <NavItem eventKey="soutenance">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Soutenance</NavText>
            <NavItem eventKey="soutenance/doctorat">
              <NavText>Doctorat</NavText>
            </NavItem>
            <NavItem eventKey="soutenance/habilitation">
              <NavText>Habilitation</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="logout" className="logout">
            <NavIcon>
              <i
                className="fa fa-fw fa-sign-out"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Se déconnecter</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default Sidebar;
