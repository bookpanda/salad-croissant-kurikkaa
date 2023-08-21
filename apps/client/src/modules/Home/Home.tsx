"use client";

import { FC } from "react";
import { MainPanel } from "./MainPanel";
import { Header } from "./Header";
import { Timer } from "./Timer";
import { Flex } from "@chakra-ui/react";
import { Results } from "./Results";

export const Home: FC = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Header />
      <Timer />
      <MainPanel />
      <Results />
    </Flex>
  );
};
