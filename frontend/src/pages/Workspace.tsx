import {FC} from "react";
import Nav from "../components/Navigation/NavBar";
import {Box, Center, Flex, Text} from "@chakra-ui/react";

import {getToken} from "../service/token";
import {Navigate, useParams} from "react-router-dom";
import SideBarDashboard from "../components/Navigation/SideBarDashboard";
import BoardsGroups from "../components/MainPartPage/GroupManager";
import GroupManager from "../components/MainPartPage/GroupManager";

const Workspace: FC = () => {
    let redirect;

    if (getToken() == null || getToken() === "undefined")
        redirect = <Navigate to="/"/>

    return (
        <Box w="100%">
            <Nav/>
            <Center>
                <Flex w="60%">
                    <SideBarDashboard/>
                    <GroupManager/>
                </Flex>
            </Center>
            {redirect}
        </Box>
    );
}

export default Workspace;