import {Box, List, ListItem, Text, Button} from "@chakra-ui/react";
import {Link, useParams} from "react-router-dom";
import ButtonModalCreateWorkspace from "../Button/ButtonModalCreateWorkspace";
import ButtonModalCreateBoard from "../Button/ButtonModalCreateBoard";

export default function SideBarBoard() {
    const { group, board }= useParams();
    let data = {name: "Personal Space", id: 1, boards: [{name: "First Board", people: ["Thierry", "Marc"]}, {name: "Des Barres", people: ["Josephine", "Marc"]}]}

    let listItem = data.boards.map((board, i) => {
        return (
            <Link to={"/board/" + group + "/" + board.name}><ListItem my="5" pl="5" key={i}>{board.name}</ListItem></Link>
        );
    });

    return (
        <Box px={4} w="35%" mt="150px">
            <Text fontSize="2xl">Boards in {group} :</Text>
            <List>
                {listItem}
            </List>
            <ButtonModalCreateBoard/>
        </Box>
    );
}
