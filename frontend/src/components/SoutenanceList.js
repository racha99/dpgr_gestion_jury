import React, { Component } from "react";
import { Table } from "reactstrap";
import ValidDossierModal from "./ValidDossierModal";

import RefusDossierModal from "./RefusDossierModal";

class SoutenanceList extends Component {
  sETATS = {
    A: "Autorisée",
    R: "Refusée",
    N: "Non définie",
    C: "Cloturée",
  };

  sETATS_D = {
    V: "Validé",
    R: "Refusé",
    A: "En attente",
  };

  render() {
    const soutenances = this.props.soutenances;

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

    let mapETATS_D = new Map();
    mapETATS_D.set("V", "Validé");
    mapETATS_D.set("R", "Refusé");
    mapETATS_D.set("A", "En attente");

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
                <td>{mapTHEMES.get(soutenance.theme)}</td>
                <td>{soutenance.sujet}</td>
                <td>
                  {" "}
                  <a href={soutenance.dossier_lien}>dossier</a>
                </td>
                <td>{mapETATS.get(soutenance.etat)}</td>
                <td>{mapETATS_D.get(soutenance.dossier_etat)}</td>
                <td align="center">
                  <ValidDossierModal
                    soutenance={soutenance}
                    resetState={this.props.resetState}
                    type={this.props.type}
                  />
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
