import { useNavigate, useParams } from "react-router-dom";
import { tickets } from "../../../tickets.json";
import { useState } from "react";

import "./Current.css";
import { CurrencyProps } from "../../utils/types";
import { calculatePrice, getCurrencySymbol } from "../../utils/hooks";

const Current = ({ currency }: Omit<CurrencyProps, "setCurrency">) => {
  const { price } = useParams();
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const current = tickets.filter((el) => el.price === Number(price));

  const activeCurrency = currency.find((el) => el.active)?.title || "RUB";
  const currencySymbol = getCurrencySymbol(activeCurrency);
  const displayedPrice = calculatePrice(Number(price), activeCurrency);

  return (
    <div className="current">
      <button onClick={() => navigate("/")} className="current--btn">
        Home
      </button>
      {current.map((el) => (
        <div key={el.price} className="current--item">
          <div className="current--item__img">
            <img src="turkish-airlines-logo.png" alt="turkish-airlines-logo" />
            <button>
              Купить за <br />
              {displayedPrice * counter} {currencySymbol}
            </button>
          </div>
          <div className="current--item__about">
            <p className="current--item__about--palce">
              <span className="current--item__about--palce--from">
                From:{" "}
                <b>
                  <i>{`${el.destination}, ${el.origin_name}`}</i>
                </b>
              </span>
              <span className="current--item__about--palce--to">
                To:{" "}
                <b>
                  <i>{`${el.carrier}, ${el.destination_name}`}</i>
                </b>
              </span>
            </p>
            <p className="current--item__about--time">
              <span className="current--item__about--time--from">
                Departure:{" "}
                <b>
                  <i>{`${el.departure_date}, ${el.departure_time}`}</i>
                </b>
              </span>
              <span className="current--item__about--time--to">
                Arrival:{" "}
                <b>
                  <i>{`${el.arrival_date}, ${el.arrival_time}`}</i>
                </b>
              </span>
            </p>
            <div className="current--item__about--count">
              <button
                className="current--item__about--count--btn"
                onClick={() => {
                  setCounter((prev) => (prev > 1 ? (prev -= 1) : 1));
                }}
              >
                -
              </button>
              <p className="current--item__about--count--counter">{counter}</p>
              <button
                className="current--item__about--count--btn"
                onClick={() => {
                  setCounter((prev) => (prev += 1));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Current;
