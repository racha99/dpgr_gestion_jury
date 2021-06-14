import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import EditForm from "./EditForm";

class ValidDossierModal extends Component {
  state = {
    modal: false,
  };

  type = this.props.type;

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {
    const etat = this.props.soutenance.dossier_etat;

    var title = "";
    var button = <Button></Button>;
    var new_etat = "";

    if (etat === "V" || etat === "A") {
      if (etat === "A") {
        title = "Validation du dossier";
        new_etat = "V";
        button = (
          <Button
            color="primary"
            //className="float-right"
            onClick={this.toggle}
            //style={{ minWidth: "200px" }}
          >
            Valider
          </Button>
        );
      } else {
        title = "Remise en attente";
        new_etat = "A";
        button = (
          <Button color="warning" onClick={this.toggle}>
            Mettre en attente
          </Button>
        );
      }

      return (
        <Fragment>
          {button}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

            <ModalBody>
              <EditForm
                resetState={this.props.resetState}
                toggle={this.toggle}
                soutenance={this.props.soutenance}
                etat={new_etat}
              />
            </ModalBody>
          </Modal>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

export default ValidDossierModal;
