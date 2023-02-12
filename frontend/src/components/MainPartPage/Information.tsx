import {
    Box,
    Flex,
    Button,
    Stack,
    Heading,
    Text,
    Image,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";

function Information() {
    return (
        <Box w={'100%'} h={'100%'}>
            <Stack direction={'row'}>
                <Flex w={'45%'} padding={3} ml="10" align="center" direction="column" justify="center" pb="150">
                    <Heading>A simple to-do list maker that meets your team’s needs</Heading>
                    <Text mt="7">
                        Create a to-do list as simple or detailed as you need.
                        Everything in Asana starts with a task, which is an actionable to-do that can stand alone or
                        be a building block for bigger projects.
                        Connect the tasks on your to-do lists back to larger projects, loop in teammates, and share
                        real-time updates online.
                    </Text>
                    <Link to="/register"><Button mt="7" size="lg"><Link to={'/login'}>Try it</Link></Button></Link>
                </Flex>
                <Box w={'45%'}>
                    <Image src='https://luna1.co/714711.png' alt='turbo'></Image>
                </Box>
            </Stack>
        </Box>
    );
}

export default Information;