import { useState, React } from "react";
import GlobalProvider from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./App.css";
import AddData from "./components/AddData";
import DeleteData from "./components/DeleteData";
import UpdateData from "./components/UpdateData";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchData />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/delete" element={<DeleteData />} />
          <Route path="/update" element={<UpdateData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
