import {Box, List, ListItem, Text, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import ButtonModalCreateWorkspace from "../Button/ButtonModalCreateWorkspace";

export default function SideBarDashboard() {
    let data = [{name: "Personal Space", id: 1},{name: "Test 2", id: 2},{name: "Test 3", id: 3},{name: "Test 4", id: 4},{name: "Test 5", id: 5}]

    let listItem = data.map((group, i) => {
        return (
            <Link to={"/board/" + group.name}><ListItem my="5" pl="5" key={i}>{group.name}</ListItem></Link>
        );
    });

    return (
        <Box px={4} w="35%" mt="150px">
            <Text fontSize="2xl">Your workspaces :</Text>
            <List>
                {listItem}
            </List>
            <ButtonModalCreateWorkspace/>
        </Box>
    );
}
