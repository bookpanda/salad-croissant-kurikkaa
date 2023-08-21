import { h2 } from "@/theme/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface ArrowProps extends PropsWithChildren {
  handleClick: () => void;
}

export const Arrow: FC<ArrowProps> = ({ handleClick, children }) => {
  return (
    <Flex mt="5vh" _hover={{ cursor: "pointer" }} onClick={() => handleClick()}>
      <Text fontSize={h2} fontWeight="semibold">
        {children}
      </Text>
    </Flex>
  );
};
