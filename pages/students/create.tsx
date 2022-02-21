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
  RadioGroup,
  HStack,
  Radio,
  NumberInput,
  NumberInputField,
  Textarea,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Box,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { Formik } from "formik";

const Root = styled.div`
  height: 100vh;
`;

const Students: NextPage = () => {
  const [submitting, setSubmitting] = useState(false);

  const [educationDetail, setEducationDetail] = useState("");
  const [employmentDetail, setEmploymentDetail] = useState("");
  const [expectations, setExpectations] = useState("");
  const [learningObjectives, setLearningObjectives] = useState("");
  const [visualImpairment, setVisualImpairment] = useState("");
  const [usableVision, setUsableVision] = useState("");
  const [referral, setReferral] = useState("");

  return (
    <body>
      <Root>
        <Navbar />
        <Container>
          <Stack>
            <Text fontSize="large" as="b">
              Add student
            </Text>
            <Spacer />
            <Formik
              initialValues={{}}
              onSubmit={(values, actions) => {
                console.log(values, actions);
                setTimeout(() => {
                  setSubmitting(false);
                }, 1000);
              }}
            >
              <VStack spacing={10} align="flex-start">
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" placeholder="Name" />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input id="email" type="email" />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl as="fieldset" isRequired>
                    <FormLabel as="legend">Gender</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                        <Radio value="other">Other</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl as="fieldset" isRequired>
                    <FormLabel as="legend">Visual Acuity</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="male">Fully blind</Radio>
                        <Radio value="female">Low vision</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                    <NumberInput>
                      <NumberInputField id="mobile" />
                    </NumberInput>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel htmlFor="whatsapp">What's App</FormLabel>
                    <NumberInput>
                      <NumberInputField id="whatsapp" />
                    </NumberInput>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">
                      Highest Education Received
                    </FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="graduate">Graduate</Radio>
                        <Radio value="intermediate">Intermediate</Radio>
                        <Radio value="class">Class</Radio>
                        <Radio value="other">Other</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>
                  <FormLabel>Education Detail</FormLabel>
                  <Textarea
                    value={educationDetail}
                    onChange={(event) => {
                      setEducationDetail(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>

                <Box>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">Mother Tongue</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="m_marathi">Marathi</Radio>
                        <Radio value="m_hindi">Hindi</Radio>
                        <Radio value="m_punjabi">Punjabi</Radio>
                        <Radio value="m_english">English</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">Education Tongue</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="e_marathi">Marathi</Radio>
                        <Radio value="e_hindi">Hindi</Radio>
                        <Radio value="e_punjabi">Punjabi</Radio>
                        <Radio value="e_english">English</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>
                  <FormLabel>Employment Detail</FormLabel>
                  <Textarea
                    value={employmentDetail}
                    onChange={(event) => {
                      setEmploymentDetail(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>
                <Box>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">Computer experience</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="yes_comp_exp">Yes</Radio>
                        <Radio value="no_comp_exp">No</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>
                  <FormLabel>Expectations for the program</FormLabel>
                  <Textarea
                    value={expectations}
                    onChange={(event) => {
                      setExpectations(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>

                <Box>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">
                      Permission to share your information
                    </FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        <Radio value="yes_share_perm">Yes</Radio>
                        <Radio value="no_share_perm">No</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box>Left out bank account details here</Box>

                <Box>
                  <FormLabel>Learning objectives</FormLabel>
                  <Textarea
                    value={learningObjectives}
                    onChange={(event) => {
                      setLearningObjectives(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>

                <Box>
                  <FormLabel>Describe your visual impairment</FormLabel>
                  <Textarea
                    value={visualImpairment}
                    onChange={(event) => {
                      setVisualImpairment(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>

                <Box>
                  <FormLabel>Describe your usable vision</FormLabel>
                  <Textarea
                    value={usableVision}
                    onChange={(event) => {
                      setUsableVision(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel htmlFor="pct_vision_loss">
                      Percent vision loss
                    </FormLabel>
                    <NumberInput max={100} min={0} keepWithinRange>
                      <NumberInputField id="pct_vision_loss" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Box>

                <Box>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Textarea
                    value={referral}
                    onChange={(event) => {
                      setReferral(event.target.value);
                    }}
                    size="sm"
                  />
                </Box>

                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={submitting}
                  onClick={() => {
                    setSubmitting(true);
                  }}
                  type="submit"
                >
                  Submit
                </Button>
                <Spacer />
              </VStack>
            </Formik>
          </Stack>
        </Container>
      </Root>
    </body>
  );
};

export default Students;
