"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AppContext } from "./appContext";
import { createSocketWithHandlers } from "@/socket-io";
import { socketIOUrl } from "../../socket-io";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  let socket = null;
  const initializeSocket = () => {
    if (!socket) socket = createSocketWithHandlers({ socketIOUrl, context });
    return;
  };

  const [countSalad, setCountSalad] = useState(0);
  const [countCroissant, setCountCroissant] = useState(0);

  useEffect(() => {
    initializeSocket();
  }, []);

  const click = (type: "salad" | "croissant") => {
    if (type === "salad") {
      setCountSalad(countSalad + 1);
    } else {
      setCountCroissant(countCroissant + 1);
    }
  };

  const context = {
    socket,
    initializeSocket,
    countSalad,
    countCroissant,
    click,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
