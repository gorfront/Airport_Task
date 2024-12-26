export interface Item {
  id: number;
  title: string;
  active: boolean;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface StopsProps {
  stops: Item[];
  setStops: SetState<Item[]>;
}

export interface CurrencyProps {
  currency: Item[];
  setCurrency: React.Dispatch<React.SetStateAction<Item[]>>;
}

export interface AssideProps extends StopsProps, CurrencyProps {}

export interface MainProps {
  currency: Item[];
  stops: Item[];
}

export interface Main {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stop: number;
  price: number;
}
