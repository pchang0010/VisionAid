import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "../components/Navbar";
import type { NextPage } from "next";
import { Container, Text, Stack, Image } from "@chakra-ui/react";

const Root = styled.div`
  height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <Root>
      <Navbar />
      <Container>
        <Stack>
          <Text fontSize="xx-large">About us</Text>
          <Text fontSize="medium">
            Vision-Aid Academy is a nonprofit organization that specializes in
            helping people with visual impairments through offering courses that
            are taught with an emphasis on accessibility.
          </Text>
          <Image src="banner.png" />
          <Image src="wheel.png" />
        </Stack>
      </Container>
    </Root>
  );
};

export default Home;
