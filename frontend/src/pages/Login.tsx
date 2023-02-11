import {FC, useState} from "react";
import {Box, Button, Center, FormControl, FormLabel, Input, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Login: FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const logInformations = () => {
        console.log("email : " + email)
        console.log("password : " + password)
    }

    return (
        <Box w="100%">
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
                        <Button width="full" mt={4} type="submit" onClick={logInformations}>
                            <button id="loginPage-login-button">Sign In</button>
                        </Button>
                    </Link>
                    <Link to="/register">
                        <button id="loginPage-register-button">Don't have an account ?</button>
                    </Link>
                    <Link to="/">
                        <button id="loginPage-home-button"><Text fontSize="xs">Return to Home</Text></button>
                    </Link>
                </VStack>
            </Center>
        </Box>
    )
};

export default Login;