import { Button } from "react-bootstrap";
import React from "react";
import "./ApiService.jsx";
//Context needed from athlete that was searched
import GlobalContext from "../GlobalContext";
import { updateAthlete } from "./ApiService";

function UpdateData() {
  const { selectedAthlete, selectAthlete } = useContext(GlobalContext);
  return (
    <div>
      <Button onClick={updateAthlete}>Päivitä tietoja</Button>
    </div>
  );
}

export default UpdateData;
