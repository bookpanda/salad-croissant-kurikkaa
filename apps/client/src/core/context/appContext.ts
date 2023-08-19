import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";
import { Scores } from "./types";

export interface IAppContext {
  socket: Socket | null;
  initializeSocket: () => void;
  countSalad: number;
  countCroissant: number;
  click: (type: "salad" | "croissant") => void;
  updateScores: (scores: Scores) => void;
}

export const AppContext = createContext<IAppContext>({
  socket: null,
  initializeSocket: () => {},
  countCroissant: 0,
  countSalad: 0,
  click: () => {},
  updateScores: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}