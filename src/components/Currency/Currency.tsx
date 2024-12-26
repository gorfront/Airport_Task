import { AssideProps } from "../../utils/types";
import "./Currency.css";

const Currency = ({ currency, setCurrency }: AssideProps) => {
  const activeCurrencyHandler = (id: number) => {
    setCurrency(
      currency.map((el) =>
        el.id === id ? { ...el, active: !el.active } : { ...el, active: false }
      )
    );
  };
  return (
    <div className="currency">
      <h2 className="currency--title">валюта</h2>
      <ul className="currency--list">
        {currency.map((el) => (
          <li
            onClick={() => activeCurrencyHandler(el.id)}
            key={el.id}
            className={
              el.active
                ? `currency--list--item currency--list--item--active`
                : "currency--list--item"
            }
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Currency;
