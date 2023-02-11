import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Heading,
    Text,
    Image,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";

function Information() {
    return (
        <Box w={'100%'} h={'100%'}>
        <Stack direction={'row'}>
            <Box w={'45%'} padding={3} h={'100%'}>
                <Heading>A simple to-do list maker that meets your team’s needs</Heading>
                <Text>
                    Create a to-do list as simple or detailed as you need.
                    Everything in Asana starts with a task, which is an actionable to-do that can stand alone or be a building block for bigger projects.
                    Connect the tasks on your to-do lists back to larger projects, loop in teammates, and share real-time updates online.
                </Text>
                <Button ><Link to={'/login'}>Try it</Link></Button>
            </Box>
            <Box w={'45%'}>
                <Image src='https://luna1.co/714711.png' alt='turbo' ></Image>
            </Box>
        </Stack>
        </Box>
    );
}

export default Information;