import { h2 } from "@/theme/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Arrow: FC = () => {
  return (
    <Flex>
      <Text fontSize={h2} fontWeight="semibold">
        👇 結果 👇
      </Text>
    </Flex>
  );
};
