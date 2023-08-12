import {Box, Center, Heading, Stack, Image, useColorModeValue, Text} from "@chakra-ui/react";

const CourseCard = ({courseTitle, instituteName, image, description, onClick}: any) => {
    return (
        <>
            <Center className="cursor-pointer" onClick={onClick}>
                <Box
                    className="rounded-xl max-w-[450px] max-h-[350px] w-full shadow-xl overflow-hidden"
                    bg={useColorModeValue("white", "gray.900")}
                >
                    <Box h={"200px"} bg={"gray.100"} mb={1}>
                        <Image
                            src={image}
                            objectFit={"cover"}
                            height={"200px"}
                            width={"100%"}
                        />
                    </Box>
                    <Stack height={"200px"} padding={2}>
                        <Text
                            color={"green.500"}
                            textTransform={"uppercase"}
                            fontWeight={800}
                            fontSize={"sm"}
                            letterSpacing={1}
                        >
                            {instituteName}
                        </Text>
                        <Heading
                            color={useColorModeValue("gray.700", "white")}
                            fontSize={"xl"}
                            fontFamily={"body"}
                        >
                            {courseTitle}
                        </Heading>
                        <Box>
                            <Text color={"gray.500"} noOfLines={2}>
                                {description}
                            </Text>
                        </Box>
                    </Stack>
                </Box>
            </Center>
        </>
    );
}

export default CourseCard