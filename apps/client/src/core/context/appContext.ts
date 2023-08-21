import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";
import { Results, Scores } from "shared";

export interface IAppContext {
  socket: Socket | null;
  initializeSocket: () => void;
  countSalad: number;
  countCroissant: number;
  cooldown: number;
  isCooldown: boolean;
  click: (type: "salad" | "croissant") => void;
  updateScores: (scores: Scores) => void;
  results: Results;
}

export const AppContext = createContext<IAppContext>({
  socket: null,
  initializeSocket: () => {},
  countCroissant: 0,
  countSalad: 0,
  cooldown: 0,
  isCooldown: false,
  click: () => {},
  updateScores: () => {},
  results: [],
});

export function useAppContext() {
  return useContext(AppContext);
}
