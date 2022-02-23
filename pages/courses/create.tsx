import React, { useState } from "react";
import styled from "@emotion/styled";
import { Navbar } from "../../components/Navbar";
import type { NextPage } from "next";
import {
  Container,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  VStack,
  Spacer,
  Select,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Root = styled.div`
  height: 100vh;
`;

const Students: NextPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Root>
      <Navbar />
      <Container>
        <Stack>
          <Text fontSize="large" as="b">
            Add a course
          </Text>
          <Spacer />
          <Formik
            initialValues={{
              start_date: `${startDate.getFullYear()}-${
                startDate.getMonth() + 1
              }-${startDate.getDate()}`,
            }}
            onSubmit={(values) => {
              console.log("Sending these values to the BE:", values);
              const response = fetch(
                "http://ec2-3-87-215-83.compute-1.amazonaws.com:8080/course_offering/create",
                {
                  method: "POST",
                  mode: "no-cors",
                  body: JSON.stringify(values),
                }
              );
              console.log(response);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <VStack spacing={10} align="flex-start">
                  <Box>
                    <Field name="course_id">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="course_id">Course ID</FormLabel>
                          <Input id="course_id" {...field} />
                        </FormControl>
                      )}
                    </Field>
                  </Box>

                  <Box>
                    <Field name="pm_user_id">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="pm_user_id">
                            Project Manager ID
                          </FormLabel>
                          <Input id="pm_user_id" {...field} />
                        </FormControl>
                      )}
                    </Field>
                  </Box>

                  <Box>
                    <Field name="trainer_id">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="trainer_id">Trainer ID</FormLabel>
                          <Input id="trainer_id" {...field} />
                        </FormControl>
                      )}
                    </Field>
                  </Box>

                  <Box>
                    <Field name="centre_id">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="centre_id">Centre ID</FormLabel>
                          <Input id="centre_id" {...field} />
                        </FormControl>
                      )}
                    </Field>
                  </Box>

                  <Box>
                    <Field name="mode">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="mode">Education Mode</FormLabel>
                          <Select
                            placeholder="Select option..."
                            id="mode"
                            {...field}
                          >
                            <option value="Virtual">Virtual</option>
                            <option value="Classroom">Classroom</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                  </Box>

                  <Box>
                    <FormControl isRequired>
                      <FormLabel htmlFor="start_date">Start Date</FormLabel>
                      <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => {
                          setStartDate(date);
                          setFieldValue(
                            "start_date",
                            `${date.getFullYear()}-${
                              date.getMonth() + 1
                            }-${date.getDate()}`
                          );
                        }}
                      />
                    </FormControl>
                  </Box>

                  <Button mt={4} colorScheme="teal" type="submit">
                    Submit
                  </Button>
                  <Spacer />
                </VStack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Container>
    </Root>
  );
};

export default Students;
