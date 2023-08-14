import {
    Box,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    Text,
    Stack,
    Button,
    useDisclosure,
    Menu, MenuButton, MenuList, Center, MenuDivider, MenuItem
} from "@chakra-ui/react";
import {Outlet, useNavigate} from "react-router-dom";
import React, {useState} from "react";

const Navigation = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<any>();
    const {isOpen, onOpen, onClose} = useDisclosure();
    let isLogged: boolean = true;

    const signOutHandler = () => {
        return
    }

    return (
        <>
            <Box bg={useColorModeValue("blue.700", "")} px={10} className="">
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{md: "none"}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>
                            <Text
                                className="text-2xl font-extrabold text-gray-200 cursor-pointer"
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Course Explorer
                            </Text>
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{base: "none", md: "flex"}}
                        >
                            {Links.map((link) => (
                                <p
                                    key={link.name}
                                    className="font-bold text-lg cursor-pointer text-white "
                                    onClick={() => {
                                        if (link.auth) {
                                            isLogged
                                                ? navigate(link.path)
                                                : navigate("/login");
                                        } else {
                                            navigate(link.path);
                                        }
                                    }}
                                >
                                    {link?.name}
                                </p>
                            ))}
                        </HStack>
                    </HStack>
                    <Stack
                        flex={{base: 1, md: 0}}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                    >
                        <Button
                            px={5}
                            fontWeight={400}
                            bg={"white"}
                            color={"black"}
                            onClick={() => {
                                navigate("login");
                            }}
                        >
                            Log In
                        </Button>
                        <Button
                            display={{base: "none", md: "inline-flex"}}
                            fontWeight={600}
                            color={"white"}
                            bg={"pink.400"}
                            _hover={{
                                bg: "pink.300",
                            }}
                            onClick={() => {
                                navigate("signup");
                            }}
                        >
                            Sign Up
                        </Button>
                        {isLogged ? (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    className="bg-white"
                                >
                                    <h1 className=" text-red-800 text-3xl">
                                        {userData?.name[0]}
                                    </h1>
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br/>
                                    <Center>
                                        <p className="font-bold">{userData?.name}</p>
                                    </Center>
                                    <Center>
                                        <p>{userData?.email}</p>
                                    </Center>
                                    <br/>
                                    <MenuDivider/>
                                    <MenuItem
                                        className="cursor-pointer"
                                        onClick={() => {
                                            isLogged ? navigate("/profile") : navigate("/login");
                                        }}
                                    >
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={signOutHandler}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        ) : null}
                    </Stack>
                </Flex>
            </Box>
            <Outlet/>

        </>
    )
}

export default Navigation;

const Links = [
    {name: "Home", path: "/", auth: false},
    {name: "Courses", path: "/courses", auth: false},
    {name: "Profile", path: "/profile", auth: true},
    {name: "Contact", path: "/contact", auth: false},
];