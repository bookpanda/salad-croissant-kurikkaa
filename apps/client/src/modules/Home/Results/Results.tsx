import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
} from "recharts";
import { Arrow } from "./Arrow";

export const Results: FC = () => {
  const data = [
    { name: "a", salad: 1, croissant: 2 },
    { name: "a", salad: 10, croissant: 2 },
    { name: "a", salad: 12, croissant: 2 },
    { name: "a", salad: 1, croissant: 22 },
    { name: "a", salad: 1, croissant: 5 },
  ];
  return (
    <Flex mt="5vh" flexDir="column" alignItems="center">
      <Arrow />
      <Flex mt="50vh">
        <LineChart
          width={1000}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="salad" stroke="#ff7300" />
          <Line type="monotone" dataKey="croissant" stroke="#387908" />
        </LineChart>
      </Flex>
    </Flex>
  );
};
