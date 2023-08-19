import { useAppContext } from "@/core/context/appContext";
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Clicker } from "./Clicker";

export const MainPanel: FC = () => {
  const { countSalad, countCroissant } = useAppContext();
  return (
    <Flex
      w={{ base: "100%", lg: "70%", xl: "50%" }}
      justifyContent={"space-between"}
    >
      <Clicker item="salad" count={countSalad} />
      <Clicker item="croissant" count={countCroissant} />
    </Flex>
  );
};
