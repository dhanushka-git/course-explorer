import {
    Box, Button,
    Flex,
    FormControl,
    FormLabel,
    Heading, Input,
    InputGroup, InputLeftElement,
    Stack, Textarea,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {BsPerson} from "react-icons/bs";
// import { MdOutlineEmail} from "react-icons/md";
import React from "react";

const Contact = () => {
    return (
        <>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                align="center"
                justify="center"
                id="contact"
            >
                <Box m={{base: 5, md: 6, lg: 8}} p={{base: 5, lg: 8}} width={"50%"}>
                    <Box>
                        <VStack spacing={{base: 4, md: 8, lg: 20}}>
                            <Heading
                                fontSize={{
                                    base: "4xl",
                                    md: "5xl",
                                }}
                            >
                                Get in Touch with Us
                            </Heading>

                            <Stack
                                spacing={{base: 4, md: 8, lg: 20}}
                                direction={{base: "column"}}
                                width={"100%"}
                            >
                                <Box
                                    bg={useColorModeValue("white", "gray.700")}
                                    className="rounded-xl p-8 shadow-xl"
                                    color={useColorModeValue("gray.700", "whiteAlpha.900")}
                                >
                                    <VStack spacing={5}>
                                        <FormControl isRequired>
                                            <FormLabel>Name</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement children={<BsPerson/>}/>
                                                <Input type="text" name="name" placeholder="Your Name"/>
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Email</FormLabel>

                                            <InputGroup>
                                                {/*<InputLeftElement children={<MdOutlineEmail/>}/>*/}
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>

                                            <Textarea
                                                name="message"
                                                placeholder="Your Message"
                                                rows={6}
                                                resize="none"
                                            />
                                        </FormControl>

                                        <Button
                                            colorScheme="blue"
                                            bg="teal.400"
                                            color="white"
                                            _hover={{
                                                bg: "teal.500",
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </VStack>
                                </Box>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Contact;