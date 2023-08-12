import {
    Button,
    Flex,
    Heading,
    Stack,
    useBreakpointValue,
    Text,
    Image
} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero-section">
                <Stack
                    minH={"70vh"}
                    direction={{base: "column", md: "row"}}
                    bg={"gray.100"}
                >
                    <Flex p={8} flex={1} align={"center"} justify={"center"}>
                        <Stack spacing={6} w={"full"} maxW={"lg"}>
                            <Heading fontSize={{base: "3xl", md: "4xl", lg: "5xl"}}>
                                <Text
                                    as={"span"}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "full",
                                        height: useBreakpointValue({base: "20%", md: "30%"}),
                                        position: "absolute",
                                        bottom: 1,
                                        left: 0,
                                        bg: "blue.400",
                                        zIndex: -1,
                                    }}
                                >
                                    Find Your Desired Course
                                </Text>
                                <br/>{" "}

                            </Heading>
                            <Text fontSize={{base: "md", lg: "lg"}} color={"gray.500"}>
                                The Course Finder is an exclusive resource for find suitable courses
                                for students. Institutes can post their courses here and then
                                students can track relevent courses.
                            </Text>
                            <Stack direction={{base: "column", md: "row"}} spacing={4}>
                                <Button
                                    className="text-white rounded-full"
                                    rounded={"full"}
                                    bg={"blue.400"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={() => {
                                        navigate("courses");
                                    }}
                                >
                                    Find Courses
                                </Button>
                                <Button
                                    onClick={() => {
                                        navigate("signup");
                                    }}
                                    rounded={"full"}
                                >
                                    Register to Receive Notifications
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={"Login Image"}
                            objectFit={"cover"}
                            src={
                                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            }
                        />
                    </Flex>
                </Stack>
            </section>
        </>
    )
}

export default HeroSection