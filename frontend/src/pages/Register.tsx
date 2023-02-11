import {FC, useState} from "react";
import {Box, Button, Center, FormControl, FormLabel, Input, Text, VStack} from "@chakra-ui/react";
import {Link, Navigate} from "react-router-dom";
import {register} from "../service/users.service";
import {Nav} from "./Home";
import {getToken} from "../service/token";


const Register: FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
    let redirect;

    if (getToken() != null)
        redirect = <Navigate to="/Dashboard"/>

    const callRegister = async () => {
        // @ts-ignore
        let connected:boolean = await register(name, email, password, passwordConfirmation)
        if (connected || getToken() != null)
            redirect = <Navigate to="/Dashboard"/>
    }

    return (
        <Box w="100%">
            <Nav/>
            <Center mt="160px">
                <VStack spacing="32px">
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type="email" placeholder="Martin" onChange={(e) => setName(e.target.value)}
                               value={name}/>
                    </FormControl>
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
                    <FormControl mt={6}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type="password" placeholder="*******"
                               onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation}/>
                    </FormControl>
                    <Button width="full" mt={4} type="submit" onClick={callRegister}>
                        Register
                    </Button>
                    <Link to="/login">
                        <button id="registerPage-login-button">Already have an account ?</button>
                    </Link>
                    <Link to="/">
                        <button id="registerPage-home-button"><Text fontSize="xs">Return to Home</Text></button>
                    </Link>
                </VStack>
            </Center>
            {redirect}
        </Box>
    );
}

export default Register;
