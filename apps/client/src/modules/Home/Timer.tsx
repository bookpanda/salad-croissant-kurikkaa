import { useAppContext } from "@/core/context/appContext";
import { h4 } from "@/theme/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Timer: FC = () => {
  const { cooldown } = useAppContext();
  const [key, setKey] = useState(0);
  const duration = Math.max(cooldown - new Date().getTime(), 0) / 1000;

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [cooldown]);

  return (
    <Flex justifyContent="center" mt="10vh">
      <CountdownCircleTimer
        key={key}
        isPlaying
        size={200}
        duration={5}
        initialRemainingTime={duration}
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
