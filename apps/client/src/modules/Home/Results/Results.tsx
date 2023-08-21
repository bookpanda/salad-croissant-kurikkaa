import { Box, Flex } from "@chakra-ui/react";
import { FC, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  Legend,
  Text,
} from "recharts";
import { Arrow } from "./Arrow";
import { useAppContext } from "@/core/context/appContext";

export const Results: FC = () => {
  const { results } = useAppContext();
  const graph = useRef<HTMLDivElement>();
  const scrollToGraph = () => {
    graph.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const data = results.map(({ salad, croissant, createdAt }) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return { salad, croissant, name: formattedDate };
  });
  data.reverse();

  return (
    <Flex flexDir="column" alignItems="center">
      <Arrow handleClick={() => scrollToGraph()}>👇 結果 👇 </Arrow>
      <Flex
        mt="80vh"
        mb="30vh"
        flexDir="column"
        alignItems="center"
        ref={graph}
      >
        <Flex
          justifyContent="center"
          width={{ base: "100vw", md: "80vw" }}
          overflow="auto"
        >
          <LineChart
            width={1000}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Line
              type="monotone"
              dataKey="salad"
              name="🥗"
              stroke="#77B255"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="croissant"
              name="🥐"
              stroke="#EA8508"
              strokeWidth={2}
            />
          </LineChart>
        </Flex>
        <Arrow handleClick={() => scrollToTop()}>👆 上に戻る 👆</Arrow>
      </Flex>
    </Flex>
  );
};
