import React from "react";
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
} from "@chakra-ui/react";
import Link from "next/link";

export const Navbar = () => {
  return (
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
  );
};
