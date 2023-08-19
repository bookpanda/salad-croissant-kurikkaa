"use client";

import { FC } from "react";
import { MainPanel } from "./MainPanel";
import { Header } from "./Header";
import { Timer } from "./Timer";
import { Flex } from "@chakra-ui/react";

export const Home: FC = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Header />
      <Timer />
      <MainPanel />
    </Flex>
  );
};
