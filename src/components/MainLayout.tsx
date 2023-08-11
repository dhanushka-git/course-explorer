import {Box} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <>
            <Box className="">
                {/*<Navigation isLogged={isLogged} />*/}
            </Box>
            <Box className=" overflow-auto">
                <Outlet/>
            </Box>
            <Box>
                {/*<Footer />*/}
            </Box>
        </>)
}

export {MainLayout};