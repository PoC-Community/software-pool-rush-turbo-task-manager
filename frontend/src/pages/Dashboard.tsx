import {FC} from "react";
import Nav from "../components/Navigation/NavBar";
import {Box, Text, Center, Flex} from "@chakra-ui/react";


import {getToken} from "../service/token";
import {Navigate} from "react-router-dom";
import SideNav from "../components/Navigation/SideBar";

const Dashboard: FC = () => {
    let redirect;

    if (getToken() == null || getToken() === "undefined")
        redirect = <Navigate to="/"/>

    return (
        <Box w="100%">
            <Nav/>
            <Center>
                <Flex w="80%" mt="150px">
                    <SideNav/>
                    <Center w="80%">
                        <Text>Dashboard</Text>
                    </Center>
                </Flex>
            </Center>
            {redirect}
        </Box>
    );
}

export default Dashboard;