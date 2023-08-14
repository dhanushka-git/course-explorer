import {
    Button,
    Heading,
    Stack,
    Text,
    Container, Box, Icon, useColorModeValue, createIcon
} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <>

            <Box bg={useColorModeValue("blue.700", "gray.700")} className={' h-[80vh]'}>
                <Box className={"justify-center"}>
                    <Stack
                        width={'100%'}
                        textAlign={'center'}
                        spacing={{base: 8, md: 14}}
                        py={{base: 20, md: 36}}>
                        <Heading
                            width={'80%'}
                            margin={'auto'}
                            fontWeight={600}
                            fontSize={{base: '2xl', sm: '4xl', md: '8xl'}}
                            color={useColorModeValue('white', 'white')}
                            lineHeight={'110%'}>
                            Explore the ocean of <br/>
                            <Text as={'span'} color={'yellow.400'}>
                                Opportunity
                            </Text>
                        </Heading>
                        <Text color={'gray.300'}  width={"70%"} className={"m-auto"}>

                            Welcome to a world of endless possibilities. Whether you're a student, a professional, or
                            simply curious, Course Explorer is your ultimate destination to discover and enroll in
                            courses that ignite your passion and fuel your ambition. Explore a diverse range of
                            subjects, guided by experts and thought leaders from around the globe. Embark on a journey
                            of knowledge and transformation today!
                        </Text>
                        <Stack
                            direction={'column'}
                            spacing={3}
                            align={'center'}
                            alignSelf={'center'}
                            position={'relative'}>
                            <Button
                                colorScheme={'green'}
                                bg={'green.400'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Get Started
                            </Button>
                            <Button variant={'link'} color={"white"} size={'md'}>
                                Learn more
                            </Button>

                        </Stack>
                    </Stack>
                </Box>
            </Box>

        </>
    )
}

export default HeroSection

