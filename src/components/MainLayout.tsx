import {Box} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const MainLayout = () => {

    return (
        <>
            <Box className="">
                <Navigation/>
            </Box>
            <Box className=" overflow-auto">
            </Box>
            <Box>
                <Footer/>
            </Box>
        </>)
}

export {MainLayout};