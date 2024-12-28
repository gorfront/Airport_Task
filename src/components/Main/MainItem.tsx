import { useNavigate } from "react-router-dom";
import { Main, MainProps } from "../../utils/types";
import "./Main.css";
import { calculatePrice, getCurrencySymbol } from "../../utils/hooks";

const MainItem: React.FC<Main & MainProps> = ({
  price,
  departure_time,
  arrival_time,
  origin,
  origin_name,
  departure_date,
  arrival_date,
  destination_name,
  destination,
  currency,
  stop,
}) => {
  const navigate = useNavigate();
  const activeCurrency = currency.find((el) => el.active)?.title || "RUB";

  const formatDate = (input: string): string => {
    const [day, month, year] = input.split(".").map(Number);
    const fullYear = year < 100 ? 2000 + year : year;
    const date = new Date(fullYear, month - 1, day);

    const options: Intl.DateTimeFormatOptions = { weekday: "short" };
    const weekday = new Intl.DateTimeFormat("ru-RU", options).format(date);

    const months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];

    return `${day} ${months[month - 1]} ${fullYear}, ${weekday}`;
  };

  const currencySymbol = getCurrencySymbol(activeCurrency);
  const displayedPrice = calculatePrice(price, activeCurrency);

  return (
    <div className="main--item" onClick={() => navigate(`/${price}`)}>
      <div className="main--item--left">
        <img src="turkish-airlines-logo.png" alt="Turkish Airlines Logo" />
        <button>
          <span>Купить</span>
          <br />
          <span>
            за {displayedPrice} {currencySymbol}
          </span>
        </button>
      </div>

      <div className="main--item--right">
        <div className="main--item--right--top">
          <h2 className="main--item--right--top--time">{departure_time}</h2>
          <div className="main--item--right--top--middle">
            <p className="main--item--right--top--middle--count">
              {stop} {stop > 1 ? "ПЕРЕСАДКИ" : "ПЕРЕСАДКА"}
            </p>
            <div className="main--item--right--top--middle--body">
              <div className="main--item--right--top--middle--body--line"></div>
              <img src="airplane.png" alt="Airplane" />
            </div>
          </div>
          <h2 className="main--item--right--date--time">{arrival_time}</h2>
        </div>

        <div className="main--item--right--about">
          <div className="main--item--right--about--destination">
            <p className="main--item--right--about--destination--city">
              {origin}, {origin_name}
            </p>
            <p className="main--item--right--about--destination--date">
              {formatDate(departure_date)}
            </p>
          </div>
          <div className="main--item--right--about--destination">
            <p className="main--item--right--about--destination--city">
              {destination_name}, {destination}
            </p>
            <p className="main--item--right--about--destination--date">
              {formatDate(arrival_date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
