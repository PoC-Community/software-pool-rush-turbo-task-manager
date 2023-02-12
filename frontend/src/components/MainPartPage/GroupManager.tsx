import {FC} from "react";
import {Box, Text, Center, Flex, ListItem, Tbody, Table, Thead, Th, TableContainer, Tr, Td} from "@chakra-ui/react";
import {Link, useParams} from "react-router-dom";
import LinkToDashboard from "../Navigation/LinkToDashboard";
import ButtonModalCreateBoard from "../Button/ButtonModalCreateBoard";

const GroupManager: FC = () => {
    const { group }= useParams();
    let data = {name: "Personal Space", id: 1, boards: [{name: "First Board", people: ["Thierry", "Marc"]}, {name: "Des Barres", people: ["Josephine", "Marc"]}]};
    let sharedWithStr = ""
    let peopleList = new Set();

    let listBoards = data.boards.map((board, i) => {
        for (let people of board.people) {
            peopleList.add(people)
        }
        return (<Tr><Link to={"/board/" + group + "/" + board.name}><Td>{board.name}</Td></Link></Tr>);
    });

    // @ts-ignore
    for (let name of peopleList) {
        sharedWithStr += `${name}, `;
    }

    return (
        <Box mt="75" w="65%">
            <LinkToDashboard/>
            <Text fontSize="5xl">{group}</Text>
            <Text fontSize="1xl" mt="2">Shared with : {sharedWithStr}</Text>
            <TableContainer mt="4">
                <Table variant='simple' whiteSpace="nowrap" size="md">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {listBoards}
                        <Tr>
                            <Td><ButtonModalCreateBoard/></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default GroupManager;