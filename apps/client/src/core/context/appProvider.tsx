"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AppContext } from "./appContext";
import { createSocketWithHandlers } from "@/socket-io";
import { socketIOUrl } from "../../socket-io";
import { Results, Scores } from "shared";
import { getResults } from "../api/getResults";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const initializeSocket = () => {
    if (!socket) setSocket(createSocketWithHandlers({ socketIOUrl, context }));
    return;
  };

  const [countSalad, setCountSalad] = useState(0);
  const [countCroissant, setCountCroissant] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);
  const [results, setResults] = useState<Results>([]);

  useEffect(() => {
    initializeSocket();
    const fetchResults = async () => {
      const data = await getResults();
      setResults(data.data);
    };
    fetchResults();
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      setIsCooldown(true);
      const timeout = setTimeout(() => {
        setIsCooldown(false);
      }, cooldown);

      return () => clearTimeout(timeout);
    } else {
      setIsCooldown(false);
    }
  }, [cooldown]);

  const click = async (type: "salad" | "croissant") => {
    if (!isCooldown) {
      try {
        await socket.emit("click", { choice: type });
      } catch (error) {
        console.log("Error clicking", error);
      }
    }
  };

  const updateScores = (scores: Scores) => {
    if (scores) {
      setCountSalad(scores.salad);
      setCountCroissant(scores.croissant);
      setCooldown(scores.cooldown);
    }
  };

  const context = {
    socket,
    initializeSocket,
    countSalad,
    countCroissant,
    cooldown,
    isCooldown,
    click,
    updateScores,
    results,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
