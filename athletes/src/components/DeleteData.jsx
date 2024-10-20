import React from "react";
import "./ApiService.jsx";
import { GlobalContext } from "../GlobalContext";
import { Button } from "react-bootstrap";

function DeleteData() {
  return (
    <div>
      <Button onClick={deleteAthlete}>Poista urheilija</Button>
    </div>
  );
}

export default DeleteData;
