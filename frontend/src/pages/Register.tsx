import {FC, useState} from "react";
import {Box, Button, Center, FormControl, FormLabel, Input, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Register: FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

    const logInformations = () => {
        console.log("email : " + email)
        console.log("password : " + password)
        console.log("passwordConfirmation : " + passwordConfirmation)
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
                    <FormControl mt={6}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type="password" placeholder="*******"
                               onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation}/>
                    </FormControl>
                    <Link to="/dashboard">
                        <Button width="full" mt={4} type="submit" onClick={logInformations}>
                            <button id="registerPage-register-button">Register</button>
                        </Button>
                    </Link>
                    <Link to="/login">
                        <button id="registerPage-login-button">Already have an account ?</button>
                    </Link>
                    <Link to="/">
                        <button id="registerPage-home-button"><Text fontSize="xs">Return to Home</Text></button>
                    </Link>
                </VStack>
            </Center>
        </Box>
    );
}

export default Register;
