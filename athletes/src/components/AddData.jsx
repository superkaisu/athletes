import React from "react";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { addNewAthlete } from "./ApiService";

function AddData() {
  const { selectAthlete } = useContext(GlobalContext);

  const addToDB = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const newAthlete = {
      etunimi: data.get("etunimi"),
      sukunimi: data.get("sukunimi"),
      kutsumanimi: data.get("kutsumanimi"),
      syntymävuosi: data.get("syntymävuosi"),
      paino: data.get("paino"),
      kuva: data.get("kuva"),
      laji: data.get("laji"),
      saavutukset: data.get("saavutukset"),
    };

    const addedAthlete = await addNewAthlete(newAthlete);
    selectAthlete(addedAthlete); // Set the newly added athlete as selected
  };

  return (
    <div>
      <h1>Lisää urheilija</h1>
      <Form onSubmit={addToDB}>
        <Form.Group controlId="etunimi">
          <Form.Label>Etunimi</Form.Label>
          <Form.Control type="text" name="etunimi" />
        </Form.Group>
        <Form.Group controlId="sukunimi">
          <Form.Label>Sukunimi</Form.Label>
          <Form.Control type="text" name="sukunimi" />
        </Form.Group>
        <Form.Group controlId="kutsumanimi">
          <Form.Label>Kutsumanimi</Form.Label>
          <Form.Control type="text" name="kutsumanimi" />
        </Form.Group>
        <Form.Group controlId="syntymävuosi">
          <Form.Label>Syntymävuosi</Form.Label>
          <Form.Control type="text" name="syntymävuosi" />
        </Form.Group>
        <Form.Group controlId="paino">
          <Form.Label>Paino</Form.Label>
          <Form.Control type="text" name="paino" />
        </Form.Group>
        <Form.Group controlId="kuva">
          <Form.Label>Kuva</Form.Label>
          <Form.Control type="text" name="kuva" />
        </Form.Group>
        <Form.Group controlId="laji">
          <Form.Label>Laji</Form.Label>
          <Form.Control type="text" name="laji" />
        </Form.Group>
        <Form.Group controlId="saavutukset">
          <Form.Label>Saavutukset</Form.Label>
          <Form.Control type="text" name="saavutukset" />
        </Form.Group>
        <Button type="submit">Lisää</Button>
      </Form>
    </div>
  );
}

export default AddData;
