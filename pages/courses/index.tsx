import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "../../components/Navbar";
import type { NextPage } from "next";
import { Container, Text, Stack } from "@chakra-ui/react";

const Root = styled.div`
  height: 100vh;
`;

const Courses: NextPage = () => {
  return (
    <body>
      <Root>
        <Navbar />
        <Container>
          <Stack>
            <Text fontSize="medium">List of courses eventually over here</Text>
          </Stack>
        </Container>
      </Root>
    </body>
  );
};

export default Courses;
