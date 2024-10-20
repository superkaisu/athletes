import React from "react";
import { useState } from "react";

const API_BASE_URL = "http://localhost:3001";

export const getAllAthletes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/athletes`);
    const allWords = await response.json();
    return allWords;
  } catch (error) {
    console.error("Error fetching all words", error);
  }
};

export const getAthlete = async (searchWord) => {
  try {
    const response = await fetch(`${API_BASE_URL}/athletes/${id}`); //Tässä täytyy välittää id parametrina
    const word = await response.json();
    return word;
  } catch (error) {
    console.error("Error fetching athlete data", error);
  }
};

// Backend funktio tarvitsee JSON-objectin
// Huomioi käyttöliittymässä kaikkien tarvittavien kenttien syöttäminen
export const addNewAthlete = async (athleteJSON) => {
  //athleteJSON parametrina tälle funktiolle!!
  const path = `${API_BASE_URL}/athletes/lisaa`;

  console.log(wordString);

  try {
    const response = await fetch(path, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: wordString,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return data;
  } catch (error) {
    console.error("Error adding word", error);
    throw error;
  }
};

export const updateAthlete = async (athleteJSON) => {
  const path = `${API_BASE_URL}/athletes/${athleteJSON.id}`;

  try {
    const response = await fetch(path, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(athleteJSON),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return data;
  } catch (error) {
    console.error("Error updating athlete", error);
    throw error;
  }
};
