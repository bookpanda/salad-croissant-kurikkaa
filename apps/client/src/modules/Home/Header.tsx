import { h1 } from "@/theme/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Flex justifyContent="center">
      <Text fontSize={h1} fontWeight={"black"}>
        サラダ　ー　クロワッサン
      </Text>
    </Flex>
  );
};
