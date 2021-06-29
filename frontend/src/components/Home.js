import React, { Component, Fragment } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../css/Home.css";

import Header from "./Header";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tabs from "./Tabs";
import OngletValidDossier from "./OngletValidDossier";
import OngletDesignationJury from "./OngletDesignationJury";
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
            <Switch>
              <Route path="/soutenance/doctorat/gestdossier">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Doctorat | Gestion des dossiers de soutenance
                </h3>
                <Tabs key="tabD">
                  <div key="vd" label="Validation">
                    <OngletValidDossier type={"D"} />
                  </div>
                  <div key="ad" label="Autorisation">
                    vide
                  </div>
                  <div key="afd" label="Affectation">
                    vide
                  </div>
                </Tabs>
              </Route>
              <Route path="/soutenance/doctorat/gestjury">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">Doctorat | Gestion des Jurys</h3>

                <Tabs key="tabD">
                  <div key="vd" label="Designation">
                    <OngletDesignationJury type={"D"} />
                  </div>
                  <div key="ad" label="Validation">
                    vide
                  </div>
                
                </Tabs>


              </Route>
              <Route path="/soutenance/doctorat/planning">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Doctorat | Planning des soutenances
                </h3>
              </Route>
              <Route path="/soutenance/doctorat/archive">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Doctorat | Archive des soutenances
                </h3>
              </Route>
              <Route path="/soutenance/habilitation/gestdossier">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Habilitation | Gestion des dossiers de soutenance
                </h3>
                <Tabs key="tabH">
                  <div key="vh" label="Validation">
                    <OngletValidDossier type={"H"} />
                  </div>
                  <div key="ah" label="Autorisation">
                    vide
                  </div>
                  <div key="afh" label="Affectation">
                    vide
                  </div>
                </Tabs>
              </Route>
              <Route path="/soutenance/habilitation/gestjury">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Habilitation | Gestion des Jurys
                </h3>

                <Tabs key="tabD">
                  <div key="vd" label="Designation">
                    <OngletDesignationJury type={"H"} />
                  </div>
                  <div key="ad" label="Validation">
                    vide
                  </div>
                
                </Tabs>
              </Route>
              <Route path="/soutenance/habilitation/planning">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Habilitation | Planning des soutenances
                </h3>
              </Route>
              <Route path="/soutenance/habilitation/archive">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">
                  Habilitation | Archive des soutenances
                </h3>
              </Route>
              <Route path="/soutenance/doctorat">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">Doctorat</h3>

                <Menu type="doctorat"></Menu>
              </Route>
              <Route path="/soutenance/habilitation">
                <h1 className="title tbig">Soutenance</h1>
                <h3 className="title tsmall">Habilitation</h3>
                <Menu type="habilitation"></Menu>
              </Route>
            </Switch>
            <Sidebar
              sidebar_active={this.state.sidebar_active}
              action={this.handler}
              selected={window.location.pathname.slice(0)}
            />
          </BrowserRouter>
        </div>
      </Fragment>
    );
  }
}

export default Home;
