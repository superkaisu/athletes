import { createContext, useState } from "react";
import React from "react";
import Athlete from "./Athlete";

const initialAthleteState = {
  selectedAthelete: null,
};

const GlobalContext = createContext(initialAthleteState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialAthleteState);

  const selectAthlete = (athlete) => {
    const athlete = new Athlete(
      athlete.id,
      athlete.etunimi,
      athlete.sukunimi,
      athlete.kutsumanimi,
      athlete.syntymävuosi,
      athlete.paino,
      athlete.kuva,
      athlete.laji,
      athlete.saavutukset
    );
    setState({ selectedAthelete: athlete });
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedAthelete: state.selectedAthelete,
        selectAthlete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
