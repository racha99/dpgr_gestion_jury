import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SoutenanceList from "./SoutenanceList";

import axios from "axios";

import { API_URL } from "../constants";

class OngletValidDossier extends Component {
  type = this.props.type;

  state = {
    soutenances: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getSoutenances = () => {
    axios
      .get(API_URL + "getStnList/" + this.type)
      .then((res) => this.setState({ soutenances: res.data }));
  };

  resetState = () => {
    this.getSoutenances();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <SoutenanceList
              soutenances={this.state.soutenances}
              resetState={this.resetState}
              type={this.type}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OngletValidDossier;
