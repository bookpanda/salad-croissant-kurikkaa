import { Flex } from "@chakra-ui/react";
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

export const Results: FC = () => {
  const graph = useRef<HTMLDivElement>();
  const scrollToGraph = () => {
    graph.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const data = [
    { name: "a", salad: 1, croissant: 2 },
    { name: "a", salad: 10, croissant: 2 },
    { name: "a", salad: 12, croissant: 2 },
    { name: "a", salad: 1, croissant: 22 },
    { name: "a", salad: 1, croissant: 5 },
  ];
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
          <Line type="monotone" dataKey="salad" name="🥗" stroke="#77B255" />
          <Line
            type="monotone"
            dataKey="croissant"
            name="🥐"
            stroke="#EA8508"
          />
        </LineChart>
        <Arrow handleClick={() => scrollToTop()}>👆 上に戻る 👆</Arrow>
      </Flex>
    </Flex>
  );
};
