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
  const { click } = useAppContext();
  return (
    <Flex flexDir="column" alignItems="center" gap={8}>
      <Text fontSize={h2}>{count}</Text>
      <ImageButton src={item} />
      <Button onClick={() => click(item)}>押す</Button>
    </Flex>
  );
};
