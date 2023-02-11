import {getToken} from "../../service/token";
import {Box, Button, Flex, Stack, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function NavBar() {
    const {toggleColorMode} = useColorMode();
    let sideInfos;

    if (getToken() != null) {
        sideInfos = <div>
            <Button><Link to={"/dashboard"}>Dashboard</Link></Button>
        </div>
    } else {
        sideInfos = <div>
            <Button><Link to={"/login"}>Login</Link></Button>
            <Button><Link to={"/register"}>Register</Link></Button>
        </div>
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><Link to={"/"}>Turbo Task Manager</Link></Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            {sideInfos}
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
