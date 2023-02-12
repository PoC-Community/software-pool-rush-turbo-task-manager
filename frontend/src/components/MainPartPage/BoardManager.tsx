import {FC} from "react";
import {
    Box,
    Text,
    Center,
    Flex,
    ListItem,
    Tbody,
    Table,
    Thead,
    Th,
    TableContainer,
    Tr,
    Td,
    Button, ButtonGroup
} from "@chakra-ui/react";
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons'
import {Link, useParams} from "react-router-dom";
import LinkToDashboard from "../Navigation/LinkToDashboard";
import ButtonModalCreateTask from "../Button/ButtonModalCreateTask";
import ButtonModalModifyTask from "../Button/ButtonModalModifyTask";
import ButtonModalDetail from "../Button/ButtonModalDetail";
import {text} from "stream/consumers";
const BoardManager: FC = () => {
    const { group, board }= useParams();
    let data = {name: "First Board", people: ["Thierry", "Marc"], tasks: [{content: "blablabla", assign_to: "Thierry"}, {content: "Je suis allé au marché l'autre jour", assign_to: "Thierry"}, {content: "blobloblo", assign_to: "Marc"}, {content: "bliblibli", assign_to: "Marc"}]};
    let sharedWithStr = ""
    let peopleList = new Set();

    data.people.map((name, i) => {
       peopleList.add(name);
    });

    let listBoards = data.tasks.map((task, i) => {
        let cutContent = task.content.substring(0, 20);
        cutContent += "..."
        return (
            <Tr>
                <Td>{cutContent}</Td>
                <Td>{task.assign_to}</Td>
                <Td><ButtonModalDetail/></Td>
                <Td><ButtonModalModifyTask/></Td>
                <Td><Button><DeleteIcon/></Button></Td>
            </Tr>);
    });

    // @ts-ignore
    for (let name of peopleList) {
        sharedWithStr += `${name}, `;
    }

    return (
        <Box mt="75" w="65%">
            <LinkToDashboard/>
            <Text fontSize="5xl">{board}</Text>
            <Text fontSize="1xl" mt="2">Shared with : {sharedWithStr}</Text>
            <TableContainer mt="4">
                <Table variant='simple' whiteSpace="nowrap" size="md">
                    <Thead>
                        <Tr>
                            <Th>Content</Th>
                            <Th>Assign To</Th>
                            <Th>Details</Th>
                            <Th>Modify</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {listBoards}
                        <Tr>
                            <Td><ButtonModalCreateTask/></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default BoardManager;