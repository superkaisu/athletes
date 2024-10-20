import { createContext, useState } from "react";
import React from "react";
import Athlete from "./Athlete";

const initialAthleteState = {
  selectedAthlete: null,
};

const GlobalContext = createContext(initialAthleteState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialAthleteState);

  const selectAthlete = (userSelectedAthlete) => {
    const athlete = new Athlete(
      userSelectedAthlete.id,
      userSelectedAthlete.etunimi,
      userSelectedAthlete.sukunimi,
      userSelectedAthlete.kutsumanimi,
      userSelectedAthlete.syntymävuosi,
      userSelectedAthlete.paino,
      userSelectedAthlete.kuva,
      userSelectedAthlete.laji,
      userSelectedAthlete.saavutukset
    );
    setState({ selectedAthlete: athlete });
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedAthelete: state.selectedAthlete,
        selectAthlete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
