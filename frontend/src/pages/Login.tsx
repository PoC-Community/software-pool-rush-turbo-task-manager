import {FC, useState} from "react";
import {Box, Button, Center, FormControl, FormLabel, Input, Text, VStack} from "@chakra-ui/react";
import {Link, Navigate} from "react-router-dom";
import Nav from "../components/Navigation/NavBar";
import {login} from "../service/users.service";
import {getToken} from "../service/token";

const Login: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    let redirect;

    if (getToken() != null)
        redirect = <Navigate to="/Dashboard"/>

    const callLogin = async () => {
        // @ts-ignore
        let connected:boolean = await login(email, password)
        if (connected || getToken() != null)
            redirect = <Navigate to="/Dashboard"/>
    }

    return (
        <Box w="100%">
            <Nav/>
            <Center mt="160px">
                <VStack spacing="32px">
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="test@test.com" onChange={(e) => setEmail(e.target.value)}
                               value={email}/>
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)}
                               value={password}/>
                    </FormControl>
                    <Link to="/dashboard">
                        <Button width="full" mt={4} type="submit" onClick={callLogin}>
                            Sign In
                        </Button>
                    </Link>
                    <button id="loginPage-register-button">Don't have an account ?</button>
                    <Link to="/">
                        <button id="loginPage-home-button"><Text fontSize="xs">Return to Home</Text></button>
                    </Link>
                </VStack>
            </Center>
            {redirect}
        </Box>
    )
};

export default Login;