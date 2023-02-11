import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Heading,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Information from "../components/Information";

function Nav() {
    const {toggleColorMode} = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><Link to={"/"}>Turbo Task Manager</Link></Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link to={"/login"}>Login</Link>
                            </Button>
                            <Button>
                                <Link to={"/register"}>Register</Link>
                            </Button>
                            <Button onClick={toggleColorMode}>
                                Dark Mode
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
function Home() {
    return (
        <Box>
            <Nav></Nav>
                <Stack align='stretch'>
                    <Center>
                    <Heading
                        bgGradient='linear(to-l, #A0AEC0, #4A5568)'
                        bgClip='text'
                        fontSize='7xl'
                        fontWeight='extrabold'>
                        Turbo Task Manager
                    </Heading>
                    </Center>
                </Stack>
                <Information></Information>
        </Box>
    );
}

export {
    Home,
    Nav
};
