import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ImageButton } from "./ImageButton";
import { useAppContext } from "@/core/context/appContext";
import { h2 } from "@/theme/fontSizes";

interface ClickerProps {
  item: "salad" | "croissant";
  count: number;
}

export const Clicker: FC<ClickerProps> = ({ item, count }) => {
  const { click, isCooldown } = useAppContext();
  return (
    <Flex flexDir="column" alignItems="center" gap={{ base: 3, lg: 5, xl: 8 }}>
      <Text fontWeight="bold" fontSize={h2}>
        {count}
      </Text>
      <ImageButton src={item} />
      <Button
        colorScheme="telegram"
        isDisabled={isCooldown}
        onClick={() => click(item)}
      >
        押す
      </Button>
    </Flex>
  );
};
