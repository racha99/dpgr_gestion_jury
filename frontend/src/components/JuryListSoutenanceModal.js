import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import EditForm from "./EditForm";
import axios from "axios";
import { API_URL } from "../constants";
import { Table } from "reactstrap";

class JuryListSoutenance extends Component {
  j_id = this.props.j_id;
  state = {
    modal: false,
   
    jurySnts: [],
    soutenances: []
    
  };
  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.getjury_list_soutenance();
    this.getSoutenances();
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
      jurySnts:!previous.jurySnts,
      soutenances:!previous.soutenances}))
  };

  getjury_list_soutenance = () => {
    axios
      .get(API_URL + "getjury_list_soutenance/"+this.j_id)
      .then((res) => this.setState({ jurySnts:res.data }));
  }; 

  getSoutenances = () => {
    axios
      .get(API_URL + "getSoutenances/")
      .then((res) => this.setState({ soutenances: res.data }));
  };
 

  render() {
    
    let mapTHEMES = new Map();
    mapTHEMES.set("ML", "Machine Learning");
    mapTHEMES.set("ST", "Systeme d'Information");
    mapTHEMES.set("SQ", "Systeme Informatique");
    mapTHEMES.set("RS", "Réseaux & Sécurité");
    mapTHEMES.set("GL", "Géni-Logiciel");
    let mapETATS = new Map();
    mapETATS.set("A", "Autorisée");
    mapETATS.set("R", "Refusée");
    mapETATS.set("N", "Non définie");
    mapETATS.set("C", "Cloturée");

    let mapTYPE = new Map();
    mapTYPE.set('D', "Doctorat");
    mapTYPE.set('H', "Habilitation");
   

    let mapROLE = new Map();
    mapROLE.set('JU', "Jury"); 
    mapROLE.set ('RP', "Rapporteur");
    mapROLE.set('DJ', "Directeur des Jurys");
    mapROLE.set('DR', "Directeur des Rapporteurs");
   
    var title = "liste des soutenance";
    var  jurySnts = this.state.jurySnts;

    

      return (
        <Fragment>
          <Button color="warning" onClick={() => {
          this.toggle();
          this.getjury_list_soutenance();
          this.getSoutenances();
        }}>
            voir list des soutenances
          </Button>

          <Modal onClosed={this.resetState} size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
            
            <ModalBody>
       
            <Table light>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Type</th>
            <th>Thème</th>
            <th>Sujet</th>
             <th>Etat soutenance</th>
            
            
           
          </tr>
        </thead>
        <tbody>
          {!this.state.jurySnts || this.state.jurySnts.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Aucune jury trouvée</b>
              </td>
            </tr>
          ) : (
            this.state.jurySnts.map((jurySnt) => (
              <tr key={jurySnt.js_id}>
                <td>{jurySnt.js_id}</td>
                <td>{mapROLE.get(jurySnt.role)}</td>
                {!this.state.soutenances || this.state.soutenances.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Aucune jury trouvée</b>
              </td>
            </tr>
          ) : (
            this.state.soutenances.map((soutenance) => (
             
                
                  
                soutenance.s_id== jurySnt.soutenance_id &&
                <Fragment>
               
                <td>{mapTYPE.get(soutenance.type)}</td>
                <td>{mapTHEMES.get(soutenance.theme)}</td>
               <td>{soutenance.sujet}</td>
               <td>{mapETATS.get(soutenance.etat)}</td>
                </Fragment>
                  
                  

                    
               
                
             
            ))
          )}
               
                
              </tr>
            ))
          )}
        </tbody>
      </Table>
            </ModalBody>
          </Modal>
        </Fragment>
      );
    } 
  }


export default  JuryListSoutenance;
