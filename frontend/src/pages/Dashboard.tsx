import {FC} from "react";
import Nav from "../components/Navigation/NavBar";
import {Box, Text, Center, Flex} from "@chakra-ui/react";


import {getToken} from "../service/token";
import {Navigate} from "react-router-dom";
import SideBarDashboard from "../components/Navigation/SideBarDashboard";
import DashboardGroupsBoards from "../components/MainPartPage/DashboardGroupsBoards";

const Dashboard: FC = () => {
    let redirect;

    if (getToken() == null || getToken() === "undefined")
        redirect = <Navigate to="/"/>

    return (
        <Box w="100%">
            <Nav/>
            <Center>
                <Flex w="60%">
                    <SideBarDashboard/>
                    <DashboardGroupsBoards/>
                </Flex>
            </Center>
            {redirect}
        </Box>
    );
}

export default Dashboard;