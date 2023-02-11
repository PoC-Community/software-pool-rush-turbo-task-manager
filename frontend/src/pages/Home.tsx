import {
    Box,
    Stack,
    Center,
    Heading,
} from '@chakra-ui/react';
import Information from "../components/Home/Information";
import Nav from "../components/Navigation/NavBar";

export default function Home() {
    return (
        <Box>
            <Nav/>
            <Stack align='stretch' mb="16">
                <Center h="125" mt="7">
                    <Heading
                        bgGradient='linear(to-l, #A0AEC0, #4A5568)'
                        bgClip='text'
                        fontSize='7xl'
                        fontWeight='extrabold'
                        h="100%">
                        Turbo Task Manager
                    </Heading>
                </Center>
            </Stack>
            <Information></Information>
        </Box>
    );
}
