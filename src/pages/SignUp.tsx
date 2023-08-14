import {
    Box, Button,
    Flex,
    FormControl,
    Heading, Input,
    InputGroup,
    InputLeftElement, InputRightElement,
    Stack,
    Image,
    useColorModeValue, chakra
} from "@chakra-ui/react";
import React, {useState} from "react";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState("dopssaas@ghj.com");
    const [password, setPassword] = useState("dsdfdsfsdfsf");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const signUpHandler = async () => {
        setIsLoading(true)
    }


    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                bg={useColorModeValue("blue.500", "blue.500")}
                justifyContent="center"
                alignItems="center"
                blur={"md"}
            >
                <Stack className="justify-center align-center flex-col mb-2">
                    <Box className="m-auto">
                        {/*<Image src={logo} height={"100px"}/>*/}
                    </Box>

                    <Heading color="white">Welcome to Course Explorer</Heading>
                    <Box minW={{base: "90%", md: "468px"}}>
                        <Stack className="bg-white gap-4 p-8 shadow-xl rounded-xl">
                            <FormControl isRequired className={"pb-4"}>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300"/>}
                                    />
                                    <Input
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="email"
                                        placeholder="email address"
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl className={"pb-4"}>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300"/>}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl className={"pb-4"}>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300"/>}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Re-enter password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                className="rounded-xl"
                                variant="solid"
                                colorScheme="blue"
                                width="full"
                                onClick={signUpHandler}
                                isLoading={isLoading}
                                loadingText="Signing Up"
                            >
                                SignUp
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default SignUp;