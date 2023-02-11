import axios from "axios";
import {setToken} from "./token";

const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
    if (password !== passwordConfirmation) {
        console.log("Password are not the same")
        return;
    }

    await axios.post("/register", {
        name: name,
        email: email,
        password: password,
    }).then((data) => {
        if (data.data.status === "success") {
            setToken(data.data.data.token);
            console.log(data.data.message)
            return true;
        } else {
            console.log(data.data.message)
            return false;
        }
    }).catch(() => console.log("Failed"))
}

const login = async (email: string, password: string) => {
    await axios.post("/login", {
        email: email,
        password: password,
    }).then((data) => {
        if (data.data.status === "success") {
            setToken(data.data.data.token);
            console.log(data.data.message)
            return true;
        } else {
            console.log(data.data.message)
            return false;
        }
    }).catch(() => console.log("Failed"))
}

export {
    register,
    login
}
