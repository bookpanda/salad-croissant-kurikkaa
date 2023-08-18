"use client";

import { useAppContext } from "@/core/context/appContext";
import { h1 } from "@/theme/fontSizes";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Home: FC = () => {
  const { countSalad, countCroissant, click } = useAppContext();
  return (
    <>
      <Text fontSize={h1}>Salad croissant</Text>
      <Flex w={"20vw"} justifyContent={"space-between"}>
        <Flex flexDir="column" gap={2}>
          <Text>SALAD</Text>
          <Button onClick={() => click("salad")}>Press</Button>
          <Text>COUNT: {countSalad}</Text>
        </Flex>
        <Flex flexDir="column" gap={2}>
          <Text>CROISSANT</Text>
          <Button onClick={() => click("croissant")}>Press</Button>
          <Text>COUNT: {countCroissant}</Text>
        </Flex>
      </Flex>
    </>
  );
};
