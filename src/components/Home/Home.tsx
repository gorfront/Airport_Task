import { useState } from "react";
import Asside from "../Asside/Asside";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Home.css";
import { STOPS } from "../../utils/constants";
import { CurrencyProps } from "../../utils/types";

const Home = ({ currency, setCurrency }: CurrencyProps) => {
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
