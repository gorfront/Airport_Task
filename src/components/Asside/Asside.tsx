import { AssideProps } from "../../utils/types";
import Currency from "../Currency/Currency";
import Stops from "../Stops/Stops";
import "./Asside.css";

const Asside = ({
  currency,
  setCurrency,
  stops,
  setStops,
}: AssideProps) => {
  return (
    <div className="asside">
      <Currency
        currency={currency}
        setCurrency={setCurrency}
        stops={stops}
        setStops={setStops}
      />
      <Stops stops={stops} setStops={setStops} />
    </div>
  );
};
export default Asside;
