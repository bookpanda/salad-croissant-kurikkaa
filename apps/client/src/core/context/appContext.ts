import { createContext, useContext } from "react";

interface IAppContext {
  countSalad: number;
  countCroissant: number;
  click: (type: "salad" | "croissant") => void;
}

export const AppContext = createContext<IAppContext>({
  countCroissant: 0,
  countSalad: 0,
  click: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}
