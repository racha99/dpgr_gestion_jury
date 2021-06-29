import React, { Component } from "react";
import { Table } from "reactstrap";
import ValidDossierModal from "./ValidDossierModal";

import RefusDossierModal from "./RefusDossierModal";

import JuryListSoutenanceModal from "./JuryListSoutenanceModal";

class JuryList extends Component {
  type = this.props.type;

  render() {
    const jurys = this.props.jurys;

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

    let mapTYPES = new Map();
    mapTYPES.set("E", "Expert");
    mapTYPES.set("P", "Professeur");
  


   

    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom </th>
            <th>Prenom</th>
            <th>Domaine d'expértise</th>
            <th>Type</th>
            <th>Telephone</th>
            <th>Adress email</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {!jurys || jurys.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Aucune jury trouvée</b>
              </td>
            </tr>
          ) : (
            jurys.map((jury) => (
              <tr key={jury.j_id}>
                <td>{jury.j_id}</td>
                <td>{jury.nom}</td>
                <td>{jury.prenom}</td>
                <td>{jury.domaine_xp}</td>
                <td>{mapTYPES.get(jury.type)}</td>
                <td>{jury.tel_num} </td>
                <td>{jury.email} </td>

                <td align="center">
                <JuryListSoutenanceModal
                j_id={jury.j_id}
                type={this.type}
                />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default JuryList;
