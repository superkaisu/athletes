import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAllAthletes, getAthlete } from "./ApiService";
import GlobalContext from "../GlobalContext";

function FetchData() {
  const { selectedAthlete, selectAthlete } = useContext(GlobalContext);

  const fetchFromDB = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const athlete = data.get("formBasicFetch");

    const fetchedAthlete = await getAthlete(athlete);
    selectAthlete(fetchedAthlete);
  };

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
      {selectedAthlete && (
        <div>
          <p>{selectedAthlete.etunimi}</p>
          <p>{selectedAthlete.sukunimi}</p>
          <p>{selectedAthlete.kutsumanimi}</p>
          <p>{selectedAthlete.syntymävuosi}</p>
          <p>{selectedAthlete.paino}</p>
          <p>{selectedAthlete.kuva}</p>
          <p>{selectedAthlete.laji}</p>
          <p>{selectedAthlete.saavutukset}</p>
        </div>
      )}
    </div>
  );
}

export default FetchData;
