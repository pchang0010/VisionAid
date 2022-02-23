import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "../../components/Navbar";
import type { NextPage } from "next";
import { Container, Text, Stack } from "@chakra-ui/react";

const Root = styled.div`
  height: 100vh;
`;

const Students: NextPage = () => {
  return (
    <Root>
      <Navbar />
      <Container>
        <Stack>
          <Text fontSize="medium">List of students eventually over here</Text>
        </Stack>
      </Container>
    </Root>
  );
};

export default Students;
