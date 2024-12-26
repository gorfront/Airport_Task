import { CombinedTypes } from "./types";

export const CURRENCY: CombinedTypes[] = [
  {
    id: 0,
    title: "RUB",
    active: true,
  },
  {
    id: 1,
    title: "USD",
    active: false,
  },
  {
    id: 2,
    title: "EUR",
    active: false,
  },
];

export const STOPS: CombinedTypes[] = [
  {
    id: 0,
    title: "Все",
    active: true,
  },
  {
    id: 1,
    title: "Без пересадок",
    active: false,
  },
  {
    id: 2,
    title: "1 пересадка",
    active: false,
  },
  {
    id: 3,
    title: "2 пересадки",
    active: false,
  },
  {
    id: 4,
    title: "3 пересадки",
    active: false,
  },
];
