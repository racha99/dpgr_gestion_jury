import React, { Component } from "react";
import { Table } from "reactstrap";
import ValidDossierModal from "./ValidDossierModal";

import RefusDossierModal from "./RefusDossierModal";

class SoutenanceList extends Component {
  render() {
    const soutenances = this.props.soutenances;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom lauréat</th>
            <th>Thème</th>
            <th>Sujet</th>
            <th>Dossier</th>
            <th>Etat soutenance</th>
            <th>Etat dossier</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!soutenances || soutenances.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Aucune soutenance trouvée</b>
              </td>
            </tr>
          ) : (
            soutenances.map((soutenance) => (
              <tr key={soutenance.s_id}>
                <td>{soutenance.s_id}</td>
                <td>{soutenance.laureat_nom}</td>
                <td>{soutenance.theme}</td>
                <td>{soutenance.sujet}</td>
                <td>
                  {" "}
                  <a href={soutenance.dossier_lien}>dossier</a>
                </td>
                <td>{soutenance.etat}</td>
                <td>{soutenance.dossier_etat}</td>
                <td align="center">
                  <ValidDossierModal
                    soutenance={soutenance}
                    resetState={this.props.resetState}
                    type={this.props.type}
                  />
                  &nbsp;&nbsp;
                  <RefusDossierModal
                    soutenance={soutenance}
                    resetState={this.props.resetState}
                    type={this.props.type}
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

export default SoutenanceList;
