import {Button} from "@chakra-ui/react";
import {FC, useState} from "react";
import CreateNewWorkspace from "../Modal/CreateNewWorkspace";
import CreateNewTask from "../Modal/CreateNewTask";

const ButtonModalCreateWorkspace: FC = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div>
            <Button type="submit" onClick={handleClick}>Create New Task</Button>
            <CreateNewTask show={open} handleClick={handleClick}/>
        </div>
    )
}

export default ButtonModalCreateWorkspace