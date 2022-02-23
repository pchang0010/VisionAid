import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Navbar } from "../../components/Navbar";
import type { NextPage } from "next";
import { Container, Text, Stack } from "@chakra-ui/react";

const Root = styled.div`
  height: 100vh;
`;

const Courses: NextPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "http://ec2-3-87-215-83.compute-1.amazonaws.com:8080/course/get_all",
      { mode: "navigate" }
    ).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <Root>
      <Navbar />
      <Container>
        <Stack>
          <Text fontSize="medium">List of courses eventually over here</Text>
        </Stack>
      </Container>
    </Root>
  );
};

export default Courses;
