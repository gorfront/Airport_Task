import { useState } from "react";
import Asside from "../Asside/Asside";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Home.css";
import { CURRENCY, STOPS } from "../../utils/constants";

const Home = () => {
  const [currency, setCurrency] = useState(CURRENCY);
  const [stops, setStops] = useState(STOPS);

  return (
    <div>
      <Header />
      <div className="body">
        <Asside
          currency={currency}
          setCurrency={setCurrency}
          stops={stops}
          setStops={setStops}
        />
        <Main currency={currency} stops={stops} />
      </div>
    </div>
  );
};
export default Home;
