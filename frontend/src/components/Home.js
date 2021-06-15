import React, { Component, Fragment } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../css/Home.css";

import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tabs from "./Tabs";
import OngletValidDossier from "./OngletValidDossier";
import Sidebar from "./Sidebar";

class Home extends Component {
  handler = this.handler.bind(this);

  state = {
    sidebar_active: false,
  };

  handler() {
    this.setState({
      sidebar_active: this.state.sidebar_active ? false : true,
    });
  }

  render() {
    var currentclass = this.state.sidebar_active ? "collapsed" : "expanded";
    return (
      <Fragment>
        <Header />
        <div className={currentclass}>
          <BrowserRouter>
            <Sidebar
              sidebar_active={this.state.sidebar_active}
              action={this.handler}
              selected={window.location.pathname.slice(0)}
            />
            <Switch>
              <Route path="/soutenance/doctorat">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Doctorat | Gestion des dossiers de soutenance
                </h3>
                <Tabs key="tabD">
                  <div key="vd" label="Validation">
                    <OngletValidDossier type={"D"} />
                  </div>
                  <div key="ad" label="Autorisation">
                    After 'while, <em>Crocodile</em>!
                  </div>
                  <div key="afd" label="Affectation">
                    Nothing to see here, this tab is <em>extinct</em>!
                  </div>
                </Tabs>
              </Route>
              <Route path="/soutenance/habilitation">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Habilitation | Gestion des dossiers de soutenance
                </h3>
                <Tabs key="tabH">
                  <div key="vh" label="Validation">
                    <OngletValidDossier type={"H"} />
                  </div>
                  <div key="ah" label="Autorisation">
                    After 'while, <em>Crocodile</em>!
                  </div>
                  <div key="afh" label="Affectation">
                    Nothing to see here, this tab is <em>extinct</em>!
                  </div>
                </Tabs>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    );
  }
}

export default Home;
