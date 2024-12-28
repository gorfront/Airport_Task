import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Current from "./components/Current/Current";
import { useState } from "react";
import { CURRENCY } from "./utils/constants";

function App() {
  const [currency, setCurrency] = useState(CURRENCY);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home currency={currency} setCurrency={setCurrency} />}
        />
        <Route path=":price" element={<Current currency={currency} />} />
      </Routes>
    </>
  );
}

export default App;
