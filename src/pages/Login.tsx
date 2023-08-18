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
import {toast} from "react-toastify";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleShowClick = () => setShowPassword(!showPassword);

    const loginHandler = () => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: any) => {
                const user = userCredential.user;
                if (user) {
                    setIsLoading(false);
                    toast("Login successful", {
                        autoClose: 8000,
                    });
                    navigate("/");
                }
            })
            .catch((error: any) => {
                setIsLoading(false);
                toast("Login failed.Please check your credentials", {
                    autoClose: 8000,
                });
                console.error("Error in login", error)
            });
    };


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