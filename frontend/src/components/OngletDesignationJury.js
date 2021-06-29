import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import JuryList from "./JuryList";

import axios from "axios";

import { API_URL } from "../constants";

class OngletDesignationJury extends Component {
  
  state = {
    jurys: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getJurys = () => {
    axios
      .get(API_URL + "getJurys/")
      .then((res) => this.setState({ jurys: res.data }));
  };

  resetState = () => {
    this.getJurys();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <JuryList
              jurys={this.state.jurys}
              resetState={this.resetState}
             
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OngletDesignationJury;
