import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAllAthletes } from "./ApiService";
import { getAthlete } from "./ApiService";
import { GlobalContext } from "../GlobalContext";

function fetchFromDB(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const athlete = data.get("formBasicFetch");

  getAthlete(athlete);
}

function FetchData() {
  return (
    <div>
      <h1>Hae urheilijoiden tietoja</h1>
      <Form onSubmit={fetchFromDB}>
        <Form.Group controlId="formBasicFetch">
          <Form.Label>
            <Form.Control type="text" placeholder="Hae urheilijaa" />
          </Form.Label>
          <Button type="submit">Hae</Button>
        </Form.Group>
      </Form>
      <br />
      <Button onClick={getAllAthletes}>Hae kaikki urheilijat</Button>
    </div>
  );
}

export default FetchData;
