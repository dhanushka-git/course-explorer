import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel, Input,
    InputGroup,
    Select,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

const Register = () => {
    const {state} = useLocation();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<any>({});

    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        const {name, value, type, checked} = event.target;
    }

    const onSubmitHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/");
        }, 2000);
    }

    return (
        <>
            <Flex
                bg={useColorModeValue("blue.500", "blue.500")}
                className={"w-[100vw] h-[100vh] justify-center flex-col align-center"}
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className="" minW={{base: "90%", md: "468px"}}>
                        <form>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                                className="rounded-xl"
                            >
                                <FormControl isRequired>
                                    <FormLabel>Are you a Student or Institute</FormLabel>
                                    <Select
                                        placeholder="Who are you?"
                                        color={"gray.800"}
                                        name="type"
                                        onChange={handleInputChange}
                                    >
                                        <option value={"student"}>Student</option>
                                        <option value={"institute"}>Institute</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <InputGroup>
                                        <Input
                                            name="name"
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </InputGroup>
                                </FormControl>
                                {form?.type === "student" ? (
                                    <>
                                        <FormControl>
                                            <FormLabel>
                                                Which category are you interested in?
                                            </FormLabel>
                                            <Select
                                                placeholder="Select your interested field"
                                                onChange={handleInputChange}
                                                name="interested_field"
                                            >
                                                <option value={"Science"}>Science</option>
                                                <option value={"Mathematics"}>Mathematics</option>
                                                <option value={"IT"}>Information Technology</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>
                                                What is your highest educational level?
                                            </FormLabel>
                                            <Select
                                                placeholder="Select your highest educational level"
                                                onChange={handleInputChange}
                                                name="max_edu_level"
                                            >
                                                <option value={"Ordinary Level"}>Ordinary Level</option>
                                                <option value={"Advanced Level"}>Advanced Level Level</option>
                                                <option value={"Diploma"}>Diploma</option>
                                                <option value={"Degree"}>Degree</option>
                                            </Select>
                                        </FormControl>
                                    </>
                                ) : null}

                                <Button
                                    className="rounded-xl w-full"
                                    variant="solid"
                                    colorScheme="blue"
                                    onClick={onSubmitHandler}
                                    isLoading={isLoading}
                                    loadingText="Processing"
                                >
                                    Register
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default Register;