import {FC} from "react";
import {Box, Text, Center, Flex, ListItem, Tbody, Table, Thead, Th, TableContainer, Tr, Td} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const DashboardGroupsBoards: FC = () => {
    let data = [
        {name: "Personal Space", id: 1, boards: [{name: "First Board", people: ["Thierry", "Marc"]}, {name: "Des Barres", people: ["Josephine", "Marc"]}]},
        {name: "Test 2", id: 2, boards: [{name: "test 1", people: ["Martin", "Ahmed"]}, {name: "test 2", people: ["Kaaris", "Booba"]}, {name: "test 3", people: ["Pira", "Mitra"]}, {name: "test 4", people: []}]},
        {name: "Test 3", id: 3, boards: [{name: "test 4", people: ["Carre", "Axe"]}]},
        {name: "Test 4", id: 4, boards: [{name: "test 3", people: ["Martin", "Ahmed"]}, {name: "test 4", people: ["Jo", "Ahmed"]}]},
        {name: "Test 5", id: 5, boards: [{name: "test 2", people: ["Martin", "Ahmed"]}, {name: "test 3", people: ["Martin", "Fripouille"]}, {name: "test 4", people: ["Martin", "Bubulle"]}]}
    ];

    let listGroups = data.map((group, i) => {
        let listBoards = [];
        let peopleList = new Set();

        for (let j = 0; j < group.boards.length; j++) {
            listBoards.push(<Tr><Link to={"/board/" + group.name + "/" + group.boards[j].name}><Td>{group.boards[j].name}</Td></Link></Tr>)
            for (let k = 0; k < group.boards[j].people.length; k++) {
                peopleList.add(group.boards[j].people[k])
            }
        }

        let sharedWithStr = ""
        // @ts-ignore
        for (let name of peopleList) {
            sharedWithStr += `${name}, `;
        }

        return (
            <Box mt="75" w="65%">
                <Link to={"/board/" + group.name}><Text fontSize="5xl">{group.name}</Text></Link>
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
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        );
    });

    return (
        <Box w="65%" pb="75">
            {listGroups}
        </Box>
    );
}

export default DashboardGroupsBoards;