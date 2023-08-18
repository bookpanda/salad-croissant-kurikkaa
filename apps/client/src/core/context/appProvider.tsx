"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [countSalad, setCountSalad] = useState(0);
  const [countCroissant, setCountCroissant] = useState(0);

  useEffect(() => {}, [countSalad, countCroissant]);

  const click = (type: "salad" | "croissant") => {
    if (type === "salad") {
      setCountSalad(countSalad + 1);
    } else {
      setCountCroissant(countCroissant + 1);
    }
  };

  return (
    <AppContext.Provider value={{ countSalad, countCroissant, click }}>
      {children}
    </AppContext.Provider>
  );
};
