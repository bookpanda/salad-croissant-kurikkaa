import { h1 } from "@/theme/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Flex justifyContent="center" mt={10}>
      <Text fontSize={h1} fontWeight={"black"} textAlign="center">
        <span style={{ color: "#77B255" }}>サラダ</span>と
        <span style={{ color: "#EA8508" }}>クロワッサン</span>と
        <span style={{ color: "#0088CC" }}>青い惑星</span>
      </Text>
    </Flex>
  );
};
