import {
    Box,
    Flex,
    Heading,
    Stack,
    useColorModeValue,
    Image,
    FormControl,
    InputGroup,
    InputLeftElement, Input, InputRightElement, Button, Link, chakra
} from "@chakra-ui/react";
import React, {useState} from "react";
import {FaUserAlt, FaLock,} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async () => {
        setIsLoading(true);
    }

    const handleShowClick = () => setShowPassword(!showPassword);


    return (
        <div>
            <Flex
                flexDirection={"row"}
                bg={useColorModeValue("blue.500", "blue.500")}
            >
                <Box height={"100vh"} width={"60vw"}>
                    <Image
                        objectFit={"cover"}
                        height={"100%"}
                        src={
                            "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_960_720.jpg"
                        }
                    />
                </Box>
                <Box margin={"auto"} textAlign={"center"}>
                    <Stack className="justify-center align-center mb-3 flex-col ">
                        <Box className="m-auto">
                            {/*<Image src={logo} height={"100px"}/>*/}
                        </Box>
                        <Heading className="text-white py-2">Hello Again!</Heading>
                        <Box minW={{base: "90%", md: "468px"}}>
                            <form>
                                <Stack className="rounded-xl p-8 bg-white shadow-lg]">
                                    <FormControl className={'pb-4'}>
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
                                    <FormControl className={'pb-4'}>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                color="gray.300"
                                                children={<CFaLock color="gray.300"/>}
                                            />
                                            <Input
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                    {showPassword ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                    <Button
                                        onClick={loginHandler}
                                        variant="solid"
                                        colorScheme="blue"
                                        className="w-full rounded-xl"
                                        isLoading={isLoading}
                                        loadingText="Processing"
                                    >
                                        Login
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                        <Box className="text-white">
                            New to us?{" "}
                            <Link
                                className="text-white font-bold"
                                onClick={() => {
                                    navigate("/signup");
                                }}
                            >
                                Sign Up
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
        </div>
    )
}

export default Login;