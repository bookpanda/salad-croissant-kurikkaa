"use client";

import { FC } from "react";
import { MainPanel } from "./MainPanel";
import { Header } from "./Header";
import { Timer } from "./Timer";

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Timer />
      <MainPanel />
    </>
  );
};
