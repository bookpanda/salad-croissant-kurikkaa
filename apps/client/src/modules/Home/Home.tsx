"use client";

import { h1 } from "@/theme/fontSizes";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <Text fontSize={h1}>Salad croissant</Text>
      <Flex w={"20vw"} justifyContent={"space-between"}>
        <Flex flexDir="column" gap={2}>
          <Text>SALAD</Text>
          <Button>Press</Button>
        </Flex>
        <Flex flexDir="column" gap={2}>
          <Text>CROISSANT</Text>
          <Button>Press</Button>
        </Flex>
      </Flex>
    </>
  );
};
