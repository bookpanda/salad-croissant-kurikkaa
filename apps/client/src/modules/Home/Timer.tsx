import { h4 } from "@/theme/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Timer: FC = () => {
  return (
    <Flex justifyContent="center" mt="10vh">
      <CountdownCircleTimer
        isPlaying
        size={200}
        duration={7}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => (
          <Text fontSize={h4} fontWeight={"bold"}>
            {remainingTime}
          </Text>
        )}
      </CountdownCircleTimer>
    </Flex>
  );
};
