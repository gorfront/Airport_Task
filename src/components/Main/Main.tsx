import { tickets } from "../../../tickets.json";
import MainItem from "./MainItem";
import "./Main.css";
import { useMemo } from "react";
import { MainProps } from "../../utils/types";

const Main = ({ currency, stops }: MainProps) => {
  const filterdItems = useMemo(() => {
    const activeStop = stops
      .filter((stop) => stop.active)
      .map((el) => el.title);

    const filter = activeStop.flatMap((stop) => {
      switch (stop) {
        case "1 пересадка":
          return tickets.filter((item) => item.stops === 1);
        case "2 пересадки":
          return tickets.filter((item) => item.stops === 2);
        case "3 пересадки":
          return tickets.filter((item) => item.stops === 3);
        case "Без пересадок":
          return tickets.filter((item) => item.stops === 0);
        default:
          return tickets;
      }
    });

    return filter;
  }, [stops]);

  return (
    <div className="main">
      {filterdItems
        .sort((a, b) => a.price - b.price)
        .map((ticket) => (
          <MainItem
            key={ticket.price}
            price={ticket.price}
            departure_time={ticket.departure_time}
            arrival_time={ticket.arrival_time}
            stop={ticket.stops}
            origin={ticket.origin}
            origin_name={ticket.origin_name}
            departure_date={ticket.departure_date}
            arrival_date={ticket.arrival_date}
            destination_name={ticket.destination_name}
            carrier={ticket.carrier}
            destination={ticket.destination}
            currency={currency}
            stops={[]}
          />
        ))}
    </div>
  );
};

export default Main;
