"use client";

import { Container } from "@chakra-ui/react";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxW={{ base: "95%", md: "90%" }}>{children}</Container>
    </>
  );
};
