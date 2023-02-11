import { ReactNode } from 'react';
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


/*const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        //py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>

);*/

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
        <div>
            <Nav></Nav>
            <Center>
                <Stack align='stretch'>
                    <Heading>Turbo Task Manager</Heading>
                    <Box justify-content={'align'}>Manage your turbo tasks</Box>
                </Stack>
            </Center>
        </div>
    );
}

export default Home;
