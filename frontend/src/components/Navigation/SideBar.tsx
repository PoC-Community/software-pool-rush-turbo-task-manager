import {Box, List, ListItem, Text, Button} from "@chakra-ui/react";
import React from "react";

export default function SideNav() {
    let listGroups = [{name: "Test 1"},{name: "Test 2"},{name: "Test 3"},{name: "Test 4"},{name: "Test 5"}]

    let listItem = listGroups.map((group, i) => {
        let itemList = [];
        itemList.push(<ListItem my="5" key={i}>{group.name}</ListItem>);
        return (
            <List>{itemList}</List>
        );
    });

    return (
        <Box px={4} w="20%">
            <Text fontSize="2xl">Your workspaces :</Text>
                {listItem}
            <Button>Create New Workspace</Button>
        </Box>
    );
}
