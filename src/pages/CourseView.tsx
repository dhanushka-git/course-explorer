import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Stack,
    Image,
    Heading,
    Text,
    VStack,
    StackDivider,
    useColorModeValue, List, ListItem
} from "@chakra-ui/react";
import React from "react";
import {useLocation} from "react-router-dom";

const CourseView = () => {
    const { state } = useLocation();
    const data = state?.message;

    return (
        <div>
            <Container maxW={"7xl"} minH={"80vh"}>
                <SimpleGrid
                    columns={{base: 1, lg: 2}}
                    spacing={{base: 8, md: 10}}
                    py={{base: 18, md: 24}}
                >
                    <Flex>
                        <Image
                            className="rounded-xl object-cover align-middle shadow-xl w-full"
                            alt={"course image"}
                            src={data?.image}
                            h={{base: "100%", sm: "400px", lg: "500px"}}
                        />
                    </Flex>
                    <Stack spacing={{base: 6, md: 10}}>
                        <Box as={"header"}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{base: "2xl", sm: "4xl", lg: "5xl"}}
                            >
                                {data?.name}
                            </Heading>
                            <Text
                                color={useColorModeValue("gray.900", "gray.400")}
                                fontWeight={300}
                                fontSize={"2xl"}
                            >
                                {data?.duration}
                            </Text>
                        </Box>

                        <Stack
                            spacing={{base: 4, sm: 6}}
                            direction={"column"}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue("gray.200", "gray.600")}
                                />
                            }
                        >
                            <VStack spacing={{base: 4, sm: 6}}>
                                <Text fontSize={"lg"}>{data?.description}</Text>
                            </VStack>

                            <Box>
                                <Text
                                    fontSize={{base: "16px", lg: "18px"}}
                                    color={useColorModeValue("yellow.500", "yellow.300")}
                                    fontWeight={"500"}
                                    textTransform={"uppercase"}
                                    mb={"4"}
                                >
                                    Course Details
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={"span"} fontWeight={"bold"}>
                                            Institute
                                        </Text>{" "}
                                        {data?.institute}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={"span"} fontWeight={"bold"}>
                                            Category
                                        </Text>{" "}
                                        {data?.category}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={"span"} fontWeight={"bold"}>
                                            Educational Level
                                        </Text>{" "}
                                        {data?.edu_level}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default CourseView;