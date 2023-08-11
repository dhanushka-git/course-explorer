import React from "react";
import {FaInstagram, FaTwitter, FaYoutube} from "react-icons/all";
import {Box, chakra, Container, Link, Stack, useColorModeValue, VisuallyHidden, Text} from "@chakra-ui/react";
import {NavigateFunction, useNavigate} from "react-router-dom";

const SocialButton = ({children, label, href}: any) => {
    return (
        <chakra.button
            bg={useColorModeValue("white", "whiteAlpha.100")}
            rounded={"full"}
            w={9}
            h={9}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("white", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            <div>
                {children}
            </div>

        </chakra.button>
    );
};

const Footer = () => {
    const navigate:NavigateFunction = useNavigate();

    return (
        <>
            <Box
                bg={useColorModeValue("blue.600", "blue.600")}
                color={useColorModeValue("gray.700", "gray.200")}
                marginBottom={0}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    spacing={4}
                    justify={"center"}
                    align={"center"}
                    color={"white"}
                >
                    <h2 className="text-2xl font-bold">Course Finder</h2>
                    <Stack direction={"row"} spacing={6}>
                        <Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => {
                                navigate("/courses");
                            }}
                        >
                            Courses
                        </Link>
                        <Link
                            onClick={() => {
                                navigate("/profile");
                            }}
                        >
                            Profile
                        </Link>
                        <Link
                            onClick={() => {
                                navigate("/contact");
                            }}
                        >
                            Contact
                        </Link>
                    </Stack>
                </Container>

                <Box
                    borderTopWidth={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    backgroundColor={useColorModeValue("gray.700", "teal.600")}
                >
                    <Container
                        as={Stack}
                        maxW={"6xl"}
                        py={4}
                        direction={{base: "column", md: "row"}}
                        spacing={4}
                        justify={{base: "center", md: "space-between"}}
                        align={{base: "center", md: "center"}}
                    >
                        <Text className={"text-white"}>© 2022 Course Finder. All rights reserved</Text>
                        <Stack direction={"row"} spacing={6} className={'text-white'}>
                            <SocialButton label={"Twitter"} href={"#"}>
                                <FaTwitter color={'blue'} className={''}/>
                            </SocialButton>
                            <SocialButton label={"YouTube"} href={"#"}>
                                <FaYoutube color={'red'}/>
                            </SocialButton>
                            <SocialButton label={"Instagram"} href={"#"}>
                                <FaInstagram color={'red'}/>
                            </SocialButton>
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default Footer;