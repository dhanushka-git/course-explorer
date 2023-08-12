import {Box, Container, Heading, Stack, useColorModeValue, Text, Avatar, Flex} from "@chakra-ui/react";
import React from "react";


const TestimonialSection = () => {

    return (
        <section>
            <Box bg={useColorModeValue("gray.100", "gray.700")}>
                <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
                    <Stack spacing={0} align={"center"}>
                        <Heading>Ask Our Clients</Heading>
                        <Text>We have been connecting students everywhere</Text>
                    </Stack>
                    <Stack
                        direction={{base: "column", md: "row"}}
                        spacing={{base: 10, md: 4, lg: 10}}
                    >
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Simple Process</TestimonialHeading>
                                <TestimonialText>
                                    Because of the simple process, it's very easy to track courses
                                    with course finder.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                }
                                name={"Kelly"}
                                title={"Student at Hardy College"}
                            />
                        </Testimonial>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Latest Updates</TestimonialHeading>
                                <TestimonialText>
                                    Course finder gives us the latest updates.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                }
                                name={"Jonas"}
                                title={"Student at Sussex College"}
                            />
                        </Testimonial>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                                <TestimonialText>
                                    Course finder is very helpful to find students for our courses.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                }
                                name={"Jehan Malik"}
                                title={"Lohan Institute"}
                            />
                        </Testimonial>
                    </Stack>
                </Container>
            </Box>
        </section>
    )
}

export default TestimonialSection

const TestimonialAvatar = ({src, name, title}: any) => {
    return (
        <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar src={src} mb={2}/>
            <Stack spacing={-1} align={"center"}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

const TestimonialText = ({children}: any) => {
    return (
        <Text
            textAlign={"center"}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={"sm"}
        >
            {children}
        </Text>
    );
};

const TestimonialHeading = ({children}: any) => {
    return (
        <Heading as={"h3"} fontSize={"xl"}>
            {children}
        </Heading>
    );
};

const TestimonialContent = ({children}: any) => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"lg"}
            p={8}
            rounded={"xl"}
            align={"center"}
            pos={"relative"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderTop: "solid",
                borderTopWidth: 16,
                borderTopColor: useColorModeValue("white", "gray.800"),
                pos: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            {children}
        </Stack>
    );
};

const Testimonial = ({children}: any) => {
    return <Box>{children}</Box>;
};