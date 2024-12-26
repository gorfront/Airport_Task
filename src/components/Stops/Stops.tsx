import { StopsProps } from "../../utils/types";
import "./Stops.css";

const Stops = ({ stops, setStops }: StopsProps) => {
  const handlerCheck = (id: number) => {
    setStops((prevStops) => {
      let updatedStops = prevStops.map((el) => {
        if (id === 0) {
          return { ...el, active: el.id === 0 };
        } else {
          return {
            ...el,
            active: el.id === 0 ? false : el.id === id ? !el.active : el.active,
          };
        }
      });

      const hasActive = updatedStops.some((el) => el.id !== 0 && el.active);
      if (!hasActive) {
        updatedStops = updatedStops.map((el) => ({
          ...el,
          active: el.id === 0,
        }));
      }

      return updatedStops;
    });
  };

  return (
    <div className="stops">
      <h2 className="stops--title">количество пересадок</h2>
      <ul className="stops--list">
        {stops.map((el) => (
          <li
            key={el.id}
            className="stops--list--item"
            onClick={() => handlerCheck(el.id)}
          >
            <input
              type="checkbox"
              className="stops--list--item--check"
              checked={el.active}
              readOnly
            />
            <span>{el.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stops;
