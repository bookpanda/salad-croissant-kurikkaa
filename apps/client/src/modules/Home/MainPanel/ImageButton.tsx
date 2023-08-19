import { useAppContext } from "@/core/context/appContext";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface ImageButtonProps {
  src: "salad" | "croissant";
}

export const ImageButton: FC<ImageButtonProps> = ({ src }) => {
  const { click, isCooldown } = useAppContext();
  return (
    <Flex
      height="20vh"
      onClick={() => click(src)}
      _hover={{ cursor: isCooldown ? "not-allowed" : "pointer" }}
    >
      <Image
        src={`/images/${src}.webp`}
        alt="salad"
        width={200}
        height={200}
        unoptimized
        style={{
          objectFit: "scale-down",
          minHeight: "100%",
          filter: isCooldown ? "grayscale(60%)" : "none",
        }}
      />
    </Flex>
  );
};
