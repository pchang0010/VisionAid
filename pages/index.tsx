import React from "react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import {
  Flex,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Button,
  Container,
  Text,
  Stack,
} from "@chakra-ui/react";

const Root = styled.div`
  height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <body>
      <Root>
        <Flex as="nav" align="center">
          <Box>
            <Image
              src="banner.webp"
              htmlHeight={200}
              htmlWidth={300}
              onClick={() => {
                window.location.href = "/";
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Button
              variant="ghost"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </Button>
            <Menu autoSelect={false}>
              <MenuButton as={Button} variant="ghost">
                Students
              </MenuButton>
              <MenuList>
                <MenuItem>List students</MenuItem>
                <MenuItem>Add a student</MenuItem>
              </MenuList>
            </Menu>
            <Menu autoSelect={false}>
              <MenuButton as={Button} variant="ghost">
                Courses
              </MenuButton>
              <MenuList>
                <MenuItem>List courses</MenuItem>
                <MenuItem>Add a course</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Menu autoSelect={false}>
            <MenuButton as={Button} variant="ghost">
              My Account
            </MenuButton>
            <MenuList>
              <MenuItem>Account settings</MenuItem>
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {/* NON NAVBAR CODE STARTS HERE */}
        <Container>
          <Stack>
            <Text fontSize="xx-large">About us</Text>
            <Text fontSize="medium">
              Vision-Aid Academy is a nonprofit organization that specializes in
              helping people with visual impairments through offering courses
              that are taught with an emphasis on accessibility.
            </Text>
            <Image src="banner.png" />
            <Image src="wheel.png" />
          </Stack>
        </Container>
      </Root>
    </body>
  );
};

export default Home;
