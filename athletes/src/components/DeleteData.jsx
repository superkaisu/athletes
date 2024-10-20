import React from "react";
import "./ApiService.jsx";
import GlobalContext from "../GlobalContext";
import { Button } from "react-bootstrap";

function DeleteData() {
  const { selectedAthlete, selectAthlete } = useContext(GlobalContext);

  const deleteFromDB = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const athleteId = data.get("formBasicDelete");

    await deleteAthlete(athleteId);
    selectAthlete(null); // Clear the selected athlete after deletion
  };

  return (
    <div>
      <h1>Poista urheilija</h1>
      <Form onSubmit={deleteFromDB}>
        <Form.Group controlId="formBasicDelete">
          <Form.Label>
            <Form.Control
              type="text"
              placeholder="Poista urheilija ID:llä"
              name="formBasicDelete"
            />
          </Form.Label>
          <Button type="submit">Poista</Button>
        </Form.Group>
      </Form>
      {selectedAthlete && (
        <div>
          <p>{selectedAthlete.etunimi}</p>
          <p>{selectedAthlete.sukunimi}</p>
          <p>{selectedAthlete.kutsumanimi}</p>
          <p>{selectedAthlete.syntymävuosi}</p>
          <p>{selectedAthlete.paino}</p>
        </div>
      )}
    </div>
  );
}

export default DeleteData;
