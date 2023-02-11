import axios from "axios";
import {setToken} from "./token";

const createBoard = async (name: string, connected:boolean) => {
    await axios.post("/create_board", {
        name: name,
    }).then((data) => {
        if (data.data.status === "success") {
            setToken(data.data.data.token);
            console.log(data.data.message)
        } else {
            console.log(data.data.message)
        }
    }).catch(() => console.log("Failed"))
}

export {
    createBoard
}