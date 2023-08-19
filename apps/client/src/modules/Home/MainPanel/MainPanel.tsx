import { useAppContext } from "@/core/context/appContext";
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Clicker } from "./Clicker";

export const MainPanel: FC = () => {
  const { countSalad, countCroissant } = useAppContext();
  return (
    <Flex w="100%" bgColor="pink" justifyContent={"space-between"}>
      <Clicker item="salad" count={countSalad} />
      <Clicker item="croissant" count={countCroissant} />
    </Flex>
  );
};
