"use client";

import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { AppContext } from "./appContext";
import { createSocketWithHandlers } from "@/socket-io";
import { socketIOUrl } from "../../socket-io";
import { Scores } from "./types";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const initializeSocket = () => {
    if (!socket) setSocket(createSocketWithHandlers({ socketIOUrl, context }));
    return;
  };

  const [countSalad, setCountSalad] = useState(0);
  const [countCroissant, setCountCroissant] = useState(0);

  useEffect(() => {
    initializeSocket();
  }, []);

  const click = async (type: "salad" | "croissant") => {
    try {
      await socket.emit("click", { choice: type });
    } catch (error) {
      console.log("Error clicking", error);
    }
  };

  const updateScores = (scores: Scores) => {
    if (scores) {
      setCountSalad(scores.salad);
      setCountCroissant(scores.croissant);
    }
  };

  const context = {
    socket,
    initializeSocket,
    countSalad,
    countCroissant,
    click,
    updateScores,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
